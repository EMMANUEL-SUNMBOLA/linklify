import React from 'react'

export default function Link({icon, platform}) {
  return (
    <div className="w-full flex p-2 gap-1">
      <div className="w-[5%] bg-amber-600">{icon}</div>
      <div className="w-[] text-xl font-extralight text-center text-capitalize"> {platform} </div>
    </div>
  )
}
