"use client";

import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Logo"
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
                className="flex items-center rounded-xl border-2 py-1.5 px-2"
                onClick={() => router.push("/details/create")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
