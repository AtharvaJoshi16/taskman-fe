import { navLinks } from "@/navLinks";
import classNames from "classnames";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Menu = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const handleClick = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <>
      {navLinks.map((nav) => (
        <div className="flex flex-col gap-2">
          <Button
            className={classNames(
              "flex items-center justify-between font-normal hover:bg-violet-700 hover:bg-opacity-5",
              {
                "font-semibold text-violet-700 bg-violet-900 bg-opacity-10 hover:bg-opacity-10 hover:text-violet-700":
                  nav.title === activeNav,
              }
            )}
            variant="ghost"
            onClick={() => handleClick(nav.title)}
          >
            <div className="flex items-center gap-3">
              {nav.icon}
              {nav.title}
            </div>
            {["Epics", "Tasks", "Subtasks", "Starred"].includes(nav.title) && (
              <Badge
                className="h-5 w-5 p-1 text-[10px] flex items-center  justify-center bg-violet-300 text-violet-900 rounded-full pointer-events-none"
                variant="secondary"
              >
                {5}
              </Badge>
            )}
          </Button>
        </div>
      ))}
    </>
  );
};
