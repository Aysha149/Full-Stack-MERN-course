// import Courses from "./courses.tsx";
// import CourseList from "./courseList";
// import CoursesObjects from "./coursesObjects";

import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CoursesCards from "./CoursesCards";
import UserList from "./UserList";
import PostList from "./PostList";




// import ProductCatalogue from "./ProductCatalogue";

// import EmployeeDirectory from "./EmployeeDirectory";



// import ProfileCard from "./ProfileCard";

// import Greeting from "./greeting";

// import ProductForm from "./ProductForm";

// import StudentForm from "./studentForm";

// import Counter from "./counter";

// import CoursesCards from "./CoursesCards";

// import ProductListB from "./ProductListB";

// import ProductListA from "./ProductListA";0

// import ProductListA from "./ProductListA";
function App() {
    return (
      <Router>

        <div className="container my-5"></div>
        <h1 className="text-primary">React Router Demo App</h1>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FLA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/courses">Courses</Link>
        <Link className="nav-link" to="/users">Users</Link>
        <Link className="nav-link" to="/posts">Posts</Link>



      </div>
    </div>
  </div>
</nav>
<main>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/courses" element={<CoursesCards/>} />
    <Route path="/users" element={<UserList/>} />
    <Route path="/posts" element={<PostList/>} />


  </Routes>
</main>
<footer className="bg-dark pt-5 pb-3 text-white text-center">
  <p>
  &copy; All rights reserved by FLA , Bhatkal

  </p>
</footer>

      </Router>
    );
}


            

export default App
