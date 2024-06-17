import React, { ReactNode } from "react";

const DeletedPageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mt-10 xl:mt-5 w-full px-4">{children}</div>;
};

export default DeletedPageLayout;
