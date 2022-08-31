
import { useEffect, useState } from "react";



const Database = () => {
  const [Data, setData] = useState([]);
  const[DataCatogories, setDataCat] = useState([]);
console.log("sds"+DataCatogories);


useEffect(() => {
fetch('http://localhost:3000/db')
  .then(res => {
    return res.json()
    .then(data =>{
      setData(data)
      setDataCat(data.categories);
     
      
    })
  });
  
}, []);
return [Data];

}
  

export default Database