import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import service_icon from "../../assets/Shapes-3.png";
import icon_1 from "../../assets/i1.png";
import icon_2 from "../../assets/i2.png";
import icon_3 from "../../assets/i3.png";
import icon_4 from "../../assets/i4.png";
import icon_5 from "../../assets/i5.png";
import icon_6 from "../../assets/i6.png";
import line from "../../assets/line.png";

const Service = ({ cardData }) => {
  return (
    <main className="">
      <div className="bg-[#FFE6D2]">
        <div className="container">
          <div className="flex items-center pt-[96px] pb-10">
            <div className="left max-w-[50%]">
              <p className="text-sm text-[#232536] font-medium">Our Services</p>
              <h2 className="text-5xl leading-[58px] font-semibold mt-3">
                We Build Software Solutionthat Solve Clients Business Challenges
              </h2>
              <p className="text-base text-[#232536] mt-6 max-w-[550px]">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic.
              </p>
              <div className="flex items-center gap-2 px-[32px] py-[20px] mt-[40px] bg-[linear-gradient(180deg,#444CFC_0%,#444CFC_100%)] max-w-[231px] max-h-[64px]">
                <button className="text-balance text-[#FFFFFF]">
                  Request A Quote
                </button>
                <FaArrowRightLong className="text-[#FFFFFF]" />
              </div>
            </div>
            <div className="right mx-auto">
              <p className="text-2xl leading-9 font-semibold text-[#232536]">
                Technical support
              </p>
              <div className="flex gap-2 items-center">
                <p className="text-2xl leading-9 font-semibold text-[#232536]">
                  Development
                </p>
                <FaArrowRightLong className="text-[#232536] text-xl" />
              </div>
              <p className="text-2xl leading-9 font-semibold text-[#232536]">
                AWS/Azure{" "}
              </p>
              <p className="text-2xl leading-9 font-semibold text-[#232536]">
                Consulting
              </p>
              <p className="text-2xl leading-9 font-semibold text-[#232536]">
                Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9FF] pt-28">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <h4 className="text-[14px]">OUR PROCESS</h4>
              <h2 className="text-[48px] w-[700px] leading-[58px] font-semibold pt-5">
                The process we are working With Our client Worldwide
              </h2>
              <p className="w-[650px] pt-5">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable.
              </p>
            </div>
            <div>
              <img src={service_icon} alt="service_icon" />
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-10 pb-20">
            <div>
              <div className="flex w-[395px] border-[#2325362B] border-solid border-[1px]">
                <div className="pl-5">
                  <img
                    className="w-[97px] h-[47px] mt-8"
                    src={icon_1}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="font-semibold ml-2 mt-6 mb-2">Discover</h3>
                  <p className="text-[#9798a7] pr-4 ml-2 mb-6">
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
                <div className="pr-5">
                  <p className="text-[#9798a7] text-[24px] font-semibold mt-2">
                    01
                  </p>
                </div>
              </div>
              <div>
                <img src={line} alt="line" />
              </div>
            </div>
            <div className="flex w-[395px] border-[#2325362B] border-solid border-[1px]">
              <div className="pl-5">
                <img
                  className="w-[97px] h-[47px] mt-8"
                  src={icon_2}
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="font-semibold ml-2 mt-6 mb-2">Designing</h3>
                <p className="text-[#9798a7] pr-4 ml-2 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
              <div className="pr-5">
                <p className="text-[#9798a7] text-[24px] font-semibold mt-2">
                  02
                </p>
              </div>
            </div>
            <div className="flex w-[395px] border-[#2325362B] border-solid border-[1px]">
              <div className="pl-5">
                <img
                  className="w-[97px] h-[47px] mt-8"
                  src={icon_3}
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="font-semibold ml-2 mt-6 mb-2">Development</h3>
                <p className="text-[#9798a7] pr-4 ml-2 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
              <div className="pr-5">
                <p className="text-[#9798a7] text-[24px] font-semibold mt-2">
                  03
                </p>
              </div>
            </div>
            <div className="flex w-[395px] border-[#2325362B] border-solid border-[1px]">
              <div className="pl-5">
                <img
                  className="w-[97px] h-[47px] mt-8"
                  src={icon_4}
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="font-semibold ml-2 mt-6 mb-2">Testing</h3>
                <p className="text-[#9798a7] pr-4 ml-2 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
              <div className="pr-5">
                <p className="text-[#9798a7] text-[24px] font-semibold mt-2">
                  04
                </p>
              </div>
            </div>
            <div className="flex w-[395px] border-[#2325362B] border-solid border-[1px]">
              <div className="pl-5">
                <img
                  className="w-[97px] h-[47px] mt-8"
                  src={icon_5}
                  alt="icon"
                />
              </div>
              <div>
                <h3 className="font-semibold ml-2 mt-6 mb-2">Deployment</h3>
                <p className="text-[#9798a7] pr-4 ml-2 mb-6">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
              <div className="pr-5">
                <p className="text-[#9798a7] text-[24px] font-semibold mt-2">
                  05
                </p>
              </div>
            </div>
            <div>
              <div>
                <img className="w-[395px]" src={line} alt="line" />
              </div>
              <div className="flex w-[395px] border-[#2325362B] border-solid border-[1px]">
                <div className="pl-5">
                  <img
                    className="w-[97px] h-[47px] mt-8"
                    src={icon_6}
                    alt="icon"
                  />
                </div>
                <div>
                  <h3 className="font-semibold ml-2 mt-6 mb-2">Maintenance</h3>
                  <p className="text-[#9798a7] pr-4 ml-2 mb-6">
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
                  </p>
                </div>
                <div className="pr-5">
                  <p className="text-[#9798a7] text-[24px] font-semibold mt-2">
                    06
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
      <div className="container">
        <div className="flex flex-col items-center gap-8 px-4 py-8">
        {cardData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse lg:flex-row ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } items-center gap-8 bg-${item.bg} p-6  rounded-lg`}
          style={{ backgroundColor: item.bg }}
        >
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-[24px] font-semibold text-[#232536]  mb-2">
              {item.title}
            </h2>
            <p className="text-[#232536] font-bold text-[36px] mb-4">{item.about}</p>
            <p className="text-[#232536] ">{item.description}</p>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-xs mx-auto lg:mx-0 rounded-lg "
            />
          </div>
        </div>
      ))}
        </div>
      </div>
    </div>
    </main>
  );
};

export default Service;
