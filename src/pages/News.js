import React from "react";
import ageCategories from "../assets/ages";
import AgeCard from "../components/ageCard";

export default function News() {
  return (
    <div className="Big-container">
     
      <div className="infoCards">
        {ageCategories.map((ageCategory) => (
          <AgeCard key={ageCategory.id} ageCard={ageCategory} />))}
      </div>
          
    </div>
  );
}
