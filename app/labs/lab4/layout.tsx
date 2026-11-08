import { ReactNode } from "react";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function Lab4Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
