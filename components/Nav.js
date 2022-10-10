import Link from "next/link";
import Image from "next/image";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center p-10">
      <Link href="/">
        <button className="text-3xl font-bold">Bloggy</button>
      </Link>
      <ul className="flex items-center gap-5">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text sm bg-pink-500 text-white rounded-lg font-medium ml-8">
              JOIN NOW
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href={"/post"}>
              <button className="py-2 px-4 text sm bg-pink-500 text-white rounded-lg font-medium ml-8">
                POST
              </button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
