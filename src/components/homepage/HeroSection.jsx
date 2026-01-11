import { useNavigate } from "react-router";
import HeroButton from "../ui/HeroButton";
import heroImg from "./../../assets/scholarship-for-students.webp";
export default function HeroSection() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("/all-scholarships");
  }
  return (
    <div
      className='hero min-h-[40vh]'
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className='hero-overlay'></div>
      <div className='hero-overlay'></div>
      <div className='hero-content text-neutral-content text-center'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-4xl font-bold text-secondary-content'>
            Welcome to <span className='text-green-700'>Scholarship</span>{" "}
            Stream
          </h1>
          <p className='mb-5 text-lg'>
            The Scholarship Stream is designed to recognize exceptional students
            who demonstrate strong academic performance, leadership potential,
            and a commitment to their community.
          </p>
          <HeroButton handelClick={handelClick} />
        </div>
      </div>
    </div>
  );
}
