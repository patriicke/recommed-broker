import { NextPage } from "next";
import { ReactNode } from "react";
import FooterAbout from "../common/components/footer/FooterAbout";
import FooterInfo from "../common/components/footer/FooterInfo";
import NavbarComponent from "../common/components/navbar/NavbarComponent";

const MainLayout: NextPage<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='overflow-x-hidden h-screen min-h-screen overflow-auto'>
      <NavbarComponent />
      <div className='overflow-auto'>{children}</div>
      <FooterAbout />
      <FooterInfo />
    </div>
  );
};

export default MainLayout;
