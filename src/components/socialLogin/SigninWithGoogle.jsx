import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../contexts/useAuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";

export default function SigninWithGoogle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { continueWithGoogle } = useAuthContext();
  const axiosBase = useAxios();

  async function handleContinueWithGoogle() {
    continueWithGoogle().then((result) => {
      const user = result.user;
      axiosBase.post("/users", {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      });
      toast.success("Login Successful");
      navigate(location?.state || "/", { replace: true });
    });
  }

  return (
    <>
      <button
        type='button'
        onClick={handleContinueWithGoogle}
        className='btn btn-outline'
      >
        <FcGoogle />
        Continue with Google
      </button>
    </>
  );
}
