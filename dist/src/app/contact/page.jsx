import ContactForm from "../../components/ContactForm";
import React from "react";
export default function ContactPage() {
    return (<article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">contact me.</h1>
      
      <ContactForm />
    </article>);
}
