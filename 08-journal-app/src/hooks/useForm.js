import { useState } from "react";

export const useForm = (initialForm = {}) => {
  
  const [formState, setFormState] = useState(initialForm);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleReset = () => {
   setFormState(initialForm);
  }

  return {
   ...formState,
   formState,
   handleChange,
   handleReset
  }
}