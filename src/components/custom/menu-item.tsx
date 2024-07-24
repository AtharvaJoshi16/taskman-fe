import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const MenuItem = ({
  nav,
  activeNav,
  onClick,
  className,
}: {
  nav: any;
  activeNav: string;
  onClick: (title: string) => void;
  className?: string;
}) => {
  return (
    <Button
      className={classNames(
        className,
        "w-full flex items-center justify-between font-normal hover:bg-sky-700 hover:bg-opacity-5",
        {
          "font-semibold text-sky-700 bg-sky-700 bg-opacity-10 hover:bg-opacity-10 hover:text-sky-700":
            nav.title === activeNav,
        }
      )}
      variant="ghost"
      onClick={() => onClick(nav.title)}
    >
      <div className="flex items-center gap-3">
        {nav.icon}
        {nav.title}
        {!!nav.subNav?.length && <ChevronDown size={14} />}
      </div>

      {["Epics", "Tasks", "Subtasks", "Starred"].includes(nav.title) && (
        <Badge
          className="h-5 w-5 p-1 text-[10px] flex items-center  justify-center bg-sky-300 text-sky-900 rounded-full pointer-events-none"
          variant="secondary"
        >
          {5}
        </Badge>
      )}
    </Button>
  );
};
