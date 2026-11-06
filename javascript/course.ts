// System Defined Data Types => number, string, boolean
// User Defined Data Type => Class, type

type Course = {
  title: string;
  description: string;
  duration: number;
  fee: number;
  modules: string[];
};

let webDesignCourse: Course = {
  title: "Advanced Web Design",
  description: "Learn Responsive Web Design",
  duration: 75,
  fee: 9000,
  modules: ["HTML", "CSS", "Bootstrap"],
};

console.log(webDesignCourse);