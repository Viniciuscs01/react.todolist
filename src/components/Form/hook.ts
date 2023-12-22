import { useContext, useState } from "react";
import { ItemsContext } from "../../context/items-context";
import Item from "../../models/item";
import API from "../../services/api";

export const useForm = () => {
  const [text, setText] = useState<string>('');
  const itemsContext = useContext(ItemsContext);

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const newItem: Item = {
      description: text,
      due_date: new Date().toISOString(),
      completed: false
    }

    const result = await API.post(newItem);
    if(result.id) {
      itemsContext.setItems([...itemsContext.items, result]);
      setText('');
    }
    else {
      console.log(result);
    }
  }

  const onChangeHandler = ({ target }: any) => {
    setText(target.value);
  }

  return {
    text,
    onChangeHandler,
    handleSubmit
  }
}
