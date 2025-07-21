import React, { forwardRef } from 'react'

const Contact = forwardRef((props,ref) => {
  return (
    <div ref={ref} >
      <div className="justify-center md:ml-70 md:mr-80 mb-10">
        <h1 className="text-[#f7f197] font-extrabold md:text-[116px] select-none">
          contact.
        </h1>
        <div className="flex">

          <p className="md:text-[24px] md:leading-[44px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus corporis, dolorem ea laborum perspiciatis fuga! Ab sequi
            quos earum dolor nisi reprehenderit magnam animi eos necessitatibus
            ad est expedita repudiandae, voluptatum facilis quasi tempore
            obcaecati! Dolorum similique quam incidunt, illo nam possimus
            doloribus alias doloremque labore reiciendis sit eligendi corrupti!
            <br />
            <a href="mailto:moksh.pandit729@gmail.com" className='text-blue-700 underline'>Email: moksh.pandit729@gmail.com</a>
            
          </p>
          
        </div>
      </div>
    </div>
  );
})

export default Contact
