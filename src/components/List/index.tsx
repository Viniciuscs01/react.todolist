import { useContext } from "react";
import ListItem from "../ListItem";
import Item from "../../models/item";
import { ItemsContext } from "../../context/items-context";
import "./index.css"

const List = () => {  

  const itemsContext = useContext(ItemsContext);

  return (
    <ul className="list">
      {
        itemsContext.items.map((item: Item, index: number) => <ListItem key={index} item={item}  />)
      }
    </ul>
  );
}

export default List;