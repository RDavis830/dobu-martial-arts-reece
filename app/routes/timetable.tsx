import newPhoto1 from "~/assets/png/Picture1.png";
import newPhoto2 from "~/assets/png/Picture2.png";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Class times",
  description: "Find a class to fit your experience and availability",
});

export default function Timetable() {
  return (
    <>
      <div>
        <img
          className="h-full w-full"
          src={newPhoto1}
          alt="lessons timetable"
        ></img>
      </div>
      <div>
        <img
          className="h-full w-full"
          src={newPhoto2}
          alt="other classes timetable"
        ></img>
      </div>
    </>
  );
}
