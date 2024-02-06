import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About";
import "./App.css";
import Discord from "./discord";
import Home from "./home";
import "./index.css";
function App() {
  const home = gsap.timeline();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const path = document.querySelectorAll(".path");

    const tl = gsap.timeline();

    path.forEach((element) => {
      gsap.set(element, { strokeDasharray: 100 });
      tl.fromTo(
        element,
        {
          strokeDashoffset: 100,
        },
        {
          backgroundColor: "red",
          strokeDashoffset: 1,
          duration: 1.4,
          stagger: 0.2,
          ease: "sine.in",
          scrollTrigger: {
            trigger: element,
            scrub: true,
            start: "top center",
            end: "bottom 30%",
            markers: true,
            toggleActions: "play restart ",
          },
        }
      );
    });
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="min-h-screen  bg-red-700"></div>
          <div className="min-h-screen flex justify-center items-center bg-white">
            <svg
              className="h-96 w-96"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  className="path"
                  d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z"
                  stroke="#1C274C"
                  strokeWidth="0.4"
                ></path>{" "}
                <path
                  className="path"
                  d="M6 11.6825C9.31371 8.10583 14.6863 8.10583 18 11.6825M8.00002 13.841C10.2092 11.4566 13.7909 11.4566 16 13.841M10 16C11.1046 14.8078 12.8955 14.8078 14 16"
                  stroke="#1C274C"
                  strokeWidth="0.4"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="min-h-screen bg-red-400"></div>
        </>
      ),
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/discord",
      element: <Discord />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
