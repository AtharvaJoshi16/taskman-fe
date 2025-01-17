import {
  ClipboardList,
  History,
  Home,
  Layers3,
  Siren,
  Star,
  StickyNote,
} from "lucide-react";

export const navLinks = [
  {
    title: "Home",
    icon: <Home className="text-sky-700" size={14} />,
    link: "/",
  },
  {
    title: "Epics",
    icon: <Layers3 className="text-sky-700" size={14} />,
    link: "/epics",
    subNav: [
      {
        title: "Epics list",
        link: "/epics/demo-epic-id/task-1-id",
      },
      {
        title: "Create Epic",
        link: "/epics/demo-epic-id/task-1-id",
      },
    ],
  },
  {
    title: "Tasks",
    icon: <StickyNote className="text-sky-700" size={14} />,
    link: "/epics/epic-id/tasks",
    subNav: [
      {
        title: "Task 1",
        link: "/epics/demo-task-id",
      },
      {
        title: "Task 2",
        link: "/epics/demo-task-id",
      },
      {
        title: "Task 3",
        link: "/epics/demo-task-id",
      },
    ],
  },
  {
    title: "Subtasks",
    icon: <ClipboardList className="text-sky-700" size={14} />,
    link: "/tasks/task-id/subtasks",
    subNav: [
      {
        title: "SubTask 1",
        link: "/subtasks/demo-task-id",
      },
      {
        title: "SubTask 2",
        link: "/subtasks/demo-task-id",
      },
      {
        title: "SubTask 3",
        link: "/subtasks/demo-task-id",
      },
    ],
  },
  {
    title: "My priorities",
    link: "/priorities",
    icon: <Siren className="text-sky-700" size={14} />,
  },
  {
    title: "Starred",
    link: "/starred",
    icon: <Star className="text-yellow-500" size={14} />,
  },
  {
    title: "History",
    link: "/history",
    icon: <History className="text-sky-700" size={14} />,
  },
];
