import Carousel from "~/components/carousel";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Meet the DoBu Team!",
  description:
    "Find out about the various martials we teach and our highly qualified instrcutors, not mention out top of the range facilities",
});

export default function AboutUs() {
  return (
    <>
      <div>
        <div className="pt-8 lg:pt-16">
          <h1 className="text-center text-xl lg:text-3xl">Meet the team</h1>
          <p className=" text-center text-xs lg:pt-4 lg:text-sm">
            Find out about our friendly team, who are experts in a large range
            to equip you for any scenario
          </p>
        </div>
        <div className="m-10 mx-auto flex max-w-3xl hover:rounded-lg hover:shadow-2xl lg:max-w-5xl">
          <div className="w-1/3">
            <img
              className="h-60 lg:h-72"
              src="https://images.unsplash.com/photo-1608583235545-8b9b39b454d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=447&q=80"
              alt="Harpreet Kaur"
            />
          </div>
          <div className="float-right w-2/3 px-4">
            <h1 className="pt-14 font-bold lg:pt-20 lg:text-2xl">
              Harpreet Kaur
            </h1>
            <p className="pt-3 text-sm lg:pt-5 lg:text-base">
              Our fitness instructor Harpreet who holds degrees in physiotherapy
              and sports science, bringing a wealth of knowledge and expertise
              to their classes, ensuring safe and effective workouts.
            </p>
          </div>
        </div>
        <div className="m-10 mx-auto flex max-w-3xl hover:rounded-lg hover:shadow-2xl lg:max-w-5xl">
          <div className="w-1/3">
            <img
              className="h-60 lg:h-72"
              src="https://images.unsplash.com/photo-1529891858519-f18aa4f6a3b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              alt="Harpreet Kaur"
            />
          </div>
          <div className="float-right w-2/3 px-4">
            <h1 className="pt-14 font-bold lg:pt-20 lg:text-2xl">
              Traci santiago
            </h1>
            <p className="pt-3 text-sm lg:pt-5 lg:text-base">
              Our other fitness instructor Traci, is a well-rounded expert with
              degrees in nutrition and sports science, and experience in
              training combat athletes to improve their strength and
              conditioning.
            </p>
          </div>
        </div>
        <div className="m-10 mx-auto flex max-w-3xl hover:rounded-lg hover:shadow-2xl lg:max-w-5xl">
          <div className="w-1/3">
            <img
              className="h-60 lg:h-72"
              src="https://images.unsplash.com/photo-1514134177582-fec97bd28b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="Harpreet Kaur"
            />
          </div>
          <div className="float-right w-2/3 px-4">
            <h1 className="pt-14 font-bold lg:pt-20 lg:text-2xl">
              Mauricio Gomez
            </h1>
            <p className="pt-3 text-sm lg:pt-5 lg:text-base">
              Our head martial arts instructor Mauricio is a highly skilled
              black belt in judo, jiu-jitsu, and karate, with a passion for
              coaching muay thai and sharing their expertise with students.
            </p>
          </div>
        </div>
        <div className="m-10 mx-auto flex max-w-3xl hover:rounded-lg hover:shadow-2xl lg:max-w-5xl">
          <div className="w-1/3">
            <img
              className="h-60 lg:h-72"
              src="https://plus.unsplash.com/premium_photo-1667942252639-a59152eeef15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Harpreet Kaur"
            />
          </div>
          <div className="float-right w-2/3 px-4">
            <h1 className="pt-14 font-bold lg:pt-20 lg:text-2xl">Sarah Nova</h1>
            <p className="pt-3 text-sm lg:pt-5 lg:text-base">
              Our assistant martial arts coach Sarah, is a highly accomplished
              5th dan in karate, with a talent for teaching and helping students
              develop their skills.
            </p>
          </div>
        </div>
        <div className="m-10 mx-auto flex max-w-3xl hover:rounded-lg hover:shadow-2xl lg:max-w-5xl">
          <div className="w-1/3">
            <img
              className="h-60 lg:h-72"
              src="https://images.unsplash.com/photo-1595838788874-a9dbc04f3d7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="Harpreet Kaur"
            />
          </div>
          <div className="float-right w-2/3 px-4">
            <h1 className="pt-14 font-bold lg:pt-20 lg:text-2xl">
              Guy Victory
            </h1>
            <p className="pt-3 text-sm lg:pt-5 lg:text-base">
              Our other assistant martial arts coach Guy, is a skilled black
              belt in judo and jiu-jitsu, with a passion for helping students
              improve their technique and develop their skills.
            </p>
          </div>
        </div>
        <div className="m-10 mx-auto flex max-w-3xl hover:rounded-lg hover:shadow-2xl lg:max-w-5xl">
          <div className="w-1/3">
            <img
              className="h-60 lg:h-72"
              src="https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Harpreet Kaur"
            />
          </div>
          <div className="float-right w-2/3 px-4">
            <h1 className="pt-14 font-bold lg:pt-20 lg:text-2xl">
              Morris Davis
            </h1>
            <p className="pt-3 text-sm lg:pt-5 lg:text-base">
              Another of our assistant martial arts coach Morris, is a versatile
              black belt in karate and an accredited muay Thai coach, with
              experience in teaching various styles.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-1 px-2">
        <Carousel />
      </div>
    </>
  );
}
