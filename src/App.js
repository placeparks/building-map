
import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';

const buildings = [
  { name: 'Building 1', height: '200m', floors: 50, location: 'New York' },
  { name: 'Building 2', height: '150m', floors: 35, location: 'Los Angeles' },
  { name: 'Building 3', height: '300m', floors: 70, location: 'Chicago' },
  // ... add buildings 4-50 here in similar format ...
  { name: 'Building 4', height: '400m', floors: 40, location: 'City 4' },
  { name: 'Building 5', height: '500m', floors: 50, location: 'City 5' },
  { name: 'Building 6', height: '600m', floors: 60, location: 'City 6' },
  { name: 'Building 7', height: '700m', floors: 70, location: 'City 7' },
  { name: 'Building 8', height: '800m', floors: 80, location: 'City 8' },
  { name: 'Building 9', height: '900m', floors: 90, location: 'City 9' },
  { name: 'Building 10', height: '1000m', floors: 100, location: 'City 10' },
  { name: 'Building 11', height: '1100m', floors: 110, location: 'City 11' },
  { name: 'Building 12', height: '1200m', floors: 120, location: 'City 12' },
  { name: 'Building 13', height: '1300m', floors: 130, location: 'City 13' },
  { name: 'Building 14', height: '1400m', floors: 140, location: 'City 14' },
  { name: 'Building 15', height: '1500m', floors: 150, location: 'City 15' },
  { name: 'Building 16', height: '1600m', floors: 160, location: 'City 16' },
  { name: 'Building 17', height: '1700m', floors: 170, location: 'City 17' },
  { name: 'Building 18', height: '1800m', floors: 180, location: 'City 18' },
  { name: 'Building 19', height: '1900m', floors: 190, location: 'City 19' },
  { name: 'Building 20', height: '2000m', floors: 200, location: 'City 20' },
  { name: 'Building 21', height: '2100m', floors: 210, location: 'City 21' },
  { name: 'Building 22', height: '2200m', floors: 220, location: 'City 22' },
  { name: 'Building 23', height: '2300m', floors: 230, location: 'City 23' },
  { name: 'Building 24', height: '2400m', floors: 240, location: 'City 24' },
  { name: 'Building 25', height: '2500m', floors: 250, location: 'City 25' },
  { name: 'Building 26', height: '2600m', floors: 260, location: 'City 26' },
  { name: 'Building 27', height: '2700m', floors: 270, location: 'City 27' },
  { name: 'Building 28', height: '2800m', floors: 280, location: 'City 28' },
  { name: 'Building 29', height: '2900m', floors: 290, location: 'City 29' },
  { name: 'Building 30', height: '3000m', floors: 300, location: 'City 30' },
  { name: 'Building 31', height: '3100m', floors: 310, location: 'City 31' },
  { name: 'Building 32', height: '3200m', floors: 320, location: 'City 32' },
  { name: 'Building 33', height: '3300m', floors: 330, location: 'City 33' },
  { name: 'Building 34', height: '3400m', floors: 340, location: 'City 34' },
  { name: 'Building 35', height: '3500m', floors: 350, location: 'City 35' },
  { name: 'Building 36', height: '3600m', floors: 360, location: 'City 36' },
  { name: 'Building 37', height: '3700m', floors: 370, location: 'City 37' },
  { name: 'Building 38', height: '3800m', floors: 380, location: 'City 38' },
  { name: 'Building 39', height: '3900m', floors: 390, location: 'City 39' },
  { name: 'Building 40', height: '4000m', floors: 400, location: 'City 40' },
  { name: 'Building 41', height: '4100m', floors: 410, location: 'City 41' },
  { name: 'Building 42', height: '4200m', floors: 420, location: 'City 42' },
  { name: 'Building 43', height: '4300m', floors: 430, location: 'City 43' },
  { name: 'Building 44', height: '4400m', floors: 440, location: 'City 44' },
  { name: 'Building 45', height: '4500m', floors: 450, location: 'City 45' },
  { name: 'Building 46', height: '4600m', floors: 460, location: 'City 46' },
  { name: 'Building 47', height: '4700m', floors: 470, location: 'City 47' },
  { name: 'Building 48', height: '4800m', floors: 480, location: 'City 48' },
  { name: 'Building 49', height: '4900m', floors: 490, location: 'City 49' },
  { name: 'Building 50', height: '5000m', floors: 500, location: 'City 50' },
];

const Building = ({building, selectBuilding}) => (
  <div className='building' onMouseEnter={() => selectBuilding(building)}>
    <div className="name">{building.name}</div>
    <div className="location">{building.location}</div>
  </div>
);

const BuildingDetails = ({building}) => (
  <div className="container mb-4">
  <div className="building-details">
    <div className="card" style={{width: "18rem;"}}>
  <div className="card-header">
  {building.name}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Height: {building.height}</li>
    <li className="list-group-item">Floors: {building.floors}</li>
    <li className="list-group-item">Location: {building.location}</li>
  </ul>
</div>
  </div>
  </div>
);

const App = () => {
  const [selectedBuilding, selectBuilding] = useState(null);

  return (
    <>
    <div className="app">
      <div className="building-grid">
        {buildings.map(b => <Building key={b.name} building={b} selectBuilding={selectBuilding} />)}
      </div>
      {selectedBuilding && <BuildingDetails building={selectedBuilding} />}
    </div>
    <Footer />
    </>
  
  );
};

export default App;
