import "./Profile.css";
import {Link} from "react-router-dom";
function Profile(){
    return (
        <div className="profile">
            <h1 className="heading">Profile</h1>
            <section className="profile-info">
                <p>Name: Jashan</p>
                <p>Course: B.E. CSE</p>
                <p>Semester: 3</p>
                <p>Student ID: 2510</p>
                <p>Email: jass123@gmail.com</p>
            </section>

            <div className="profile-button">
                <Link to="/profile/edit">Edit Profile</Link>
            </div>
        </div>
    );
}
export default Profile;