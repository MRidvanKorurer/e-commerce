import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" w-11/12 bg-gray-50 mx-auto">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
