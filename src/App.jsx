import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/service/Service";
import Company from "./pages/company/Company";
import Career from "./pages/career/Career";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import LogIn from "./pages/login/LogIn";
import NotFound from "./pages/NotFound/NotFound.jsx";
import img_1 from "./assets/image-22.png";
import img_2 from "./assets/Image-23.png";
import img_3 from "./assets/Image-24.png";
import img_4 from "./assets/Image-25.png";
import img_5 from "./assets/Image-26.png";


const cardData = [
  {
    image: img_1,
    title: "Technical Support",
    about:"Best in class tech support for your company. We become your tech backbone ",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
      bg:'white'
  },
  {
    image: img_2,
    title: "Developoment",
    about:"Bring your ideas to reality with certified team of developers, working with latest technologies ",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
      bg:'#ECF8F9'
  },
  {
    image: img_3,
    title: "AWS/Azure ",
    about:"We help you deploy, manage and secure your application on leading web services",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
      bg:'white'
  },
  {
    image: img_4,
    title: "Consulting",
    about:"Get advice from world class professionals ",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
      bg:'#F9F9FF'
  },
  {
    image: img_5,
    title: "Information Technology",
    about:"We want to get local identification in every corner of the world in this era of global citizenship.",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
      bg:'white'
  },
];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service cardData={cardData} />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
