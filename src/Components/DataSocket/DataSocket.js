import {io} from "socket.io-client";
import Athlete from "../Athlete/Athlete"
import { useEffect, useState } from "react";

const DataSocket = () => {
    const [items, itemUpdate] = useState([]);
    const socket = io("https://mst-full-stack-dev-test.herokuapp.com/");

    useEffect(() => {
        socket.on("data-update", (data) => {
            // Update the state with the latest update
            console.log(data)
            itemUpdate((prev) => {
                console.log("ITEMS", prev);
                return [
                    ...prev,
                    {first: data.First, last: data.Last, nationality: data.Nationality, score: data. Score, sex: data.Sex}
                ]
            })
        })
    }, []);

    return items.map(item => <Athlete firstName={item.first} lastName={item.last} nationality={item.nationality} score={item.score} sex={item.sex} />
            ) 
}
    
export default DataSocket