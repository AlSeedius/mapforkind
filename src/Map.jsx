import * as React from "react";
import MyPath from "./MyPath";
import MyModal from "./UI/Modal/MyModal";
import {useEffect, useState} from "react";
import GoodThingsList from "./UI/GoodThingsList/GoodThingsList";
export const Map = () => {

 const [regions, setRegions] = useState([]);

 useEffect(() => {
  const dataFetch = async () => {
   const data = await (
       await fetch(
           "api/"
       )
   ).json();
   setRegions(data.data);
  };
  dataFetch();
 }, []);

 const clicked = (reg) => {
     if (reg.count > 0) {
         setRegion(reg)
         setModal(true)
     }
 }

 const [modal, setModal] = useState(false)
 const [region, setRegion] = useState({id: "0", className: "", d: "", count: 0})

 return (
     <div>
      <MyModal visible={modal} setVisible={setModal}>
          {modal
              ? <GoodThingsList region={region}/>
              : <div/>
          }
      </MyModal>
      <svg viewBox="0 0 2127.7 1162">
       {
        regions.map(region =>
            <MyPath region={region} key={region.id} click={clicked}/>
        )}
      </svg>
     </div>
 )
};
export default Map;
