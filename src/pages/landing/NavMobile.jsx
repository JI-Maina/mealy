import { Link } from "react-router-dom";

const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "features",
    href: "features",
  },
  {
    name: "contact",
    href: "contact",
  },
  {
    name: "login",
    href: "/login",
  },
];

const NavMobile = () => {
  return (
    <nav className="bg-white w-full h-full shrink-2xl">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="text-xl font-medium capitalize">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
