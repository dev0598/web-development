"use client";

import { brandsList } from "@/lib/constants";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="container py-16">
      <h2 className="text-4xl md:text-7xl lg:text-8xl mb-24 text-left">
        Supported By
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-x-10 gap-y-16">
        {brandsList.map((brand) => (
          <div
            key={brand.id}
            className="flex justify-center items-center h-full transition-transform duration-300 ease-in-out transform hover:scale-105 shine-hover"
          >
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="object-contain max-w-[250px] max-h-[80px] w-full h-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;













// "use client";

// import Marquee from "react-fast-marquee";
// import { brandsList } from "@/lib/constants";
// import Image from "next/image";

// const Brands = () => {
//   return (
//     <section className="container overflow-hidden">
//       <h2 className="text-4xl md:text-7xl lg:text-8xl">Our Recognitions</h2>
//       <Marquee pauseOnClick={true} pauseOnHover={true}>
//         <div className="flex items-center h-full mt-10 md:mt-16 lg:mt-20 overflow-hidden">
//           {brandsList.map((brand) => (
//             <div
//               key={brand.id}
//               className="mx-10 transform transition-transform duration-300 ease-in-out hover:scale-[1.02] shine-hover"
//             >
//               <a href={brand.link} target="_blank" rel="noopener noreferrer">
//                 <Image
//                   src={brand.src}
//                   alt={brand.alt}
//                   width={brand.width}
//                   height={brand.height}
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </Marquee>
//     </section>
//   );
// };

// export default Brands;
















// "use client";

// import Marquee from "react-fast-marquee";
// import { brandsList } from "@/lib/constants";
// import Image from "next/image";

// const Brands = () => {
//   return (
//     <section className="container">
//       <h2 className="text-4xl md:text-7xl lg:text-8xl">Our Recognitions</h2>
//       <Marquee pauseOnHover={true}>
//         <div className="flex items-center h-full mt-10 md:mt-16 lg:mt-20 overflow-hidden">
//           {brandsList.slice(0, 7).map((brand) => (
//             <div
//               key={brand.id}
//               className="mx-10 transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
//             >
//               <a href={brand.link} target="_blank" rel="noopener noreferrer">
//                 <Image
//                   src={brand.src}
//                   alt={brand.alt}
//                   width={brand.width}
//                   height={brand.height}
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </Marquee>
//     </section>
//   );
// };

// export default Brands;





























// import Marquee from "react-fast-marquee";
// import { brandsList } from "@/lib/constants";
// import Image from "next/image";

// const Brands = () => {
//   return (
//     <section className={"container"}>
//       <h2 className="text-4xl md:text-7xl lg:text-8xl">Our Recognitions</h2>
//       <Marquee pauseOnClick={true} pauseOnHover={true}>
//         <div className="flex items-center h-full mt-10 md:mt-16 lg:mt-20">
//           {brandsList.slice(0, 7).map((brand) => (
//             <div className="mx-10" key={brand.id}>
//               <a href={brand.link} target="_blank" rel="noopener noreferrer">
//                 <Image
//                   src={brand.src}
//                   alt={brand.alt}
//                   width={brand.width}
//                   height={brand.height}
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </Marquee>
//     </section>
//   );
// };

// export default Brands;
