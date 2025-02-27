import ServiceCard from "./ServiceCard";
import "./Services.css";
import ServiceData from './ServiceData.json'
// import { useState } from 'react';

function Services({ numberOfCards }) {
  // const [service, setService] = useState(Array(numberOfCards).fill(""));
  return (
    <>
     <h1 className="serviceHeading">Our Services</h1>
    <div className="service-wrapper">
      {ServiceData.map((s,id) => {
        return(
           <ServiceCard images={s.image} name={s.name} description={s.description}/>
        )
      })}
    </div>
    </>
  );
}

export default Services;
