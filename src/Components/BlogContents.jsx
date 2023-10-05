import React from "react";
import { useParams } from "react-router-dom";

const BlogContents = ({ blogs }) => {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter(blog => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  console.log("blog object");
  console.log(blog);
  return (
    <div>
      {/* <h1>
        {blog.attributes.BlogTitle}
      </h1>
      <h3>
        {blog.attributes.BlogDesc}
      </h3>
      <p>
        {blog.attributes.BlogContent}
      </p> */}
      {/* ----------------- */}
      <div className="grid justify-items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold my-6">
            {blog.attributes.BlogTitle}
          </h1>
          <div className="flex mb-4">
            <div>
              <img
                className="w-10 rounded-full border-none cursor-pointer"
                src={`http://localhost:1337${blog.attributes.ProfileImage
                  .data[0].attributes.url}`}
              />
            </div>
            <div className="ml-4">
              <div className="flex">
                <h5 className="hover:underline cursor-pointer">
                  {blog.attributes.ProfileName}
                </h5>
                <p className="ml-2">.</p>
                <h5 className="ml-2 text-green-800 cursor-pointer">Follow</h5>
              </div>
              <div className="flex">
                <p className="text-sm">5 min read</p>
                <p className="ml-2 text-sm">.</p>
                <p className="ml-2 text-sm">
                  {blog.attributes.BlogDate}
                </p>
              </div>
            </div>
          </div>
          <hr />
          <img
            src={`http://localhost:1337${blog.attributes.BlogContentImg.data[0]
              .attributes.url}`}
          />
          <div className="text-xl">
            {blog.attributes.BlogContent}
          </div>
        </div>
      </div>
      {/* ----------------- */}

      {/* <div className="grid justify-items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold my-6">
            Next.js 13.4: A Game-Changer for Front-End Development!
          </h1>
          <div className="flex mb-4">
            <div>
              <img
                className="w-10 rounded-full border-none cursor-pointer"
                src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1694867684~exp=1694868284~hmac=13fa56d3a0885011cb71c524efb3f8913c26dcc9a09d6127d081c3520b88c1ae"
              />
            </div>
            <div className="ml-4">
              <div className="flex">
                <h5 className="hover:underline cursor-pointer">
                  Prashant Gupta
                </h5>
                <p className="ml-2">.</p>
                <h5 className="ml-2 text-green-800 cursor-pointer">Follow</h5>
              </div>
              <div className="flex">
                <p className="text-sm">5 min read</p>
                <p className="ml-2 text-sm">.</p>
                <p className="ml-2 text-sm">May 14</p>
              </div>
            </div>
          </div>
          <hr />
          <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*6rgaCc73RlT4coYEIu9wnA.png" />
          <div className="text-xl">
            <p>
              Vercel recently launched NextJs 13.4 Stable version as a
              serve-client front-end framework.
            </p>
            <br />
            <br />
            <p>
              But we are more interested how this will change the web
              development flow. 😉
            </p>
            <br />
            <br />
            <p>
              Many people will compare it with Php or will say “This is what we
              were doing in PHP 10 years ago”, the answer is a bit complicated.
            </p>
            <br />
            <br />
            <p>
              PHP is indeed a server-side programming language, primarily used
              for server-side processing and generating dynamic web content. By
              itself, PHP doesn’t directly interact with the front-end or
              provide client-side interactivity. To achieve front-end
              interaction or real-time updates, additional technologies like
              Ajax or JavaScript are typically used in conjunction with PHP.
            </p>
            <br />
            <br />
            <h2 className="text-bold">
              PHP Vs Modern JS Framworks/Libraries ?
            </h2>
            <p>
              When React was released people were excited to learn and develop
              apps into it, since we can now make a single-page app; which is
              best for React to handle. How React work is by letting you write
              your logic in the ship the complete bundle to the user’s browser.
              Now the question comes what happens once you start filling with
              multiple libraries or your code base starts increasing?<i>
                Your production bundle size will also start growing which will
                give a hard time for users to ship.
              </i>
            </p>
            <br />
            <br />
            <p>
              During my journey of learning React, I undertook a project and
              ensured its readiness for production. Initially, it was a basic
              React project without any additional frameworks or libraries.
              However, as the code base expanded and I integrated external
              libraries, the bundle size gradually increased. Unfortunately,
              this led to complaints from users regarding noticeable
              sluggishness on mobile devices.
            </p>
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6I8OkJiSYkagfSJFbIYP8Q.jpeg" />
            <br />
            <br />
            <p>
              Now React introduced the concept of code-splitting, where we can
              split these bundles and lazy load them. Fine, we can solve the
              bundling with code-splitting & one can argue we can cache some
              bundle or file to the user’s machine so it won't download it back,
              which is perfect for solving slowness or website loading issues.
            </p>
            <br />
            <br />
            <p>
              Now the question arises: how can one manage the processing of
              JavaScript code? 🤕 As our codebase grows larger, it can
              undoubtedly have an impact on the loading speed of a JavaScript
              engine. When a JavaScript file is loaded by a browser, the engine
              needs to parse and interpret the code before executing it. The
              larger the codebase, the more time it takes for the engine to
              process and load the JavaScript file. As we are aware, JavaScript
              is a single-threaded language specifically designed to be
              lightweight, allowing it to run smoothly on users’ browsers.
              Instead of delivering hefty software packages, a web-based
              approach involves shipping a lightweight user interface while
              keeping the logic on the backend. This is one of the compelling
              reasons why major companies are transitioning their software to
              web-based platforms. Now the problem comes when you start making
              UI code heavy with more complex logic and heavy rendering and then
              ship it to production. Code splitting/caching won't solve this
              problem. Your single-threaded language is doing multiple tasks
              like fetching, data rendering, logic processing, etc. & it's all
              happening on the user’s machine. PHP solved this issue by
              pre-rendering most of the logic on the server and shipping it to
              the user’s machine, a good reason why it's one of the popular
              languages. However, it’s worth noting that PHP’s main strength
              lies in server-side processing and generating HTML content. For
              more interactive and dynamic browser behavior, JavaScript is
              commonly used in conjunction with PHP. JavaScript, being a
              client-side scripting language, can handle real-time browser
              events, manipulate the DOM, and provide a more interactive user
              experience. A very good reason why react, angular, or other JS
              libraries/frameworks are popping up. Written in javascript we can
              design more interactive forms/website/application which makes
              users more pleasing 😉.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogContents;
