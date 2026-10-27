import type { FormConfig } from "@/types/forms";

export const signInForm: FormConfig = {
  id: "signin",
  title: "Welcome back",
  description: "Sign in to your account to continue.",
  submitLabel: "Sign in",
  fields: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      autocomplete: "email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
      autocomplete: "current-password",
      required: true,
    },
  ],
};

export const signUpForm: FormConfig = {
  id: "signup",
  title: "Create your account",
  description: "Start in under a minute.",
  submitLabel: "Sign up",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your name",
      autocomplete: "name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      autocomplete: "email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      autocomplete: "new-password",
      required: true,
    },
    {
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      autocomplete: "new-password",
      required: true,
    },
  ],
};
