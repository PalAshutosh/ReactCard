import React, { useEffect, useState } from 'react';
import "./apiStyle.css";

const Api_fetch = () => {

    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((json) => {
                setItems(json);
                setDataIsLoaded(true);
            });
    }, []);

    if (!dataIsLoaded){
        return (
            <div>
                <h1>Please wait some time........</h1>
            </div>
        );
    }
  return (
    <>
      <section className='cards-container'>
        { items.map((item)=>(
          <div  key={item.id} style={{ backgroundColor: "#e77171ff" }}>
            <h3 className='card-subtitle'>UserId : {item.userId}</h3>
            <p> id : {item.id}</p>
            <p className='card-title'>{item.title}</p>
            <p className='card-text'> Body: {item.body}</p>
            <div className='card-actions'>
              <span>Learn More</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Api_fetch;
