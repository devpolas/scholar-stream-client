import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../contexts/useAuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

export default function SigninWithGoogle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { continueWithGoogle } = useAuthContext();

  async function handleContinueWithGoogle() {
    continueWithGoogle().then((result) => {
      const user = result.user;
      axios.post("http://localhost:8000/api/v1/users", {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      });
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
