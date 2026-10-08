import "./Aboutt.css";
function About(){
    return(
        <div className="about">
            <h1 className="about-heading">About Student Portal</h1>
            <p className="about-description">A simple platform for managing your academic life</p>
            <p className="about-general">What You Can Do</p>
            <div className="about-cards-grid">
                <div className="about-cards">
                    <p>Profile</p>
                </div>

                <div className="about-cards">
                    <p>Courses</p>
                </div>

                <div className="about-cards">
                    <p>Attendance</p>
                </div>

                <div className="about-cards">
                    <p>Performance</p>
                </div>
            </div>
        </div>
    );
}
export default About;