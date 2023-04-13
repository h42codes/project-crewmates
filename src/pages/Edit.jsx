import { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const Edit = ({ data }) => {
  const { id } = useParams();
  const [crew, setCrew] = useState(data.filter((item) => item.id == id)[0]);

  const handleChange = (e) => {
    // const {name, value} = e.target;
    setCrew({ ...crew, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await supabase.from("crewmates").update(crew).eq("id", id);

    window.location = "/";
  };

  return (
    <div>
      <h1>Edit</h1>
      <form className="create-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={crew.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="speed">Speed</label>
        <input
          type="number"
          id="speed"
          name="speed"
          value={crew.speed}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="color">Color</label>
        <div className="radio-container">
          <input
            type="radio"
            id="red"
            name="color"
            value="red"
            onChange={handleChange}
            checked={crew.color === "red"}
          />
          <label htmlFor="red">Red</label>
          <input
            type="radio"
            id="yellow"
            name="color"
            value="yellow"
            onChange={handleChange}
            checked={crew.color === "yellow"}
          />
          <label htmlFor="yellow">Yellow</label>
          <input
            type="radio"
            id="blue"
            name="color"
            value="blue"
            onChange={handleChange}
            checked={crew.color === "blue"}
          />
          <label htmlFor="blue">Blue</label>
          <input
            type="radio"
            id="white"
            name="color"
            value="white"
            onChange={handleChange}
            checked={crew.color === "white"}
          />
          <label htmlFor="white">White</label>
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            onChange={handleChange}
            checked={crew.color === "black"}
          />
          <label htmlFor="black">Black</label>
        </div>
        <br />
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          name="desc"
          value={crew.desc}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Update" onClick={handleUpdate} />
      </form>
    </div>
  );
};

export default Edit;
