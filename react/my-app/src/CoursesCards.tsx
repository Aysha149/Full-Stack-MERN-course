function CoursesCards() {
  // static data
  // real world apps - you call backend APIs (ExpressJS) and get the data
  let courses = [
    {
      id: 1,
      name: "Pyhton",
      price: 1300,
      duration: "3 months",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente debitis sit esse repellendus",
      image: "https://tse2.mm.bing.net/th/id/OIP.Sss7ayjUXCGzxjUolx5OLwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Java",
      price: 1200,
      duration: "4 months",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente debitis sit esse repellendus",
      image: "https://tse2.mm.bing.net/th/id/OIP.-stRcuANZstAsnCSIheGrgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      name: "React",
      price: 1000,
      duration: "2 months",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente debitis sit esse repellendus",
      image: "https://next-api.truyenmai.com/public/truyenmai/202309180931-react.png.webp?w=3840&q=75",
    },
    {
      id: 4,
      name: "NodeJS",
      price: 1500,
      duration: "5 months",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente debitis sit esse repellendus",
      image: "https://wallpaperaccess.com/full/1555170.jpg",
    },
    {
      id: 5,
      name: "C++ Programming",
      price: 1500,
      duration: "5 months",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente debitis sit esse repellendus",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png",
    },
  ];
  

  return (
    <div className="row g-4">
      {courses.map((course) => (
        <div className="col-lg-4">
          <div className="card h-100 shadow-sm border-0">
            <img
              src={course.image}
              className="card-img-top"
               style={{ height: "200px", objectFit: "cover" }}
               alt={course.name}
            />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <span className="badge bg-primary">{course.duration}</span>
              <p className="card-text">{course.description}</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesCards;