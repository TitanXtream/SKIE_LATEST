import { SecLayout } from '@components/index'
import React from 'react'

const arr = [1, 2, 3, 4, 5, 6]
const ShowcaseSection = () => {
  return (
    // <section className="w-full px-[4em] flex flex-col gap-[4em] py-[4em]">
    //   <h1 className="text-center font-bold text-[4em]">Our Successes</h1>
    //   <div className="grid grid-cols-2 auto-rows-auto gap-[0.5em]">
    //     {arr.map((el, i) => (
    //       <div className="w-full aspect-[3/2] bg-cyan-400 rounded-[10px] flex items-center justify-center">
    //         {el}
    //       </div>
    //     ))}
    //   </div>
    //   <div className=""></div>
    // </section>
    <SecLayout label="Our Successes">
      <div className="grid grid-cols-2 auto-rows-auto gap-[0.5em]">
        {arr.map((el, i) => (
          <div className="w-full aspect-[3/2] bg-cyan-400 rounded-[10px] flex items-center justify-center">
            {el}
          </div>
        ))}
      </div>
    </SecLayout>
  )
}

export default ShowcaseSection
