import React from "react";
import { Link } from "react-router-dom";

const BlogCards = ({ blogs }) => {
  // const Cards = [
  //   {
  //     coverImage:
  //       "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=996&t=st=1694798260~exp=1694798860~hmac=746fb088543d070946dbb130d9e5ce79c9ea5808130126e1be88996756e7c4f4",
  //     date: "12 Jun 2019",
  //     title: "Bitters hashtag waistcoat fashion axe chia unicorn",
  //     desc:
  //       "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
  //   },
  //   {
  //     coverImage:
  //       "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?w=996&t=st=1694798586~exp=1694799186~hmac=e7b9dd76be2902f319eadf55f3f88c74b67a88d059fa48bd3e5fd9e4295ca5b7",
  //     date: "12 Jun 2019",
  //     title: "Bitters hashtag waistcoat fashion axe chia unicorn",
  //     desc:
  //       "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
  //   },
  //   {
  //     coverImage:
  //       "https://img.freepik.com/free-photo/person-holding-light-bulb-with-graduation-cap_23-2148721299.jpg?w=996&t=st=1694798670~exp=1694799270~hmac=4d19ddd39fa212cb447f49b12d7282bf8ff34e2eaa4f4427473e2e18487ee8bf",
  //     date: "12 Jun 2019",
  //     title: "Bitters hashtag waistcoat fashion axe chia unicorn",
  //     desc:
  //       "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
  //   },
  //   {
  //     coverImage:
  //       "https://img.freepik.com/free-photo/ocean-pollution-campaign-with-plastic-bags-used-bottles-floating_53876-104850.jpg?w=996&t=st=1694801852~exp=1694802452~hmac=8f0dee9e84a5a3c597f13baa936b528ddccda3343aaed6c9f80c4bd5b8519e16",
  //     date: "12 Jun 2019",
  //     title: "Bitters hashtag waistcoat fashion axe chia unicorn",
  //     desc:
  //       "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer."
  //   }
  // ];

  return (
    <div>
      {/* <ul>
        {blogs.data.map(e => {
          return (
            <li key={e.id}>
              <Link to={`/blog/${e.id}`}>
                <div className="border border-none rounded-md bg-zinc-100 shadow-md m-10 p-4 cursor-pointer">
                  <h1 className="text-lg font-bold">
                    {e.attributes.BlogTitle}
                  </h1>
                  <p className="text-zinc-400">
                    {e.attributes.BlogDesc}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul> */}
      <section className="text-gray-600 body-font overflow-hidden border-r-2 ml-16">
        <div className="container px-4 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <ul>
              {blogs.data.map((elem, index) => {
                return (
                  <li
                    className="py-8  hover:bg-gray-100 rounded-md"
                    key={index}
                  >
                    <Link
                      to={`BlogCardPages/${elem.id}`}
                      className="flex flex-wrap md:flex-nowrap"
                    >
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <img
                          className="w-56 mt-2"
                          src={`http://localhost:1337${elem.attributes
                            .BlogContentImg.data[0].attributes.url}`}
                          alt="..."
                        />
                        <span className="mt-1 text-gray-500 text-sm">
                          {elem.attributes.BlogDate}
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          {elem.attributes.BlogTitle}
                        </h2>
                        <p className="leading-relaxed">
                          {elem.attributes.BlogDesc}
                        </p>
                        <div className="text-blue-600 inline-flex items-center mt-4 cursor-pointer hover:underline">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="text-gray-600 body-font overflow-hidden border-r-2 ml-16">
        <div className="container px-4 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {Cards.map((elem, index) => {
              return (
                <div
                  className="py-8 flex flex-wrap md:flex-nowrap hover:bg-gray-100 rounded-md"
                  key={index}
                >
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <img className="w-56 mt-2" src={elem.coverImage} />

                    <span className="mt-1 text-gray-500 text-sm">
                      {elem.date}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {elem.title}
                    </h2>
                    <p className="leading-relaxed">
                      {elem.desc}
                    </p>
                    <Link
                      to={"/"}
                      className="text-blue-600 inline-flex items-center mt-4 cursor-pointer hover:underline"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BlogCards;
