import "./Contact.css";
function Contact(){
    return(
        <div className="contact">
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-description">Have a question? We'd love to hear from you.</p>
            <form className="contact-form">
                <div>
                <label htmlFor="name">Name: </label>
                <input id="name" placeholder="Enter your name"/>
                </div>

                <div>
                <label htmlFor="email">Email: </label>
                <input id="email" placeholder="Enter your email"/>
                </div>

                <div>
                    <label htmlFor="subject">Subject: </label>
                    <input id="subject" placeholder="Enter subject"/>
                </div>

                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea id="message" placeholder="write your message" />
                </div>

                <button className="contact-button">Send Message</button>
            </form>
        </div>
    );
}
export default Contact;