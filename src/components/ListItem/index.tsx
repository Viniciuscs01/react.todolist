import ItemProps from "./item-props";
import "./index.css"

const ListItem = ({ item }: ItemProps) => {
  return <li className="list__item">
    <input id="completed" type="checkbox" />
    <label htmlFor="completed">{item.description}</label>
    </li>;
}

export default ListItem;