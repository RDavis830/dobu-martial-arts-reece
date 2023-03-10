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
        <div className="relative h-screen w-full shadow-xl sm:overflow-hidden">
          <div>
            <img
              className="s:h-20 absolute h-full w-full pb-2"
              src={photo1}
              alt="Youth karate"
            />
            <div />
          </div>
          <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="mx-auto mt-64 max-w-lg text-center text-2xl text-white sm:mt-32 sm:max-w-3xl">
              Our memberships offer martials, gym, and lesiure facilities!
            </h1>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              {user ? (
                <Link
                  to="/notes"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                >
                  View Notes for {user.email}
                </Link>
              ) : (
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link
                    to="/login"
                    className="flex:w-20 rounded-md bg-blue-500 px-4 py-3 font-medium text-white shadow-inner hover:bg-blue-300"
                  >
                    Log In
                  </Link>
                </div>
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
