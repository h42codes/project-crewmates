import { Link, useRoutes } from "react-router-dom";
import "./App.css";
import Browse from "./pages/Browse";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/new",
      element: <Create />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Crewmates</h1>
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
