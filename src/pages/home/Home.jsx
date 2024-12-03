import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import headerImage from "../../assets/headerImage.png";
import logoBar from "../../assets/logoBar.png";
import aboutImage1 from "../../assets/aboutImage1.png";
import aboutImage2 from "../../assets/aboutImage2.png";
import aboutImage3 from "../../assets/aboutImage3.png";

const Home = () => {
  return (
    <main className="bg-[#232536] text-white">
      {/* Header Section */}
      <div className="container mx-auto py-16">
        <div className="flex gap-24 items-center">
          <div className="max-w-[600px]">
            <h1 className="text-[56px] leading-[68px] font-bold">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-base leading-6 mt-6">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="flex items-center gap-2 mt-8 bg-[#444CFC] px-8 py-4 text-base text-white rounded">
              Request Quote <FaArrowRightLong />
            </button>
          </div>
          <div>
            <img
              src={headerImage}
              alt="Header"
              className="w-[500px] rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center gap-8 mt-12">
          <div>
            <p className="text-sm">Our Clients</p>
            <p className="text-lg font-bold">We've Worked with</p>
          </div>
          <img src={logoBar} alt="Client Logos" />
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-[#F4F6FC] text-[#232536] py-20">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              The company leads entire web design process from concept to
              delivery.
            </h2>
            <p className="text-base mb-8 opacity-80">
              Through rich experience in the industry, we have mastered how to
              create excellent designs that solve real-world problems.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold">1560+</p>
                <p>Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">100+</p>
                <p>Professionals</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">950+</p>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 md:w-1/2">
            <img
              src={aboutImage1}
              alt="About 1"
              className="w-1/3 rounded-lg shadow-lg"
            />
            <img
              src={aboutImage2}
              alt="About 2"
              className="w-1/3 rounded-lg shadow-lg"
            />
            <img
              src={aboutImage3}
              alt="About 3"
              className="w-1/3 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            We build software solutions that solve client's business challenges
          </h2>
          <div className="flex justify-around">
            <div className="max-w-[300px]">
              <h3 className="text-xl font-bold mb-2">Technical Support</h3>
              <p className="text-sm">
                24/7 support to address technical issues effectively.
              </p>
            </div>
            <div className="max-w-[300px]">
              <h3 className="text-xl font-bold mb-2">Project Management</h3>
              <p className="text-sm">
                Expertise in agile methodology and team management.
              </p>
            </div>
            <div className="max-w-[300px]">
              <h3 className="text-xl font-bold mb-2">Custom Development</h3>
              <p className="text-sm">
                Tailor-made software solutions for various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-[#F4F6FC] py-16 text-[#232536]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Read our latest blogs & news
          </h2>
          <div className="flex gap-8">
            <div className="max-w-[400px]">
              <h3 className="text-2xl font-bold mb-2">
                Today's best design trends for digital products
              </h3>
              <p className="text-sm">June 3, 2023</p>
            </div>
            <div className="max-w-[400px]">
              <h3 className="text-2xl font-bold mb-2">
                A practical guide to building a brand strategy
              </h3>
              <p className="text-sm">March 5, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#232536] py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let's make something special
          </h2>
          <p className="text-lg">Contact us: info@finsweet.com</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
