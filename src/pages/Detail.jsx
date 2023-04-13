import { useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ data }) => {
  const { id } = useParams();
  const [crew, setCrew] = useState(data.filter((item) => item.id == id)[0]);

  return (
    <div>
      <h1>{crew.name}</h1>
      <h2>Speed: {crew.speed}</h2>
      <h2>Color: {crew.color}</h2>
      <h2>Description: {crew.desc}</h2>
    </div>
  );
};

export default Detail;
