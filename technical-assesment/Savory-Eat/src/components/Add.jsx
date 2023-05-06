import React from "react";
import "../App.css";

const Add = () => {
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" />
      </div>
      <button className="create-recipe-btn">Create Recipe</button>
    </div>
  );
};
export default Add;
