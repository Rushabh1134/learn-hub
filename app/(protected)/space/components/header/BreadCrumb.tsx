"use client";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const pathname = usePathname();

  const crumbsHandler = (): string => {
    switch (pathname) {
      case "/space":
        return "Home";
      case "/space/profile":
        return "Profile";
      case "/space/template-library":
        return "Template Library";
      default:
        return "";
    }
  };

  return (
    <h2 className="text-sm font-medium text-primary/50">{crumbsHandler()}</h2>
  );
};

export default BreadCrumb;
