"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          className={
            pathname === `/account/${link}`
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link === "signin" ? "Signin" : link === "signup" ? "Signup" : "Profile"}
        </Link>
      ))}
    </div>
  );
}
