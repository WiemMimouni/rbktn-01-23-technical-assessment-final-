import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({ one }) => {
  return (
    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
            <img className="img" src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
         
          </div>
          <div className="text">
            <h1 className="food">Pizza</h1>
            <i > 25 Mins</i>
            <i > Serves: 5 </i>

            <p className="info">Cheesy pizza is a classic pizza topped with a generous amount of melted cheese. The cheese used can vary from mozzarella to cheddar, provolone, or any other type of cheese that melts well.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Onerecepie;
