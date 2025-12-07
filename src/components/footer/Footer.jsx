import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "./../../assets/logo.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-base-200'>
      <footer className='footer sm:footer-horizontal text-base-content p-4'>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
      <footer className='footer text-base-content border-base-300 border-t px-10 py-4 flex flex-col-reverse sm:flex-row justify-between'>
        <aside className='grid-flow-col items-center'>
          <Link to={"/"}>
            <img className='w-12' src={logo} alt='Logo' />
          </Link>
          <p>
            Scholar Stream
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4'>
            <a>
              <BsTwitterX />
            </a>
            <a>
              <IoLogoYoutube />
            </a>
            <a>
              <FaFacebookF />
            </a>
          </div>
        </nav>
      </footer>
      <aside>
        <p className='text-sm'>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
}
