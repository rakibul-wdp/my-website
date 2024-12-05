"use client";

import { FC, useEffect } from "react";

export const Providers: FC<IChildren> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return <div className="overflow-hidden">{children}</div>;
};
