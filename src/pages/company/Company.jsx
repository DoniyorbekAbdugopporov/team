import React from "react";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import imgBorder from "../../assets/borderImage.svg";
import imgThirdBGCard from "../../assets/lineColoredImage.svg";
import storyCardSVGLine from "../../assets/storyCardSVGLine.svg";
import logo1 from "../../assets/LogoBar1.svg";
import logo2 from "../../assets/LogoBar2.svg";
import logo3 from "../../assets/LogoBar3.svg";
import logo4 from "../../assets/LogoBar4.svg";
import logo5 from "../../assets/LogoBar5.svg";
import logoExprience1 from "../../assets/logoExprience.svg";
import logoExprience2 from "../../assets/logoExprience2.svg";
import logoExprience3 from "../../assets/logoExprience3.svg";
import expertiseUnderline from "../../assets/expertiseUnderline.svg";
import officeImg from "../../assets/officeImage.png";
import team1 from "../../assets/Team 1.png";
import team2 from "../../assets/Team 2.png";
import team3 from "../../assets/Team 3.png";
import team4 from "../../assets/Team 4.png";
import team5 from "../../assets/Team 4.png";
import team6 from "../../assets/Team 6.png";
import team7 from "../../assets/Team 7.png";
import team8 from "../../assets/Team 8.png";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import Newsletter from "../../components/Newsletter";

