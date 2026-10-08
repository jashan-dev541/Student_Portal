import "./Settings.css";
function Settings(){
    return(
        <div className="settings">
            <h1 className="settings-heading">
                Settings
            </h1>

            <div className="set">
                <h2 className="set-acc">Account Settings</h2>
                <form className="set-yo">

                    <div className="set-details">
                        <label htmlFor="name">Name</label>
                        <input id="name" placeholder="Jashan" type="text"/>
                    </div>

                    <div className="set-details">
                        <label htmlFor="email">Email</label>
                        <input id="email" placeholder="jass321@gmail.com" type="email"/>
                    </div>

                    <div className="set-details">
                        <label htmlFor="notify"></label>
                        <input className="set-check" id="notify" type="checkbox"/>
                        <span>Notifications</span>
                    </div>

                    <div className="set-details">
                        <label htmlFor="theme">Theme</label>
                        <select id="theme" name="theme">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <button className="set-button">Save Changes</button>

                </form>
            </div>
        </div>
    );
}
export default Settings;