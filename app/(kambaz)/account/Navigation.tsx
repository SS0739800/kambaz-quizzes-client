"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      <Link
        href="/account/signin"
        className={
          pathname === "/account/signin"
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Signin
      </Link>
      <Link
        href="/account/signup"
        className={
          pathname === "/account/signup"
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Signup
      </Link>
      <Link
        href="/account/profile"
        className={
          pathname === "/account/profile"
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Profile
      </Link>
    </div>
  );
}