const Company = () => {
  return (
    <main>
      <div className="container">
        {/*  */}
        <div className="mt-[96px] px-1">
          <div className="top flex justify-between">
            <div className="w-[28px] h-[28px] bg-[#FFD3AF] flex"></div>
            <img src={imgBorder} alt="border image" />
          </div>

          <p className="text-sm text-[#000000] font-medium mt-6">Company</p>
          <h2 className="text-5xl leading-[58px] font-semibold mt-5 max-w-[660px]">
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p className="text-base text-[#232536] mt-6 max-w-[720px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.{" "}
          </p>
          <div className="flex gap-3 mt-16 mb-4">
            <img className="w-[calc(33.333%-8px)]" src={company1} alt="" />
            <img className="w-[calc(33.333%-8px)]" src={company2} alt="" />
            <div className="third w-[calc(33.333%-8px)] relative">
              <img
                className="absolute translate-y-[-16px] w-[86%] right-0"
                src={imgThirdBGCard}
                alt="Background overlay"
              />
              <img
                className="relative z-10 w-full h-full object-cover"
                src={company3}
                alt=""
              />
            </div>
          </div>
        </div>
        {/*  Story section  */}
        <div className="mt-[96px] flex flex-row px-1">
          <div className="infoStory w-[50%]">
            <div className="w-[16px] h-[16px] bg-[#666DFF]"></div>
            <p className="text-sm text-[#000000] font-medium mt-6">
              Our Story 👇
            </p>
            <h2 className="text-5xl leading-[58px] font-semibold mt-5 max-w-[660px]">
              From Startups to Titans of Industry
            </h2>
            <p className="text-base mt-6 max-w-[720px] text-[#232536]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up{" "}
            </p>
          </div>
          <div className="flex gap-2 bg-[#FFD3AF91] w-[50%] items-center justify-center">
            <div className="cards grid grid-cols-2 gap-8">
              <div className="card">
                <h3 className="font-[Poppins] font-[600] text-[36px] text-[#232536]">
                  1560+
                </h3>
                <img src={storyCardSVGLine} alt="" />
                <h3 className="font-[Poppins]">Project delivered</h3>
              </div>
              <div className="card">
                <h3 className="font-[Poppins] font-[600] text-[36px] text-[#232536]">
                  100+
                </h3>
                <img src={storyCardSVGLine} alt="" />
                <h3 className="font-[Poppins]">Professional</h3>
              </div>
              <div className="card">
                <h3 className="font-[Poppins] font-[600] text-[36px] text-[#232536]">
                  950+
                </h3>
                <img src={storyCardSVGLine} alt="" />
                <h3 className="font-[Poppins]">Happy clients</h3>
              </div>
              <div className="card">
                <h3 className="font-[Poppins] font-[600] text-[36px] text-[#232536]">
                  10 yrs
                </h3>
                <img src={storyCardSVGLine} alt="" />
                <h3 className="font-[Poppins]">Ecperience</h3>
              </div>
            </div>
          </div>
        </div>
        {/* LogoBar */}
        <div className="logobar px-8 bg-[#FAFAFC] my-[96px]">
          <div className="logos flex items-center justify-between">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
        {/* Expertise section */}
        <div className="mt-[96px] px-1 flex bg-[#ECF8F9] items-center justify-around">
          <div className="left w-[40%] py-[100px]">
            <p className="text-xl font-[Poppins] font-[500] text-[#000000] mt-1">
              Our expertise
            </p>
            <h2 className="text-3xl leading-[40px] font-semibold mt-5 max-w-[660px]">
              We want to get local identification in every corner of the world
              in this era of global citizenship{" "}
            </h2>
            <p className="text-base text-[#232536] mt-6 max-w-[720px]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.{" "}
            </p>
          </div>

          <div className="cards grid grid-cols-1 gap-4">
            <div className="w-full py-[100px] pl-8 relative">
              <div className="bg-white rounded-none mt-2 flex items-center p-8">
                <img src={logoExprience1} alt="" className="w-12 h-12 mr-4" />
                <div>
                  <h6 className="font-semibold text-base font-[Poppins]">
                    On Time Delivery
                  </h6>
                  <p className="text-sm font-medium text-[#232536] font-[Poppins]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-none mt-2 flex items-center p-8">
                <img src={logoExprience2} alt="" className="w-12 h-12 mr-4" />
                <div>
                  <h6 className="font-semibold text-base font-[Poppins]">
                    Best Quality
                  </h6>
                  <p className="text-sm font-medium text-[#232536] font-[Poppins]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-none mt-2 flex items-center p-8">
                <img src={logoExprience3} alt="" className="w-12 h-12 mr-4" />
                <div>
                  <h6 className="font-semibold text-base font-[Poppins]">
                    Support Assist
                  </h6>
                  <p className="text-sm font-medium text-[#232536] font-[Poppins]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
              <div className="line h-[8px] overflow-hidden">
                <img src={expertiseUnderline} className="w-[100%]" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Office section */}
        <div className="mt-[96px] px-1">
          <p className="text-sm text-[#000000] font-medium mt-6">Our VISION</p>
          <h2 className="text-5xl leading-[58px] font-semibold mt-5 max-w-[660px]">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h2>
          <p className="text-base text-[#232536] mt-6 max-w-[720px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.{" "}
          </p>
          <div className="flex gap-3 mt-16 mb-4">
            <img className="w-full" src={officeImg} alt="" />
          </div>
        </div>

        {/* Team */}
        <div className="mt-[96px] px-1">
          <p className="text-sm text-[#000000] font-medium mt-6">
            MEET OUR TEAM
          </p>
          <h2 className="text-5xl leading-[58px] font-semibold mt-5 max-w-[660px]">
            Teamwork is the only way we work
          </h2>
          <p className="text-base text-[#232536] mt-6 max-w-[720px]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.{" "}
          </p>
          <div className="grid grid-cols-4 gap-4 mt-[60px]">
            {[team1, team2, team3, team4, team5, team6, team7, team8].map(
              (team, index) => (
                <div
                  key={index}
                  className="relative member group w-full h-[300px] overflow-hidden"
                >
                  {/* Image */}
                  <img
                    src={team}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Icons */}
                    <div className="flex flex-col translate-x-[-70px] translate-y-[80px]">
                      <div className="info flex flex-col">
                        <h4 className="text-white size-10">Javena Melo</h4>
                        <p className="text-white">Support Assist</p>
                      </div>
                      <div className="icons flex gap-4">
                        <a
                          href="mailto:someone@example.com"
                          className="text-white text-2xl hover:text-gray-300"
                        >
                          <i className="fas fa-envelope">
                            <img src={twitter} alt="" />
                          </i>
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-2xl hover:text-gray-300"
                        >
                          <i className="fab fa-instagram">
                            <img src={instagram} alt="" />
                          </i>
                        </a>
                        <a
                          href="mailto:someone@example.com"
                          className="text-white text-2xl hover:text-gray-300"
                        >
                          <i className="fas fa-envelope">
                            <img src={linkedin} alt="" />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Company;
