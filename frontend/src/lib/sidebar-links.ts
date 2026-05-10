import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  BriefcaseBusiness,
  Map,
} from "lucide-react";

export const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Resume Analyzer",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "Job Matcher",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    icon: Map,
  },
];