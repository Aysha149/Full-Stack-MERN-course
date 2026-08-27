import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import RecipeList from "./RecipeList";
import RecipeAdd from "./RecipeAdd";
import RecipeEdit from "./RecipeEdit";

function App() {
  return (
       <Router>
      <nav
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold" to="/">
             Recipes
          </Link>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/recipes">
                Recipes
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes-add" element={<RecipeAdd />} />
            <Route path="/recipes-edit/:id" element={<RecipeEdit />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;