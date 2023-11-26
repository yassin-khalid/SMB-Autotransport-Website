import React from "react";
import MainNav from "./MainNav";
import TopHero from "./TopHero";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto">
      <MainNav />
      <TopHero />
    </header>
  );
};

export default Header;
