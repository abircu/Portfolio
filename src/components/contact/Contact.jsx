import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  return (
    <section
      id="contacts"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title={"Contact"} des={"contact with me"} />
      </div>
      <div className="w-full py-20 ">
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />
          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form className="w-full">
              <div className="flex flex-col md:flex-row  gap-10">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label
                    htmlFor=""
                    className="uppercase text-sm text-gray-400 tracking-wide "
                  >
                    Your name{" "}
                  </label>
                  <input className="contactIcon" type="text" />
                </div>
                <div className=" w-full md:w-1/2 flex flex-col">
                  <label
                    htmlFor=""
                    className="uppercase text-sm text-gray-400 tracking-wide "
                  >
                    Phone number
                  </label>
                  <input className="contactIcon" type="text" />
                </div>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
