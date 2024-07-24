"use client";

import { ListCollapse } from "lucide-react";
import { Button } from "../ui/button";
import { Menu } from "./menu";

export const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] bg-sky-100 bg-opacity-70 p-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-sky-600 text-2xl tracking-widest">
          TASKMAN
        </h2>
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 bg-sky-300 bg-opacity-30 border-sky-900 hover:bg-sky-300 hover:bg-opacity-40"
        >
          <ListCollapse className="scale-x-[-1] text-sky-800" size={15} />
        </Button>
      </div>
      <div className="my-[30px] flex flex-col gap-2">
        <Menu />
      </div>
    </div>
  );
};
