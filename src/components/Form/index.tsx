import { useForm } from "./hook"

const Form = () => {
  const { handleSubmit, text, onChangeHandler } = useForm();
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={onChangeHandler} /> 
      <input type="submit" value="Add" />
    </form>
  );
}

export default Form;