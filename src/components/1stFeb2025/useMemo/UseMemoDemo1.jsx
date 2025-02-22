import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

export const UseMemoDemo1 = () => {
    
    const [query, setQuery] = useState("");
    const [items, setitems] = useState([
        "Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Watermelon", "Papaya", "Guava", "Kiwi"
    ]);
    
    const filterData = useMemo(() => {
        return items.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        })
    }, [query, items]);

    return (
        <div>
            <h1>Demo</h1>

            <input 
                type="search" 
                placeholder="Enter the Item to Search...." 
                onChange={(e) => setQuery(e.target.value)} 
                className="form-control w-50 mb-4 p-2 center mx-auto"
            />

            <ul className="list-unstyled mb-4 p-2 border">
                {
                    filterData.map((item, index) => (
                        <li 
                            key={index}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>

            <Button variant="primary" onClick={() => setitems([...items, "Strawberry"])}>Add Strawberry</Button>
        </div>
    );
};
