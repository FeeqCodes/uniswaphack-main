import React from 'react'




const Buttons = ({text, color}) => {
  return (
  // <div className={`bg-[#291240] p-4 rounded-[15px] text-center text-${color}`}>
  //   {text}
  // </div>

  <button className="px-8 py-4 bg-gradient-to-r from-[#644881] to-[#291240] rounded-xl text-white font-semibold hover:opacity-90 transition-all">
              {text}
  </button>
  )
}

export default Buttons