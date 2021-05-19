import { useState } from "react";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const change = ({ target: { name, type, value } }) => {
    setForm({
      ...form,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const resetForm = () => setForm(initialForm);

  return [form, change, resetForm];
};
