import React , {forwardRef} from 'react'

const About = forwardRef((props,ref) => {
  return (
    <div ref={ref} >
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
              <h3 className="text-[22px] leading-[34px] font-bold">2022 - 2025</h3>
              <p className="text-[22px] leading-[34px]"> Bachelor's of Science in Information Technology - <b>B.Sc.(I.T.)</b>
                <br /> K.P.B. Hinduja College of Commerce and Arts , Mumbai
                <br />CGPA : <b>8.65</b>
                </p>
            </li>

            <li className="ml-160 mr-60 mt-15 ">
              <h3 className="text-[22px] leading-[34px] font-bold">2020 - 2022</h3>
              <p className="text-[22px] leading-[34px]"> 
                Higher Secondary Certificate - <b>H.S.C.</b>
                <br />  K.P.B. Hinduja College of Commerce and Arts , Mumbai
                <br />Percentage : <b>72.17%</b>
              </p>
            </li>

            <li className="ml-160 mr-60 mt-15 ">
              <h3 className="text-[22px] leading-[34px] font-bold">2019 - 2020</h3>
              <p className="text-[22px] leading-[34px]"> 
                Secondary School Certificate - <b>S.S.C.</b>
                <br />  St. Teresa's High School , Mumbai
                <br />Percentage : <b>86.4%</b>
              </p>
            </li>
          </ul>
    </div>
  )
})

export default About
