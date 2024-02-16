"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { signIn } from "next-auth/react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
        {true && (
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        )}
        <div className="flex w-32 justify-end gap-3">
          {false ? (
            <MobileNav />
          ) : (
            <div className="space-y-2">
              <button
                className="flex items-center rounded-xl border-2  p-2"
                onClick={() => signIn("google")}
              >
                <img
                  src="/assets/icons/logo.webp"
                  alt=""
                  width={25}
                  height={25}
                />
                <p>Google</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
