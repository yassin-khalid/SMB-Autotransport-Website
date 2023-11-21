import React from "react";
import MainNav from "./MainNav";
import Hero from "./Hero";
import TopHero from "./TopHero";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto max-h-screen">
      <MainNav />
      <TopHero />
    </header>
  );
};

export default Header;
