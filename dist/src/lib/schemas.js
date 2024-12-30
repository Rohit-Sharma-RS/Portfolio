import { z } from "zod";
export var ContactFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required." })
        .min(2, { message: "Must be at least 2 characters." }),
    email: z
        .string()
        .min(1, { message: "Email is required." })
        .email("Invalid email."),
    message: z.string().min(1, { message: "Message is required." }),
});
var iconLink = z.object({
    name: z.string(),
    href: z.string().url(),
    icon: z.custom(),
});
var project = z.object({
    name: z.string(),
    description: z.string(),
    href: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    links: z.array(iconLink),
});
export var projectSchema = z.object({ projects: z.array(project) });
var experience = z.object({
    name: z.string(),
    href: z.string(),
    title: z.string(),
    logo: z.string(),
    start: z.string(),
    end: z.string().optional(),
    description: z.array(z.string()).optional(),
    links: z.array(iconLink).optional(),
});
export var careerSchema = z.object({ career: z.array(experience) });
export var educationSchema = z.object({ education: z.array(experience) });
export var socialSchema = z.object({ socials: z.array(iconLink) });
