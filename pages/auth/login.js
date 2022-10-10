import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="shadow-2xl mt-32 p-6 text-gray-800 rounded-xl max-w-md m-auto text-center">
      <h2 className="text-2xl font-bold">JOIN NOW!</h2>
      <div className="py-1">
        <h3 className="py-4">SIGN IN WITH ONE OF THE PROVIDERS</h3>
        <button
          onClick={GoogleLogin}
          className="text-white bg-pink-600 font-medium rounded-lg flex align-middle m-auto text-center p-4 gap-2 "
        >
          <FcGoogle className="text-2xl text-center" />
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}
