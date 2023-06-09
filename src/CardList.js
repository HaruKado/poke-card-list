import React, { useEffect, useState } from 'react';

const PokemonCardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('https://api.pokemontcg.io/v2/cards');
      const data = await response.json();
      setCards(data.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  return (
    <div>
      <h1>Pokémon Card List</h1>
      <div className="card-list">
        {cards.map((card) => (
          <div key={card.id} className="card-item">
            <img src={card.images.small} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCardList;