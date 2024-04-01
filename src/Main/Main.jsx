import React from "react";
import Hero from './Hero/Hero'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import { Section5 } from "./Section5/Section5";
import { Section6 } from "./Section6/Section6";
import ThemeChanger from "../Utils/ThemeChanger";

export const Main = () => {
  return (
    <>
    <div className={`${ThemeChanger("bg-white", "bg-[#020817] text-white")}`}>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      </div>
    </>
  );
};
export default Main;
