import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Browse.css";
// import supabase from "../client";

const Browse = ({ data }) => {
  //   const [crewmates, setCrewmates] = useState([]);

  return (
    <div className="Browse">
      {data.map((crewmate) => (
        <Card crewmate={crewmate} key={crewmate.id} />
      ))}
    </div>
  );
};

export default Browse;
