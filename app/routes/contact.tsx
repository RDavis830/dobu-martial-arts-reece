import { Link } from "@remix-run/react";

export default function ContactUs() {
  return (
    <>
      <div className="border-t-8 border-gray-50 lg:border-l-8">
        <div className="lg:float-left lg:w-1/2">
          <img
            className="absolute rounded-lg lg:w-5/12"
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Teamwork"
          ></img>
        </div>
        <div className="lg:pr group relative bg-gray-50 align-text-bottom lg:float-right lg:w-1/2 lg:pt-40 lg:pr-20">
          <h1 className=" text-2xl font-bold group-hover:underline">
            24/7 Support
          </h1>
          <p>
            Our friendly customer support team is available to assist with any
            questions or concerns you may have. Contact us via email or phone
            for prompt assistance.
          </p>
        </div>
      </div>
      <div className=" bg-gray-50 pt-60 lg:pt-96">
        <img
          className=" max-h-1 w-full blur-sm"
          src="https://images.unsplash.com/photo-1548697143-6a9dc9d9d80f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          alt="black line"
        ></img>
      </div>
      <div className="group bg-gray-50 pb-2">
        <h1 className="p-5 text-2xl group-hover:underline">
          Frequently asked questions
        </h1>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-left lg:w-1/2 lg:px-0 lg:pl-10">
          <h1 className="font-bold">What is the age range of your classes?</h1>
          <p className="pb-2">
            Our classes cater to a wide range of ages, from children to seniors,
            and all skill levels, from beginners to advanced practitioners.
            There's something for everyone!
          </p>
        </div>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-right lg:w-1/2 lg:px-0">
          <h1 className="font-bold">How do i make a payment online?</h1>
          <p className="pb-2">
            Making a payment for your membership is easy and secure with our
            online payment system. Simply follow the prompts to complete your
            transaction and start training today!
          </p>
        </div>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-left lg:w-1/2 lg:px-0 lg:pl-10">
          <h1 className="font-bold">Is parking available?</h1>
          <p className="pb-2">
            We provide convenient on-site parking for our members, making it
            easy to attend classes. Contact us for more information on parking
            availability. Simply use the front parking spaces next to our
            entrance.
          </p>
        </div>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-right lg:w-1/2 lg:px-0">
          <h1 className="font-bold">Are there parents and adult classes?</h1>
          <p className="pb-2">
            Our parent-child classes offer a fun and engaging way for families
            to bond and learn martial arts skills together, promoting fitness,
            discipline, and confidence. Sign up today!
          </p>
        </div>
      </div>
      <div className=" bg-gray-50 pt-3 lg:pt-64">
        <img
          className=" max-h-1 w-full blur-sm"
          src="https://images.unsplash.com/photo-1548697143-6a9dc9d9d80f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          alt="black line"
        ></img>
      </div>
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
              Anybody is welcome at the DuBo martial arts gym, with any level of
              experience
            </h1>
            <div className="mx-auto mt-10 flex justify-center">
              <Link
                to="/membership"
                className="mx-auto flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-300 sm:px-8"
              >
                Join today
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className=" bg-gray-50 pb-2">
        <h1 className="p-5 text-center text-3xl">Contact Us</h1>
        <p className="px-5 pb-5 text-center text-xl">
          If you are still struggling with anything or want to arrange a visit
          at our gym feel free to contact us at:
        </p>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-left lg:w-1/2 lg:px-0 lg:pl-10">
          <h1 className="font-bold">Address</h1>
          <p className="pb-2">
            Our martial arts gym is located in the heart of the UK at st. Helier
            Jersey, providing a convenient and accessible location for all
            students. Come train with us!
          </p>
        </div>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-right lg:w-1/2 lg:px-0">
          <h1 className="font-bold">Email/ Fax</h1>
          <p className="pb-2">
            Need to get in touch with us? Email or fax us your questions or
            concerns, and we'll get back to you as soon as possible. Contact
            details available on our website.
          </p>
        </div>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-left lg:w-1/2 lg:px-0 lg:pl-10">
          <h1 className="font-bold">Text/ Social media</h1>
          <p className="pb-2">
            Stay connected with us via text or messaging! Receive updates on
            class schedules, events, and other important information straight to
            your mobile device. Sign up now!
          </p>
        </div>
        <div className="mb-1 rounded-2xl bg-gray-50 px-5 pb-4 hover:shadow-2xl lg:float-right lg:w-1/2 lg:px-0">
          <h1 className="font-bold">Landline/ Mobile</h1>
          <p className="pb-2">
            Our friendly staff are available to take your call and answer any
            questions you may have about our classes, memberships, or other
            related inquiries. Call us now!
          </p>
        </div>
        <h1 className="text-center text-3xl font-bold">
          No question is a bad question, contact us with any queries you have!
        </h1>
      </div>
      <div className=" bg-gray-50">
        <div>
          <h1 className="py-5 pl-3 text-3xl lg:pl-6">Who to contact</h1>
        </div>
        <div className="float-left w-1/3 bg-gray-50 hover:bg-white">
          <img
            className="h-32 rounded-full pl-10 lg:h-52 lg:pl-36"
            src="https://images.unsplash.com/photo-1514134177582-fec97bd28b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Harpreet Kaur"
          />
          <h1 className="text-center text-xl font-bold">The owner</h1>
          <p className="px-3 text-center text-sm">
            Do you have a question or concern that you'd like to discuss with
            the owner? Contact us via email or phone to schedule a consultation
            with our owner!
          </p>
        </div>
        <div className="float-right w-1/3 bg-gray-50 hover:bg-white">
          <img
            className="h-32 rounded-full pl-10 lg:h-52 lg:pl-36"
            src="https://plus.unsplash.com/premium_photo-1667942252639-a59152eeef15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Harpreet Kaur"
          />
          <h1 className="text-center text-xl font-bold">The manager</h1>
          <p className="px-3 text-center text-sm">
            Our dedicated gym manager is here to assist with any questions or
            concerns you may have about our classes, memberships, or other
            related inquiries. Contact us today!
          </p>
        </div>
        <div className="float-right w-1/3 bg-gray-50 hover:bg-white">
          <img
            className="h-32 rounded-full pl-10 lg:h-52 lg:pl-36"
            src="https://images.unsplash.com/photo-1595838788874-a9dbc04f3d7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Harpreet Kaur"
          />
          <h1 className="text-center text-xl font-bold">Trainers</h1>
          <p className="px-3 text-center text-sm">
            Need advice or guidance from one of our experienced trainers?
            Contact us to schedule a consultation and receive personalized
            recommendations for your training needs.
          </p>
        </div>
      </div>
    </>
  );
}
