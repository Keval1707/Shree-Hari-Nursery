// import React from 'react';
import '../styles/Plant.css'; // Import the CSS file

interface Plant {
  id: number;
  name: string;
  path: string;
  Category: string;
  desc: string;
}

interface PlantsProps {
  plantData: Plant[];
}

export default function Plants({ plantData }: PlantsProps) {
  return (
    <section className="plants-section">
      <h1>Plants</h1>
      <div className="plants-container">
        {plantData.map((plant) => (
          <div key={plant.id} className="plant-card">
            <div className="plant-card-inner">
              <div className="plant-card-top">
                <img src={plant.path} alt={plant.name} className="plant-image" />
              </div>
              
              <div className="plant-card-bottom">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-category"><strong>Category:</strong> {plant.Category}</p>
                <p className="plant-desc">{plant.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
