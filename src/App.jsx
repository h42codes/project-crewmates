import { Link, useRoutes } from "react-router-dom";
import "./App.css";
import Browse from "./pages/Browse";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import { useState } from "react";
import { supabase } from "./client";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await supabase
      .from("crewmates")
      .select()
      .order("created_at", { ascending: false });

    setData(data);
  };

  useState(() => {
    fetchData();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <Browse data={data} />,
    },
    {
      path: "/new",
      element: <Create />,
    },
    {
      path: "/edit/:id",
      element: <Edit data={data} />,
    },
    {
      path: "/detail/:id",
      element: <Detail data={data} />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Crewmates</h1>
        <h2>Browse, Add, Edit, and Delete Future Crewmates!</h2>
        <p>Total Crewmates: {data.length}</p>
        <Link to="/">
          <button>Browse Crewmates</button>
        </Link>
        <Link to="/new">
          <button>Add Crewmate</button>
        </Link>
      </div>
      <div className="content">{element}</div>
    </div>
  );
}

export default App;
