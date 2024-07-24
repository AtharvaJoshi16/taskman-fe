import { navLinks } from "@/navLinks";
import { AccordionItem } from "@radix-ui/react-accordion";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionTrigger } from "../ui/accordion";
import { MenuItem } from "./menu-item";

export const Menu = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const handleClick = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <>
      {navLinks.map((nav) => (
        <div className="flex flex-col gap-2">
          {!!nav.subNav?.length ? (
            <Accordion type="single" collapsible className="w-full gap-2">
              <AccordionItem value={nav.title}>
                <AccordionTrigger className="p-1">
                  <MenuItem
                    nav={nav}
                    activeNav={activeNav}
                    onClick={() => handleClick(nav.title)}
                  />
                </AccordionTrigger>
                {nav.subNav?.map((subnav) => (
                  <AccordionContent className="gap-2">
                    <MenuItem
                      className="px-[30px]"
                      activeNav={activeNav}
                      onClick={() => handleClick(subnav.title)}
                      nav={subnav}
                    />
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          ) : (
            <MenuItem
              nav={nav}
              activeNav={activeNav}
              onClick={() => handleClick(nav.title)}
            />
          )}
        </div>
      ))}
    </>
  );
};
