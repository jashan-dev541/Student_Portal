import "./Courses.css";
function Courses(){
    const courses = [
        {
            name: "Data Structures & Algorithms",
            instructor: "Dr. Sharma",
            attendance: "87%"
        },

        {
            name: "Database Management System",
            instructor: "Dr. Singh",
            attendance: "89%"
        },

        {
            name: "FrontEnd Engeneering",
            instructor: "Dr. Kumar",
            attendance: "90%"
        },

        {
            name: "Object Oriented Programming",
            instructor: "Dr. Verma",
            attendance: "93%"
        }
    ];
    return (
        <div className="courses">
            <h1 className="courses-heading">Courses</h1>
            <div className="courses-grid">
                {courses.map(course=>(
                    <div className="courses-card">
                        <p>Name: {course.name}</p>
                        <p>Instructor: {course.instructor}</p>
                        <p>Attendance: {course.attendance}</p>
                    </div>
                ))}
            </div>        
        </div>
    );
}
export default Courses;