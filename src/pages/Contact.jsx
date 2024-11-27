import React, { useState } from "react";
import "./Contact.scss";
import emailjs from '@emailjs/browser';
import { FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

      // Add or remove 'has-content' class based on input value
  if (e.target.value) {
    e.target.classList.add('has-content');
  } else {
    e.target.classList.remove('has-content');
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_111kywo', 'template_axsfne4', e.target, 'cq6wOTOeQXQ1nH7ry')
    .then((result) => {
        console.log(result.text);
        alert("Sent to owner");
        setFormData(
          {
            name: "",
            email: "",
            message: "",
          }
        )
    }, (error) => {
        console.log(error.text);
        alert("message failed");
    });

    console.log("Form Data: Test", formData);
  };

  return (
    <div className="page-container">
      <div className="content">
       
        <section className="form-container">
          <h2 className="test">Contact Me</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="group">
            <input
            className="input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
             <label className="label" htmlFor="name">
              Name <span>*</span>
            </label>
            </div>

            <br></br>

            <div className="group">
            <input
            className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="label" htmlFor="email">
              {" "}
              E-mail <span>*</span>{" "}
            </label>
            </div>
            <br></br>

            
            <div className="group">
            <textarea
            className="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            >
              
              {" "}
            </textarea>
            <label className="label" htmlFor="message">
              {" "}
              Message <span>*</span>{" "}
            </label>
            </div>
            <br></br>
            <button className="contactbutton" type="submit"> Submit </button>
          </form>

          <div className="social-link">
          <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/ibeabdulla/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="-mb-2"/>
          </a></p>
          
        </div>
        </section>
        

      </div>
      
    </div>
  );
};

export default Contact;
