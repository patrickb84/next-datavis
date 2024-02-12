import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between lg:mx-auto px-8 bg-slate-800 text-white py-5 dark:border-b-gray-900 dark:border-b-2">
      <Link href="/" className="font-bold text-3xl">
        Data<span className="text-slate-400">Vis</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
