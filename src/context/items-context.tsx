import { createContext, useEffect, useState } from "react";
import Item from "../models/item";
import API from "../services/api";

type ItemsContextType = {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemsContextDefaultValues = {
    items: [],
    setItems: () => {}
}

export const ItemsContext = createContext<ItemsContextType>(ItemsContextDefaultValues);

export const ItemsContextProvider = ({ children }: any) => {

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
      const fetchItems = async () => {
        const items: Item[] = await API.get<Item>();
        console.log(items);
        setItems(items);
      }
      
      fetchItems();
    }, []);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    )
}