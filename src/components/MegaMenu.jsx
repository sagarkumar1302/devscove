import React from "react";
import { NavLink } from "react-router-dom";

const MegaMenu = ({ navigation }) => {
  return (
    <div className="absolute z-10 top-16 py-5 px-8 left-0 mt-2 w-full bg-black shadow-sm flex justify-center transition-all items-center shadow-slate-50 bg-mega-menu-bg bg-no-repeat bg-left-bottom bg-[auto_150px] animate-slideBg">
      <div className="container grid grid-cols-4  sm:px-6 lg:px-10 gap-6 p-6">
        {navigation.sections &&
          navigation.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4 p-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((subitem) => (
                  <li
                    key={subitem.name + index}
                    className="hover:bg-slate-200 transition-all rounded-md p-2 hover:text-black"
                  >
                    {subitem.img ? (
                      <img
                        src={subitem.img}
                        alt={subitem.name}
                        className="rounded-md hover:bg-slate-200 transition-all cursor-pointer"
                      />
                    ) : (
                      <NavLink
                        href={subitem.href}
                        className="block"
                      >
                        <span className="font-bold text-xl">
                          {subitem.name}
                        </span>
                        {subitem.description &&<p className="text-base">{subitem.description}</p>}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MegaMenu;
