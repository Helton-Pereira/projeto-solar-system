import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
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
