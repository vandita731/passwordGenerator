import React from 'react'

function Card({name , btnText = "visit me"}) {
  console.log("props",name,btnText)
  return (
    <div className="relative block group  ">
        <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
        <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-6 ">
            <p className="mt-4 text-lg font-medium">{name || "user"} ipsum dolor</p>
            <p className="mt-1 text-xs">{btnText }</p>
          </div>
        </div>
      </div>
  )
}

export default Card