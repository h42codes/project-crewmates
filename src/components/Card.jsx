import { Link } from "react-router-dom";
import { supabase } from "../client";
import "./Card.css";

const Card = ({ crewmate }) => {
  const handleDelete = async (e) => {
    e.preventDefault();

    await supabase.from("crewmates").delete().eq("id", crewmate.id);

    window.location = "/";
  };

  return (
    <div className="Card">
      <div className="card">
        <h2>{crewmate.name}</h2>
        <p>Speed: {crewmate.speed}</p>
        <p>Color: {crewmate.color}</p>
        <p>{crewmate.desc}</p>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/edit/${crewmate.id}`}>
          <button>Edit</button>
        </Link>
        <Link to={`/detail/${crewmate.id}`}>
          <button>Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
