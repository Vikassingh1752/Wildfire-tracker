import Map from "./Components/Map";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Header from "./Components/Header";

function App() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
        const { events } = await res.json();
        setEvent(events);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if(loading){

      fetchEvent();
    }
  }, [loading]);
  console.log(event);
  return (
<>
  <Header/>
  
  {loading ?  <Loader /> :<Map event={event} />}
  </>

  );
  
}

export default App;
