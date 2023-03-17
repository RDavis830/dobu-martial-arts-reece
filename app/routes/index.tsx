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
import Photo1 from "~/assets/jpg/coolPic.jpg";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <main className="min-h-screen bg-gray-50 md:flex md:items-center md:justify-center">
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
      <div className="bg-gray-50 pb-2">
        <h1 className="p-5 text-2xl">Enjoy our classes any time of day</h1>
        <div className="bg-gray-50 pb-4 lg:float-left lg:w-1/2 lg:pl-10">
          <h1 className="font-bold">Martial art level memberships</h1>
          <p className="pb-2">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ra tione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <div className="flex justify-end pr-2">
            <Link
              to="/membership"
              className="rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 pb-4 lg:float-right lg:w-1/2">
          <h1 className="font-bold">Self defense course</h1>
          <p className="pb-2">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ra tione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <div className="flex justify-end pr-2">
            <Link
              to="/membership"
              className="rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 pb-4 lg:float-left lg:w-1/2 lg:pl-10">
          <h1 className="font-bold">Private bookings</h1>
          <p className="pb-2">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ra tione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <div className="flex justify-end pr-2">
            <Link
              to="/membership"
              className=" rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 pb-4 lg:float-right lg:w-1/2">
          <h1 className="font-bold">Kid's memberships</h1>
          <p className="pb-2">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ra tione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <div className="flex justify-end pr-2">
            <Link
              to="/membership"
              className="rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="relative mb-2 flex h-screen w-full items-center justify-center overflow-hidden shadow-md shadow-black lg:shadow-white">
          <img
            className="absolute inset-0 min-h-screen object-cover pb-2 lg:float-left lg:h-full lg:w-1/2 lg:object-center lg:pr-8 lg:pl-2 lg:pt-2"
            src="https://images.unsplash.com/photo-1529651228087-f0f728ea871e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="Karate youth"
          />
          <div className="absolute inset-0" />
          <div className="relative left-1 pt-80 pr-10 lg:right-12 lg:left-80 lg:float-right lg:w-1/2 lg:pt-10">
            <h1 className="text-2xl font-bold shadow-black drop-shadow-2xl lg:pb-2">
              Our highly trained team!
            </h1>
            <p className="justify-start text-black">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden shadow-xl">
          <img
            className="absolute inset-0 h-screen object-cover pb-2 lg:left-1/3 lg:float-right lg:min-h-screen lg:w-3/5 lg:pt-2 lg:pl-64"
            src="https://images.unsplash.com/photo-1601878458462-487dd38a06f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="Youth karate"
          />
          <div className="absolute inset-0" />
          <div className="relative right-1 pt-80 pl-2 lg:right-72 lg:float-left lg:w-1/2 lg:pl-0 lg:pt-10">
            <h1 className=" text-2xl font-bold shadow-black drop-shadow-2xl lg:pb-2">
              Regular tournaments
            </h1>
            <p className="justify-start text-black">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:pb-4">
        <h1 className="justify-center pt-5 pb-1 text-center text-xl lg:pt-10 lg:text-3xl">
          Follow us on twitter, instagram, and facebook
        </h1>
        <p className="text-center lg:pt-3 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="mt-3 flex min-w-max justify-center bg-gray-50">
          <FacebookShareButton url="google.com">
            <FacebookIcon size={82} className="p-2" />
          </FacebookShareButton>

          <TwitterShareButton url="" className="mx-7">
            <TwitterIcon size={82} className="p-2" />
          </TwitterShareButton>

          <PinterestShareButton url="" media="">
            <PinterestIcon size={82} className="p-2" />
          </PinterestShareButton>
        </div>
      </div>
      <div>
        <div className="float-left w-3/5 bg-gray-50 lg:w-full">
          <p className=" p-5 pt-3 text-2xl lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="float-right flex w-2/5 justify-center bg-gray-50 py-8 lg:float-left lg:w-1/2 lg:pt-8 lg:pb-4">
          <Link
            to="/membership"
            className="bottom-10 rounded-md bg-blue-500 px-3 py-1 text-2xl font-medium text-white hover:bg-blue-300 lg:w-auto lg:text-4xl"
          >
            Join today
          </Link>
        </div>
        <div className="float-right flex w-2/5 justify-center bg-gray-50 pt-8 pb-16 lg:float-right lg:w-1/2">
          <Link
            to="/about"
            className="rounded-md bg-white px-3 py-1 text-2xl font-medium text-black ring-1 ring-black hover:bg-blue-300 hover:text-white hover:ring-0 lg:w-auto lg:text-4xl"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
}
