"use client";

import { ListCollapse } from "lucide-react";
import { Button } from "../ui/button";
import { Menu } from "./menu";

export const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] bg-violet-100 bg-opacity-70 p-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-violet-600 text-2xl tracking-widest">
          TASKMAN
        </h2>
        <Button
          size="icon"
          variant="outline"
          className="h-7 w-7 bg-violet-300 bg-opacity-30 border-violet-900 hover:bg-violet-300 hover:bg-opacity-40"
        >
          <ListCollapse className="scale-x-[-1] text-violet-800" size={15} />
        </Button>
      </div>
      <div className="my-[30px] flex flex-col gap-2">
        <Menu />
      </div>
    </div>
  );
};
