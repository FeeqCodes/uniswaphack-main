import React from "react";

const CardLayout = ({
  children,
  width = "300px",
  height = "200px",
  bg ,
  border
  
}) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-4  relative m-auto`}
      style={{
        width: width,
        height: height,
        backgroundColor: bg,
        border: border,
        
      }}
    >
      {children}
    </div>
  );
};

export default CardLayout;




// <Image
//         objectFit="cover"
//         unoptimized={true}
//         // layout="responsive"
//         quality={100}
//         width={100}
//         height={100}
//         src="/annie-spratt-2rMn97DPTdU-unsplash.jpg"
//         alt="image"
//         className="w-full h-[150px] object-top object-cover rounded-[15px]"
//       />


// w-full rounded-[15px]   bg-opacity-45 border border-gray-200 cursor-pointer shadow-sm shadow-black bg-gradient-to-br from-[#5a94e0] via-[#1853a0] to-[#0d2e59] text-[#c8cbcf]