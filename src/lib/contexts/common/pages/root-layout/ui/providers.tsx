"use client";

import { FC, ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <>{children}</>;
};
