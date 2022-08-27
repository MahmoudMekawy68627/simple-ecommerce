import { createContext, useState } from "react";

let DataContext = createContext([]);

export function DataContextProvider (props){
    let [data , setData] = useState([]);
    return <DataContext.Provider value={data}>

    </DataContext.Provider>
}