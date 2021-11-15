import Head from "next/head";
import About from "./about";
import Layout from "./src/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <title>Mark Mariscal</title>
      <link rel="icon" href="/favicon.ico" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="./imgs/code.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="./imgs/me.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Mark Mariscal
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    I am a proud member of the Society of Hispanic Professional
                    Engineers.I have lived in the Bay Area my entire life and
                    love all things technology and creating web applications.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  I am a software engineer with experience designing solutions
                  that enhance peoples' everyday lives. Drive solutions from
                  concept to prototype to implementation against aggressive
                  schedules. Innovate on solutions with customers. Clear
                  communications, passion for learning, results driven. Strive
                  for optimal user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Projects
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/index.png"
                  link
                  rel="icon"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    California State University, Monterey Bay Capstone
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://capstonecsumb.herokuapp.com/">
                      <a className="mr-5 hover:text-gray-900">Leewayz</a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Full stack web application to help with solving the Bay Area
                    housing crisis with allowing for rooms to be rented in a
                    safe and ethical manner.Created using Express Web Framework
                    Node.js, HTML, CSS, Docker and MYSQL.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/videogame.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 ">
                    Personal Project
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Video Game Trailer Application
                  </h1>
                  <p class="leading-relaxed">
                    Created a web application for users to watch their favorite
                    video game trailers. This application was created using
                    Next.js and GraphQL. Created Schemas and Mutations in
                    GraphQl.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/pet.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Freelance
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://pupperspetshop.netlify.app/">
                      <a className="mr-5 hover:text-gray-900">
                        Pet Application
                      </a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Created an E-commerce web application which allows for users
                    to create an account, select their item and purchase using
                    an external Stripe API. This application was created using
                    React, Redux, Stripe API and firebase.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/react.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Personal Project
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://hopeful-easley-c9bedc.netlify.app/">
                      <a className="mr-5 hover:text-gray-900">
                        Searchable Movie Application
                      </a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Created a web application for users to search for movies or
                    actors. The data is coming from an external API. The web
                    application allows for users to add a favorite actor or
                    movie and displays those favored actors and movie on its own
                    individual page. This application was created using React
                    and Sass.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/java.jpg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    California State University, Monterey Bay Project
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://www.youtube.com/watch?v=fkotPWnhjek">
                      <a className="mr-5 hover:text-gray-900">
                        Restaurant Ordering Service
                      </a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Service Oriented Architecture (SOA) design.Application was
                    created using the Java Spring Boot framework. The Web
                    application uses HTTP REST and Messaging (RabbitMQ). The
                    database used for this application was MySQl and frontend
                    was implemented using HTML and CSS.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/unp.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Contract Work
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Application Tool
                  </h1>
                  <p class="leading-relaxed">
                    Created a tool that allows for a user to choose data from a
                    backend database, modify the chosen data and pass that
                    modified data back to the backend database.Created tests for
                    the backend API call using python factory boy. Web
                    application was created using React and Material UI.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/moses.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Contract Work
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://mosesmgk.netlify.app/">
                      <a className="mr-5 hover:text-gray-900">
                        School Portfolio
                      </a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Created a responsive static website. Technologies: HTML5
                    CSS, and JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/justinem.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Contract Work
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://justinespapercraft.netlify.app/">
                      <a className="mr-5 hover:text-gray-900">
                        Product Display Website
                      </a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Created a responsive static website. Technologies: HTML5
                    CSS, and JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="./imgs/chris.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Contract Work
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    <Link href="https://chrispsite.netlify.app/">
                      <a className="mr-5 hover:text-gray-900">
                        Lifestyle Porfolio
                      </a>
                    </Link>
                  </h1>
                  <p class="leading-relaxed">
                    Created a responsive static website. Technologies: HTML and
                    CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
