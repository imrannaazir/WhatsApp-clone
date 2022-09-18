import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { FcGoogle } from "react-icons/fc"
import { RiWhatsappLine } from "react-icons/ri"
import { auth } from "../firebase.init";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#EBEBEB]">
            <div className="flex flex-col justify-center items-center bg-white p-10 rounded-lg shadow-lg space-y-6">
                {/* whatsapp logo */}
                <RiWhatsappLine className="text-9xl text-gray-300" />

                {/* button */}
                <button
                    onClick={() => signInWithGoogle()}
                    className="flex items-center border-2 px-4 py-2 rounded-lg">
                    <FcGoogle className="text-xl mr-2" />
                    Login with Google</button>
            </div>
        </div>
    );
}

export default Login;