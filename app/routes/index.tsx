import { Link } from "@remix-run/react";
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from "react-share";

import { useOptionalUser } from "~/utils";
import photo1 from "~/assets/jpg/344017850-H.jpg";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <main className="min-h-screen bg-white md:flex md:items-center md:justify-center">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden shadow-xl">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center pb-2"
            src="https://images.unsplash.com/photo-1598300606161-4019d0dfec28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80"
            alt="Youth karate"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 mix-blend-multiply" />
          <div className="relative px-4 sm:px-6 lg:px-8">
            <h1 className="mx-auto max-w-lg text-center text-2xl text-white shadow-black drop-shadow-2xl ">
              Our memberships offer martials, gym, and lesiure facilities!
            </h1>
            <div className="mx-auto mt-10 flex justify-center">
              {user ? (
                <Link
                  to="/notes"
                  className="mx-auto flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                >
                  View Notes for {user.email}
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="mx-auto rounded-md bg-blue-500 px-4 py-3 font-medium text-white shadow-inner hover:bg-blue-300 sm:justify-center"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <div>
        <FacebookShareButton url="google.com">
          <FacebookIcon round />
        </FacebookShareButton>

        <TwitterShareButton url="">
          <TwitterIcon round />
        </TwitterShareButton>

        <PinterestShareButton url="" media="">
          <PinterestIcon round />
        </PinterestShareButton>
      </div>
    </>
  );
}
