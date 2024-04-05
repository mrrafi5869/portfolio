import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import useAOSInit from "../hooks/useAOSint";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1706532812699.json';
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u7oh7lc",
        "template_b5w5wh4",
        {
          from_name: form.name,
          to_name: "Mohammad Rafi",
          from_email: form.email,
          to_email: "mrrafi5869@gmail.com",
          message: form.message,
        },
        "WoZaV_ZGijOfT8x-7"
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Thank you. I will get back to you as soon as possible.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useAOSInit();
  return (
    <div
    id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className="flex-[0.75] bg-[#151030] p-8 rounded-2xl mt-24 lg:mt-0  mb-32 lg:mb-0"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              required
              className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#30285E] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className="xl:flex-1 flex justify-center items-center w-[300px] lg:w-[700px] lg:h-[700px] mx-auto"
      >
        <Lottie animationData={animationData} className="" loop={true} />

        
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
