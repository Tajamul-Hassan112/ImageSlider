
// import React, { useEffect, useState } from "react";
// import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

// function ImageSlider({ url, limit, page }) {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loading, setLoading] = useState(false);

//   async function fetchImages() {
//     try {
//       setLoading(true);
//       const res = await fetch(`${url}?page=${page}&limit=${limit}`);
//       const data = await res.json();
//  console.log(data)
//       if (data) {
//         setImages(data);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log("Unable to fetch the data", error);
//       setLoading(false);
//     }
    
//   }
 

//   useEffect(() => {
//     if (url !== "") {
//       fetchImages();
//     }
//   }, [url]);

//   function handleLeftArrow() {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? images.length - 1 : prevSlide - 1
//     );
//   }

//   function handleRightArrow() {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === images.length - 1 ? 0 : prevSlide + 1
//     );
//   }

//   function handleDotClick(index) {
//     setCurrentSlide(index);
//   }

//   if (loading) {
//     return <div className="text-center mt-8">Loading data... Please wait</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 to-red-600 flex items-center justify-center">
//       <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg">
//         <div className="relative w-full h-80 overflow-hidden rounded-lg">
//           {images.length > 0 && (
//             <img
//               className="w-full h-full object-cover transition-transform duration-500 transform-gpu rounded-lg"
//               alt={`Image ${currentSlide + 1}`}
//               src={images[currentSlide].download_url}
//             />
//           )}

//           <div className="absolute top-1/2 z-10 p-4 text-white cursor-pointer hover:text-gray-300 left-0 transform -translate-y-1/2">
//             <BiSolidLeftArrow onClick={handleLeftArrow} className="h-8 w-8" />
//           </div>

//           <div className="absolute top-1/2 z-10 p-4 text-white cursor-pointer hover:text-gray-300 right-0 transform -translate-y-1/2">
//             <BiSolidRightArrow onClick={handleRightArrow} className="h-8 w-8" />
//           </div>
//         </div>

//         <div className="flex justify-center mt-4">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
//                 currentSlide === index ? "bg-blue-500" : "bg-gray-300"
//               }`}
//               onClick={() => handleDotClick(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;
import React, { useEffect, useState } from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();
      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Unable to fetch the data", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages();
    }
  }, [url]);

  function handleLeftArrow() {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  }

  function handleRightArrow() {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }

  function handleDotClick(index) {
    setCurrentSlide(index);
  }

  if (loading) {
    return <div className="text-center mt-8">Loading data... Please wait</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-red-600 flex items-center justify-center">
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          {images.length > 0 && (
            <img
              className="w-full h-full object-cover transition-transform duration-500 transform-gpu rounded-lg"
              alt={`Image ${currentSlide + 1}`}
              src={images[currentSlide].download_url}
            />
          )}

          <div className="absolute top-1/2 z-10 p-4 text-white cursor-pointer hover:text-gray-300 left-0 transform -translate-y-1/2">
            <BiSolidLeftArrow
              onClick={handleLeftArrow}
              className="h-8 w-8"
            />
          </div>

          <div className="absolute top-1/2 z-10 p-4 text-white cursor-pointer hover:text-gray-300 right-0 transform -translate-y-1/2">
            <BiSolidRightArrow
              onClick={handleRightArrow}
              className="h-8 w-8"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
