export type FieldType =
  | "text"
  | "email"
  | "password"
  | "tel"
  | "textarea"
  | "checkbox";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  autocomplete?: string;
  required?: boolean;
  rows?: number;
};

export type FormConfig = {
  id: string;
  title: string;
  description?: string;
  submitLabel: string;
  fields: FieldConfig[];
};
