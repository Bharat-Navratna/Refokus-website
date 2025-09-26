import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden invert'>
      {imagesurls.map((url, index) => <img key={index} src={url} className='w-[10vw] flex-shrink-0' />)}
      {imagesurls.map((url, index) => <img key={index} src={url} className='flex-shrink-0' />)}
    </div>
  )
}

export default Marquee
