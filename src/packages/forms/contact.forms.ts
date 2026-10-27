import type { FormConfig } from "@/types/forms";

export const contactForm: FormConfig = {
  id: "contact",
  title: "Get in touch",
  description: "Tell us about your project and we'll get back to you.",
  submitLabel: "Send message",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      autocomplete: "name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      autocomplete: "email",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      rows: 5,
      required: true,
    },
  ],
};
