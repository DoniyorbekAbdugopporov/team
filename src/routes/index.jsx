import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Home from '../pages/home/Home';
import Service from '../pages/service/Service';
import Company from '../pages/company/Company';
import Career from '../pages/career/Career';
import NotFound from '../pages/NotFound/NotFound';
import LogIn from '../pages/login/LogIn';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default Index