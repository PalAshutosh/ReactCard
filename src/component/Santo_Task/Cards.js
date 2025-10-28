import React from 'react'
import "./mstyle.css";

const Cards = () => {
  const cards = [
    {
      title: "Learning React",
      subtitle: "Forntend Library",
      text: "React makes it painless to create interctive UIs and manage component states efficiently..",
      color: "#ffffff"
    },
    {
      title: "Node.js",
      subtitle: "Backend Runtime",
      text: "Node.js allows developers to use JavaScript to write server-side logic and APIs.",
      color: "#cfe2ff",
    },
    {
      title: "Express.js",
      subtitle: "Server Framework",
      text: "Express is a minimal and flexible Node.js web framework for building APIs and web apps.",
      color: "#fff3cd",
    },
    {
      title: "MongoDB",
      subtitle: "NoSQL Database",
      text: "MongoDB stores data in flexible, JSON-like documents, making it easy to scale and evolve.",
      color: "#f8d7da",
    },
    {
      title: "HTML & CSS",
      subtitle: "Web Structure",
      text: "HTML gives structure to web pages, while CSS styles and makes them visually appealing.",
      color: "#d1e7dd",
    },
    {
      title: "JavaScript",
      subtitle: "Programming Language",
      text: "JavaScript powers interactivity and dynamic behavior on modern web pages and applications.",
      color: "#f1aeb5",
    },
  ];
  return (
    <>
        <section className='cards-container'>
          { cards.map((card, index)=>(
            <div className='card' key={index} style={{ backgroundColor: card.color }}>
              <h2 className='card-title'>{card.title}</h2>
              <h3 className='card-subtitle'>{card.subtitle}</h3>
              <p className='card-text'>{card.text}</p>
              <div className='card-actions'>
                <span>Learn More</span>
                <span>Explore</span>
              </div>
            </div>
          ))}
        </section>
    </>
  );
};

export default Cards