import "./EditProfile.css";
import {Link} from "react-router-dom";
function EditProfile(){
    return (
        <div className="edit">
            <h1>Edit Profile</h1>

            <section className="edit-content">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="Enter your name"/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" placeholder="Enter your E-mail"/>
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="tel" placeholder="Enter your Phone number"/>
                </div>

                <div>
                    <label htmlFor="course">Course:</label>
                    <input id="course" type="text" placeholder="Enter your Course"/>                    
                </div>

                <div>
                    <label htmlFor="semester">Semester:</label>
                    <input id="semester" type="number" placeholder="Enter your Semester"/>
                </div>
            </section>

            <div className="edit-buttons">
                <a href="#" className="save">Save</a>
                <Link to="/profile" className="cancel">Cancel</Link>
            </div>
        </div>
    );
}
export default EditProfile;