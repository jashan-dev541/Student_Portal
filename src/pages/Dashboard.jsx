import "./Dashboard.css";
function Dashboard(){
    return(
        <div className="dashboard">
            <h1 className="heading">Dashboard</h1>
            <div className="dashboard-cards">
                <div>
                    <p>Attendance</p>
                    <p>87%</p>
                </div>

                <div>
                    <p>CGPA</p>
                    <p>8.4</p>
                </div>

                <div>
                    <p>Courses</p>
                    <p>6</p>
                </div>

            </div>

            <h1 className="heading2">Recent Courses</h1>
            <div className="marks">
                <div className="marks-details">
                    <p>Data Structures & Algorithms</p>
                    <p>87%</p>
                </div>

                <div className="marks-details">
                    <p>Database Management System</p>
                    <p>92%</p>
                </div>

                <div className="marks-details">
                    <p>Object Oriented Programming</p>
                    <p>85%</p>
                </div>

                <div className="marks-details">
                    <p>Frontend Engineering</p>
                    <p>90%</p>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;