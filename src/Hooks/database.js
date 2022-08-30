import axios from "axios";
import { useEffect, useState } from "react";

// Contact hooks function

// To get the contact details using hooks and share with other components

const Database = () => {
  const [Data, setData] = useState([]);

  console.log(Data);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/spankaj0592-rock/Dukan/db`
        );

        const myData = response.data;
        setData(myData);
        console.log(myData);
      
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return [Data];
};

export default Database;