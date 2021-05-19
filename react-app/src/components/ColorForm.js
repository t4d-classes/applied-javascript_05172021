import { useForm } from "../hooks/useForm";

export const ColorForm = (props) => {
  const [colorForm, change, resetForm] = useForm({
    name: "",
    hexcode: "",
  });

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });

    resetForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input
          id="color-name-input"
          type="text"
          name="name"
          value={colorForm.name}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hexcode:</label>
        <input
          id="color-hexcode-input"
          type="text"
          name="hexcode"
          value={colorForm.hexcode}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );
};
