import React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import * as emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./Button";
import Form from "./Form";

const DiscussForm = ({ data, onChange, resetForm }) => {
  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "Racxstudio",
      message: projectIdea,
    };

    // Validate the form fields before submitting
    if (name && company && email && phone && projectIdea) {
      emailjs
        .send(
          "service_h4gtndg",
          "template_a9tvs7a",
          templateParams,
          "user_csqIxzN5mKsl1yw4ffJzV"
        )
        .then(
          () => {
            toast.success("Success! We'll get back to you soon. Thank you!");
            resetForm(); // Reset form after successful submission
          },
          (error) => {
            console.error("EmailJS Error:", error);
            toast.error("An error occurred. Please try again later.");
          }
        );
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <section
      style={{ marginTop: "150px" }}
      className="flex flex-col container mx-auto mt-10 justify-center bg-gradient-to-r from-[#7f66aa] to-[#b094dc] p-10 rounded-lg shadow-lg"
    >
      <Fade direction="down" triggerOnce>
        <h1 className="text-4xl text-black text-center font-extrabold mb-6">
          Let's Discuss Your Project
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-semibold text-xl  text-white text-center mb-12">
          Please fill out the form below to discuss your project, and we'll get
          back to you within 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-6 mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className="input-field"
              onChange={onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className="input-field"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-6 mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className="input-field"
              onChange={onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              className="input-field"
              onChange={onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain your project idea"
              className="input-field"
              onChange={onChange}
            />
          </div>

          <Button
            className=" font-bold text-xl mx-auto px-14 py-4 mt-5 bg-black text-white rounded-full shadow-2xl hover:shadow-white hover:from-white hover:to-black  hover:bg-gray-400 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white hover:border-2 hover:text-black"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
};

DiscussForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    projectIdea: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};

export default DiscussForm;
