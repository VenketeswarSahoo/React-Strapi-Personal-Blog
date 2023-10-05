import React from "react";
import { Link } from "react-router-dom";

const SliderPart = () => {
  return (
    <div>
      <div className="my-8">
        <h4 className="my-6">
          <ul>Our Staffs</ul>
        </h4>
        <div className="my-6">
          <div className="flex items-center">
            <img
              className="w-6 rounded-full mb-2"
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1694851627~exp=1694852227~hmac=f65967b7bb466697ca842ee601c46c4c5523d39c93902e733a134c629b5f8d49"
            />
            <h6 className="text-xs ml-2">Medium Staff in The Medium Blog</h6>
          </div>
          <h6>What We’re Reading: Heritage and history</h6>
        </div>
        <div className="my-6">
          <div className="flex items-center">
            <img
              className="w-6 rounded-full mb-2"
              src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1694848555~exp=1694849155~hmac=1c43523c9e9d4679d9d3f71292b89b826f1ed6b4dfdcbf0562e9e9ccdc80b8ea"
            />
            <h6 className="text-xs ml-2">Medium Staff in The Medium Blog</h6>
          </div>
          <h6>What We’re Reading: Heritage and history</h6>
        </div>
        <div className="my-6">
          <div className="flex items-center">
            <img
              className="w-6 rounded-full mb-2"
              src="https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?w=740&t=st=1694853300~exp=1694853900~hmac=236cd816c294f86def6e650ecc933476d5d9e011548899d982df926b525be187"
            />
            <h6 className="text-xs ml-2">Medium Staff in The Medium Blog</h6>
          </div>
          <h6>What We’re Reading: Heritage and history</h6>
        </div>
        <h6 className="text-xs ml-2 text-green-900 cursor-pointer">
          Learn More
        </h6>
      </div>
      <hr />
      <div className="my-4">
        <h4>Recommended topics</h4>
      </div>
      <div className="flex flex-row flex-wrap">
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Data Science
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Technology
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Fashion
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Filmy
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Politics
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Machine Learning
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          AI Learning
        </Link>
        <Link
          className=" py-1 px-4 m-1.5 w-fit bg-slate-200 rounded-md shadow-lg hover:bg-slate-100"
          to={"/"}
        >
          Python
        </Link>
      </div>
      <h6 className="text-xs ml-2 my-4 text-green-900 cursor-pointer">
        See More Topics
      </h6>

      <hr />
      <div className="mt-4">
        <h4>Who To Follow</h4>
        <div className="flex my-6">
          <div>
            <img
              className="w-10 rounded-full"
              src="https://img.freepik.com/free-psd/portrait-person-with-watercolor-effect-mock-up_23-2149598931.jpg?w=740&t=st=1694850441~exp=1694851041~hmac=67ed612a23fe7fb77b9dd95927507380280f4e0b2007f6f7615eaf98363235dc"
            />
          </div>
          <div className="ml-4">
            <Link to={""} className="text-sm hover:underline">
              Harsh Mehetab
            </Link>
            <h6 className="text-xs text-slate-600">Front-end web developer</h6>
          </div>
          <div>
            <Link
              to={""}
              className="border border-gray-700 rounded-md py-1 px-4 ml-4 hover:bg-black hover:text-white"
            >
              Follow
            </Link>
          </div>
        </div>
        <div className="flex my-6">
          <div>
            <img
              className="w-10 rounded-full"
              src="https://img.freepik.com/free-psd/portrait-person-with-watercolor-effect-mock-up_23-2149598931.jpg?w=740&t=st=1694850441~exp=1694851041~hmac=67ed612a23fe7fb77b9dd95927507380280f4e0b2007f6f7615eaf98363235dc"
            />
          </div>
          <div className="ml-4">
            <Link to={""} className="text-sm hover:underline">
              Harsh Mehetab
            </Link>
            <h6 className="text-xs text-slate-600">Front-end web developer</h6>
          </div>
          <div>
            <Link
              to={""}
              className="border border-gray-700 rounded-md py-1 px-4 ml-4 hover:bg-black hover:text-white"
            >
              Follow
            </Link>
          </div>
        </div>
        <div className="flex my-6">
          <div>
            <img
              className="w-10 rounded-full"
              src="https://img.freepik.com/free-psd/portrait-person-with-watercolor-effect-mock-up_23-2149598931.jpg?w=740&t=st=1694850441~exp=1694851041~hmac=67ed612a23fe7fb77b9dd95927507380280f4e0b2007f6f7615eaf98363235dc"
            />
          </div>
          <div className="ml-4">
            <Link to={""} className="text-sm hover:underline">
              Harsh Mehetab
            </Link>
            <h6 className="text-xs text-slate-600">Front-end web developer</h6>
          </div>
          <div>
            <Link
              to={""}
              className="border border-gray-700 rounded-md py-1 px-4 ml-4 hover:bg-black hover:text-white"
            >
              Follow
            </Link>
          </div>
        </div>
      </div>
      <h6 className="text-xs ml-2 my-4 text-green-900 cursor-pointer">
        Show More Sugggestions
      </h6>
      <hr />
      <div className="">
        <h6 className="pt-4">Reading List</h6>
        <p className="text-sm text-slate-800 pt-2">
          Click the <i>bookmark</i> on any story to easily add it to your
          reading list or a custom list that you can share.
        </p>
        <div className="flex flex-wrap text-xs text-slate-600 mt-3">
          <Link to={""} className="px-1">
            Help
          </Link>
          <Link to={""} className="px-1">
            Status
          </Link>
          <Link to={""} className="px-1">
            Writers
          </Link>
          <Link to={""} className="px-1">
            Blog
          </Link>
          <Link to={""} className="px-1">
            Careers
          </Link>
          <Link to={""} className="px-1">
            Privacy
          </Link>
          <Link to={""} className="px-1">
            Teams
          </Link>
          <Link to={""} className="px-1">
            About
          </Link>
          <Link to={""} className="px-1">
            Text to speech
          </Link>
          <Link to={""} className="px-1">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderPart;
