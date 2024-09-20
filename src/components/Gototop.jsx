import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Gototop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={scrollUp}>
      {backToTop && (
        <button className="items-center justify-center text-4xl fixed bottom-6 right-6 bg-SecondaryColor p-2 rounded-lg">
          <FaArrowUpLong size={30} color="white"/>
        </button>
      )}
     
    </div>
  );
}

export default Gototop;
