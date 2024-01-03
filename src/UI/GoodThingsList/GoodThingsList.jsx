import React, {useEffect, useState} from 'react';
import GoodThing from "../GoodThingItem/GoodThing";

const GoodThingsList = ({region}) => {
    const [kindThings, setKindThings] = useState([]);

    useEffect(() => {
        console.log(region.id)
        // fetch data
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "gt/"+region.id
                )
            ).json();
            setKindThings(data.data);
        };
        dataFetch();
    }, [region]);
    return (
        <div>
            <h1>{region.name}</h1>{
            kindThings.map(kindThing =>
                <GoodThing kindThing={kindThing} key={kindThing.id}/>
            )
        }
        </div>
    );
};

export default GoodThingsList;