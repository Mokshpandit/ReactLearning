import React , {forwardRef} from 'react'

const About = forwardRef((props,ref) => {
  return (
    <div ref={ref} >
      <div className="justify-center md:ml-70 md:mr-100 mb-3 pt-7">
          <h1 className="text-[#f7f197] font-extrabold md:text-[116px] select-none">
            about.
          </h1>
          <p className="md:text-[24px] md:leading-[40px]">
            A motivated and detail-oriented IT graduate with hands-on experience in web development using HTML, CSS, and JavaScript. Strong understanding of Windows operating systems, system setup, and cloud platforms like AWS. Currently building projects that integrate modern frontend technologies with cloud deployment tools. Eager to contribute to innovative teams as a web developer or cloud support engineer.
          </p>
        </div>
          <ul className="aboutlist flex flex-col mb-20 md:ml-200 md:mr-40">
            <li className="mt-10 ">
              <h3 className="text-[22px] leading-[34px] font-bold">2022 - 2025</h3>
              <p className="text-[22px] leading-[34px]"> <u>Bachelor's of Science in Information Technology - <b>B.Sc.(I.T.)</b></u>
                <br /> K.P.B. Hinduja College of Commerce and Arts, Mumbai
                <br />CGPA : <b>8.65</b>
                </p>
            </li>

            <li className="mt-10 ">
              <h3 className="text-[22px] leading-[34px] font-bold">2020 - 2022</h3>
              <p className="text-[22px] leading-[34px]"> 
                <u>Higher Secondary Certificate - <b>H.S.C.</b></u>
                <br />  K.P.B. Hinduja College of Commerce and Arts, Mumbai
                <br />Percentage : <b>72.17%</b>
              </p>
            </li>

            <li className=" mt-10 ">
              <h3 className="text-[22px] leading-[34px] font-bold">2019 - 2020</h3>
              <p className="text-[22px] leading-[34px]"> 
                <u>Secondary School Certificate - <b>S.S.C.</b></u>
                <br />  St. Teresa's High School, Mumbai
                <br />Percentage : <b>86.4%</b>
              </p>
            </li>
          </ul>
    </div>
  )
})

export default About
