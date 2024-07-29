import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" w-11/12 bg-gray-50 mx-auto flex flex-col gap-y-1 min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
