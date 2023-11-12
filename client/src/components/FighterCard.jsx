import React from 'react';

const CardGrid = () => {
  const cardData = [
    { title: 'Card 1', content: 'This is the content of Card 1' },
    { title: 'Card 2', content: 'This is the content of Card 2' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
    { title: 'Card 3', content: 'This is the content of Card 3' },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
