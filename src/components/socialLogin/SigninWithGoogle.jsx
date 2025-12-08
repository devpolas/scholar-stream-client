import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../contexts/useAuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

export default function SigninWithGoogle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { continueWithGoogle } = useAuthContext();

  function handleContinueWithGoogle() {
    continueWithGoogle().then(() => {
      toast.success("Login Successful");
      navigate(location?.state || "/");
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
