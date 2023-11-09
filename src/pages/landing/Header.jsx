import { useState } from "react";

import { CgMenuRight, CgClose } from "react-icons/cg";

import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";

const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/",
  },
  {
    name: "features",
    href: "/",
  },
  {
    name: "contact",
    href: "/",
  },
  {
    name: "login",
    href: "/login",
  },
];

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header
      className={`bg-none fixed left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="h-6 lg:h-8" src="/mealy-logo.png" alt="" />
          </Link>

          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>

          <nav className="hidden md:flex">
            <ul className="flex md:gap-x-12">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="capitalize text-white hover:border-b transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
