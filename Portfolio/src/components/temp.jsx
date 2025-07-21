import React, { forwardRef } from 'react'

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="justify-center ml-70 mr-180 mb-10">
          <h1 className="text-[#f7f197] font-extrabold text-[116px] ">
            about.
          </h1>
          <p className="text-[24px] leading-[44px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus corporis, dolorem ea laborum perspiciatis fuga! Ab sequi
            quos earum dolor nisi reprehenderit magnam animi eos necessitatibus
            ad est expedita repudiandae, voluptatum facilis quasi tempore
            obcaecati! Dolorum similique quam incidunt, illo nam possimus
            doloribus alias doloremque labore reiciendis sit eligendi corrupti! 
          </p>
        </div>
          <ul className="aboutlist flex flex-col mb-20">
            <li className="ml-160 mr-60 mt-15 ">
              <h3 className="text-[24px] leading-[44px] font-bold">2020 - 2022</h3>
              <p className="text-[24px] leading-[44px]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quaerat cum. Optio amet, magni expedita voluptas numquam ut quae rerum.</p>
            </li>

            <li className="ml-160 mr-60 mt-15 ">
              <h3 className="text-[24px] leading-[44px] font-bold">2020 - 2022</h3>
              <p className="text-[24px] leading-[44px]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quaerat cum. Optio amet, magni expedita voluptas numquam ut quae rerum.</p>
            </li>
          </ul>
    </div>
  )
})

export default About