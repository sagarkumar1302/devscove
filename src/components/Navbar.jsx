import { Disclosure } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MegaMenu from "./MegaMenu";
const logo = "./images/logo1.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "About Us",
    href: "#",
    current: false,
    dropdown: true, // Add dropdown property
    submenu: [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Mission & Vision", href: "/about/mission-vision" },
      { name: "Our Team", href: "/about/team" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    current: false,
    megaMenu: true,
    sections: [
      {
        title: "Categories",
        items: [
          {
            name: "Web Development",
            description: "Build responsive and dynamic websites.",
            href: "#",
          },
          {
            name: "Mobile Apps",
            description: "Create mobile applications for iOS and Android.",
            href: "#",
          },
          {
            name: "UI/UX Design",
            description: "Design user-friendly interfaces and experiences.",
            href: "#",
          },
          {
            name: "E-Commerce",
            description: "Develop online stores and e-commerce platforms.",
            href: "#",
          },
        ],
      },
      {
        title: "Ecommerce Website",
        items: [
          {
            img: "./images/portfolio1.jpg",
            href: "#",
          },
          {
            name: "Portfolio Website",
            href: "#",
          },
        ],
      },
      {
        title: "Restaurant Website",
        items: [
          {
            img: "./images/portfolio1.jpg",
            href: "#",
          },
          {
            name: "Portfolio Website",
            href: "#",
          },
        ],
      },
      {
        title: "Landing Page",
        items: [
          {
            img: "./images/portfolio1.jpg",
            href: "#",
          },
          {
            name: "Portfolio Website",
            href: "#",
          },
        ],
      },
    ],
  },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [megamenu, setMegamenu] = useState(false);
  let menuTimeout;
  const mouseEnterHanlder = () => {
    clearTimeout(menuTimeout);
    setMegamenu(true);
    console.log(megamenu);
  };
  const mouseLeaveHanlder = () => {
    menuTimeout = setTimeout(() => {
      setMegamenu(false);
      console.log(megamenu);
    }, 100);
  };
  const logging = () => {
    console.log("Logging");
    setMegamenu(true);
    clearTimeout(menuTimeout);
  };
  useEffect(() => {
    return () => clearTimeout(menuTimeout);
  }, []);
  const location = useLocation();
  return (
    <Disclosure as="nav" className="bg-green py-0 relative">
      {({ open }) => (
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className=" ">
            <div className="flex h-auto items-center justify-between px-4">
              {/* Logo */}
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-44" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex space-x-4 text-white">
                  {navigation.map((item) =>
                    item.megaMenu ? (
                      <div key={item.name} className="group pt-2 ">
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            `rounded-md px-3 py-2 text-base font-medium relative group  ${
                              isActive ? "text-lightgreen font-bold" : ""
                            }`
                          }
                          onMouseEnter={mouseEnterHanlder}
                          onMouseLeave={mouseLeaveHanlder}
                        >
                          {item.name}
                          <div
                            className={`h-[3px] w-full bg-lightgreen absolute left-1/2 -bottom-1 transform -translate-x-1/2 ${
                              location.pathname === item.href
                                ? "scale-x-100"
                                : "scale-x-0"
                            } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
                          ></div>
                        </NavLink>
                        {/* Mega Menu */}
                        {megamenu ? (
                          <div
                            onMouseEnter={logging}
                            onMouseLeave={mouseLeaveHanlder}
                          >
                            <MegaMenu navigation={item} />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : item.dropdown ? (
                      <div key={item.name} className="group relative">
                        <button className="rounded-md px-3 py-2 text-base font-medium flex items-center">
                          {item.name}
                          <span className="ml-1">▼</span>
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute left-0 z-10 hidden group-hover:block bg-white text-black w-48 rounded-lg shadow-md overflow-hidden">
                          {item.submenu.map((subitem) => (
                            <NavLink
                              key={subitem.name}
                              to={subitem.href}
                              className="block px-4 py-2 text-sm hover:bg-lightgreen"
                            >
                              {subitem.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `rounded-md px-3 py-2 text-base font-medium relative group ${
                            isActive ? " text-lightgreen font-bold" : ""
                          }`
                        }
                      >
                        {item.name}
                        <div
                          className={`h-[3px] w-full bg-lightgreen absolute left-1/2 bottom-0 transform -translate-x-1/2 ${
                            location.pathname === item.href
                              ? "scale-x-100"
                              : "scale-x-0"
                          } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
                        ></div>
                      </NavLink>
                    )
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden min-h-screen">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) =>
                item.megaMenu ? (
                  <Disclosure key={item.name} as="div">
                    {({ open }) => (
                      <>
                        {/* Main Menu with Expand/Collapse Button */}
                        <Disclosure.Button className="flex w-full justify-between items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-lightgreen hover:text-black">
                          {item.name}
                          <span className="text-white text-base">
                            {open ? "−" : "+"}
                          </span>
                        </Disclosure.Button>

                        <Disclosure.Panel className="ml-4 space-y-1">
                          {item.sections.map((section, index) => (
                            <Disclosure key={index} as="div">
                              {({ open: subOpen }) => (
                                <>
                                  {/* Submenu Category with Expand/Collapse Button */}
                                  <Disclosure.Button className="flex w-full justify-between items-center px-3 py-2 text-sm font-semibold text-gray-400 hover:text-black hover:bg-lightgreen rounded-md">
                                    {section.title}
                                    {section.items.length > 0 && (
                                      <span className="text-white text-base">
                                        {subOpen ? "−" : "+"}
                                      </span>
                                    )}
                                  </Disclosure.Button>

                                  {/* Show Submenu Items when Expanded */}
                                  <Disclosure.Panel className="ml-4 space-y-1">
                                    {section.items.map(
                                      (subitem) =>
                                        subitem.name && (
                                          <NavLink
                                            to={subitem.href}
                                            key={subitem.name}
                                            className="block px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-lightgreen hover:text-black"
                                          >
                                            {subitem.name}
                                          </NavLink>
                                        )
                                        // <NavLink
                                        //   to={subitem.href}
                                        //   key={subitem.name}
                                        //   className="block px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-lightgreen hover:text-black"
                                        // >
                                        //   {subitem.name}
                                        // </NavLink>
                                    )}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-lightgreen hover:text-black"
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
