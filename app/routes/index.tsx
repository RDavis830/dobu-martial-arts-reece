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
import { MetaFunction } from "@remix-run/node";
import { Parallax } from "react-scroll-parallax";

export const meta: MetaFunction = () => ({
  title: "Welcome to DoBu Martial Arts",
  description:
    "A UK based martial arts gym offering various types of self defense training for children and adults!",
});

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <main className="min-h-screen bg-gray-50 md:flex md:items-center md:justify-center">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden shadow-xl">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
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
        <h1 className="p-5 text-2xl">Enjoy our classes any time of day 24/7</h1>
        <div className="mb-1 rounded bg-gray-50 hover:shadow-2xl lg:float-left lg:w-1/2 lg:pl-10">
          <h1 className="px-5 font-bold">Martial art level memberships</h1>
          <p className="px-5 pb-2">
            At DuBo martial arts we offer membership options that include access
            to different martial arts, experienced trainers, training resources,
            and a community for beginner to advanced practitioners.
          </p>
          <div className="flex justify-end pr-5">
            <Link
              to="/membership"
              className="rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mb-1 rounded bg-gray-50 pb-4 hover:shadow-2xl lg:float-right lg:w-1/2">
          <h1 className="px-5 font-bold">Self defense course</h1>
          <p className="px-5 pb-2">
            Our self-defense courses provide practical techniques and strategies
            to help you stay safe in real-life situations. Taught by experienced
            instructors, these courses are suitable for all skill levels.
          </p>
          <div className="flex justify-end pr-5">
            <Link
              to="/membership"
              className="rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mb-1 rounded bg-gray-50 pb-4 hover:shadow-2xl lg:float-left lg:w-1/2 lg:pl-10">
          <h1 className="px-5 font-bold">Private bookings</h1>
          <p className="px-5 pb-2">
            Book a private training session with our skilled instructors for
            personalized coaching in martial arts, self-defense, or fitness.
            Perfect for individuals, small groups, or corporate events.
          </p>
          <div className="flex justify-end pr-5">
            <Link
              to="/membership"
              className=" rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-300"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mb-1 rounded bg-gray-50 pb-4 hover:shadow-2xl lg:float-right lg:w-1/2">
          <h1 className="px-5 font-bold">Kid's memberships</h1>
          <p className="px-5 pb-2">
            Our kids' martial arts memberships offer a fun and safe environment
            for children to learn discipline, focus, and self-defense skills,
            while promoting confidence and physical fitness.
          </p>
          <div className="flex justify-end pr-5">
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
            <h1 className="px-5 text-2xl font-bold shadow-black drop-shadow-2xl lg:px-0 lg:pb-2">
              Our highly trained team!
            </h1>
            <p className="justify-start px-5 text-black lg:px-0">
              Our experienced and dedicated instructors are passionate about
              martial arts and provide personalized coaching to help students of
              all levels achieve their goals and reach their full potential.
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
            <h1 className=" px-5 text-2xl font-bold shadow-black drop-shadow-2xl lg:px-0 lg:pb-2">
              Regular tournaments
            </h1>
            <p className="justify-start px-5 text-black lg:px-0">
              Our martial arts tournaments offer competitors of all ages and
              skill levels the chance to showcase their abilities in a friendly,
              supportive environment, and win recognition for their
              achievements.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:pb-4">
        <h1 className="justify-center pt-5 pb-1 text-center text-xl lg:pt-10 lg:text-3xl">
          Follow us on twitter, instagram, and facebook
        </h1>
        <p className="text-center lg:pt-3 lg:text-xl">
          Connect with us on social media for updates on classes, events, and
          community news. Follow us today!
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
            Join our martial arts gym to improve your fitness, gain confidence,
            learn self-defense skills, and become part of a supportive
            community!
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
