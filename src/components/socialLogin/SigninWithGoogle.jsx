import { FcGoogle } from "react-icons/fc";
import useAuthContext from "../../contexts/useAuthContext";

export default function SigninWithGoogle() {
  const { continueWithGoogle } = useAuthContext();

  function handleContinueWithGoogle() {
    continueWithGoogle();
  }

  return (
    <>
      <button onClick={handleContinueWithGoogle} className='btn btn-outline'>
        <FcGoogle />
        Continue with Google
      </button>
    </>
  );
}
