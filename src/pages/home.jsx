import {Link} from "react-router-dom";
import './Home.css';
function Home(){
    return(
        <div className="Home">
            
            <section className="hero">
                <h3>Welcome to Student Portal</h3>
                <p>Manage your academic life from one place.</p>

                <div className="hero-buttons">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">View Profile</Link>
                </div>
            </section>

            <footer className="stats">
                <div className="stat-card">
                    <dt>Attendance</dt>
                    <dd>87%</dd>
                </div>
                    
                <div className="stat-card">
                    <dt>CGPA</dt>
                    <dd>8.4</dd>
                </div>
                    
                <div className="stat-card">
                    <dt>Courses</dt>
                    <dd>6</dd>
                </div>
            </footer>
        </div>
    );
}

export default Home;