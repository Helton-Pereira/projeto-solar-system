import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="container">
        <Title headline="Planetas" />
        <div className="planets-display">
          {planets.map((e, i) => (
            <PlanetCard
              key={ i }
              planetName={ e.name }
              planetImage={ e.image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
