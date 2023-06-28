import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className=" inset-y-0 z-10">
      <div className="flex items-center justify-between px-5 h-16 ">
        <h1>
          <Link href="/">
            <Image
              alt="netflix_logo"
              src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
              width={100}
              height={110}
              unoptimized={true}
            />
          </Link>
        </h1>
        <div className="text-white">
          <Link className="px-5" href="/">
            HOME
          </Link>
          <Link className="px-5" href="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
