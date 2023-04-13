import { useState } from "react";
import { supabase } from "../client";

const Create = () => {
  const [crew, setCrew] = useState({
    name: "",
    speed: "",
    color: "",
    desc: "",
  });

  const handleChange = (e) => {
    // const {name, value} = e.target;
    setCrew({ ...crew, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.from("crewmates").insert(crew).select();

    window.location = "/";
  };

  return (
    <div>
      <h1>Create</h1>
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
        {/* <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          value={crew.color}
          onChange={handleChange}
        />
        <br /> */}
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
        <input type="submit" value="Create" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Create;
