import { getVectorStore } from "../../../lib/vectordb";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { LangChainStream, Message, StreamingTextResponse } from "ai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { HuggingFaceHub } from "langchain/llms/huggingface_hub";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const latestMessage = messages[messages.length - 1].content;

    const { stream, handlers } = LangChainStream();

    // Use HuggingFace-based chatbot
        const chatModel = new HuggingFaceInference({
          model: "facebook/blenderbot-400M-distill", // Free chatbot model
          streaming: true,
          callbacks: [handlers],
          verbose: true,
          temperature: 0.7,
        });

    const retriever = (await getVectorStore()).asRetriever();

    // Retrieve context based on chat history
    const chatHistory = messages
      .slice(0, -1) // Exclude the latest message
      .map((msg: Message) =>
        msg.role === "user"
          ? new HumanMessage(msg.content)
          : new AIMessage(msg.content),
      );

    // Final prompt configuration
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a friendly chatbot for a developer's personal portfolio website. " +
          "Help users by answering questions based on the given context below. " +
          "Provide concise responses in markdown format.\n\n" +
          "Context:\n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page content:\n{page_content}",
      ),
      documentSeparator: "\n------\n",
    });

    // Retrieval chain setup
    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: retriever,
    });

    retrievalChain.invoke({
      input: latestMessage,
      chat_history: chatHistory,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
