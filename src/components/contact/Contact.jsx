import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhne] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(" ");
  const [msg, setMsg] = useState("");
  const [errMsg, setMessage] = useState("");
  const [successMsg, setSuccesMsg] = useState("");

  const formData = { userName, phone, email, subject, msg };
  // email valided
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSent = (e) => {
    e.preventDefault();
    if (userName === "") {
      setMessage("Username is required!");
    } else if (phone === "") {
      setMessage("Phone number is required!");
    } else if (email === "") {
      setMessage("Please give your Email!");
    } else if (!emailValidation(email)) {
      setMessage("Give a valid Email!");
    } else if (subject === "") {
      setMessage("Plese give your Subject!");
    } else if (msg === "") {
      setMessage("Message is required!");
    } else {
      setSuccesMsg(
        `Thank you dear ${userName}, Your Messages has been sent Successfully!`
      );
      console.log(formData);
      setMessage("");
      setUserName("");
      setPhne("");
      setEmail("");
      setSubject("");
      setMsg("");
    }
  };
  return (
    <section
      id="contacts"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title={"Contact"} des={"contact with me"} />
      </div>
      <div className="w-full py-20 ">
        <div className="w-full h-auto flex lgl:flex-row flex-col justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-6 py-2">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base trackig-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col md:flex-row  gap-10">
                <div className="w-full md:w-1/2 flex flex-col gap-2 ">
                  <label
                    htmlFor=""
                    className="uppercase text-sm text-gray-400 tracking-wide "
                  >
                    Your name{" "}
                  </label>
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactIcon`}
                    type="text"
                    required
                  />
                </div>
                <div className=" w-full md:w-1/2 flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="uppercase text-sm text-gray-400 tracking-wide "
                  >
                    Phone number
                  </label>
                  <input
                    onChange={(e) => setPhne(e.target.value)}
                    value={phone}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactIcon`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="uppercase text-sm text-gray-400 tracking-wide "
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactIcon`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="uppercase text-sm text-gray-400 tracking-wide "
                >
                  Subject
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactIcon`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="uppercase text-sm text-gray-400 tracking-wide "
                >
                  Your message
                </label>
                <textarea
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols={30}
                  rows={8}
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSent}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent "
                >
                  Sent Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
