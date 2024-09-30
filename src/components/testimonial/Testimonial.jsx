import React, { useState } from "react";
import Title from "../layouts/Title";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";
import { testimonialOne, testimonialTwo, quote } from "../../assets/index";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}
const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="What clients say" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto py-20">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] flex flex-col gap-8 justify-center h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg shadow-shadowOne">
                <img src={testimonialOne} alt="testimonial" />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - trolola
                  </p>
                  <h1 className="text-2xl font-bold">John Duone Joe</h1>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer{" "}
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] flex justify-center flex-col gap-8 py-10 bg-gradient-to-r p-8 from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne">
                  <div className="flex justify-between items-center py-6 border-b-[1px] border-b-gray-900">
                    <div>
                      <h1 className="text-2xl font-medium tracking-wide">
                        Travel Mobile Design
                      </h1>
                      <p className="text-base text-gray-400 mt-3">
                        Via Upwork - Mar 4,2024 - Jun 20,2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aperiam, omnis repudiandae nihil sint, optio totam ducimus
                      molestiae ex reiciendis eaque distinctio porro nisi illum
                      veniam commodi nobis quisquam dolorum illo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second slider */}
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] flex flex-col gap-8 justify-center h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg shadow-shadowOne">
                <img src={testimonialTwo} alt="testimonial" />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - trolola
                  </p>
                  <h1 className="text-2xl font-bold">John Duone Joe</h1>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer{" "}
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] flex justify-center flex-col gap-8 py-10 bg-gradient-to-r p-8 from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne">
                  <div className="flex justify-between items-center py-6 border-b-[1px] border-b-gray-900">
                    <div>
                      <h1 className="text-2xl font-medium tracking-wide">
                        Travel Mobile Design
                      </h1>
                      <p className="text-base text-gray-400 mt-3">
                        Via Upwork - Mar 4,2024 - Jun 20,2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aperiam, omnis repudiandae nihil sint, optio totam ducimus
                      molestiae ex reiciendis eaque distinctio porro nisi illum
                      veniam commodi nobis quisquam dolorum illo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 3 */}
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] flex flex-col gap-8 justify-center h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg shadow-shadowOne">
                <img src={testimonialOne} alt="testimonial" />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - trolola
                  </p>
                  <h1 className="text-2xl font-bold">John Duone Joe</h1>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer{" "}
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] flex justify-center flex-col gap-8 py-10 bg-gradient-to-r p-8 from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne">
                  <div className="flex justify-between items-center py-6 border-b-[1px] border-b-gray-900">
                    <div>
                      <h1 className="text-2xl font-medium tracking-wide">
                        Travel Mobile Design
                      </h1>
                      <p className="text-base text-gray-400 mt-3">
                        Via Upwork - Mar 4,2024 - Jun 20,2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aperiam, omnis repudiandae nihil sint, optio totam ducimus
                      molestiae ex reiciendis eaque distinctio porro nisi illum
                      veniam commodi nobis quisquam dolorum illo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider four */}
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] flex flex-col gap-8 justify-center h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]  p-8 rounded-lg shadow-shadowOne">
                <img src={testimonialTwo} alt="testimonial" />
                <div>
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - trolola
                  </p>
                  <h1 className="text-2xl font-bold">John Duone Joe</h1>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer{" "}
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] flex justify-center flex-col gap-8 py-10 bg-gradient-to-r p-8 from-[#1e2024] to-[#23272b]  rounded-lg shadow-shadowOne">
                  <div className="flex justify-between items-center py-6 border-b-[1px] border-b-gray-900">
                    <div>
                      <h1 className="text-2xl font-medium tracking-wide">
                        Travel Mobile Design
                      </h1>
                      <p className="text-base text-gray-400 mt-3">
                        Via Upwork - Mar 4,2024 - Jun 20,2024
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aperiam, omnis repudiandae nihil sint, optio totam ducimus
                      molestiae ex reiciendis eaque distinctio porro nisi illum
                      veniam commodi nobis quisquam dolorum illo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
