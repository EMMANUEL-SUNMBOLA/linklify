import React from 'react'

export default function Link({icon, platform}) {
  return (
    <div className="w-full flex  p-3 gap-3">
      <div className="w-[10%] bg-amber-600 test">{icon}</div>
      <div className="w-[80%] text-3xl text-center text-capitalize"> {platform} </div>
    </div>
  )
}
