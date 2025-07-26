import React, { forwardRef } from 'react'

const Contact = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='pl-5 pr-5 md:pl-0 md:pr-0' >
      <div className="justify-center md:ml-60 md:mr-60 mb-10">
        <h1 className="text-[#f7f197] font-extrabold md:text-[116px] select-none">
          Contact.
        </h1>
        <div className="flex">

          <p className="md:text-[24px] md:leading-[44px]">
            Feel free to reach out for collaboration, project inquiries, or just to connect! I am always open to discussing new opportunities in web development and cloud technologies. <br /><br />You can contact me directly via email, and I’ll get back to you as soon as possible.
            <br />
            Email: <a href="mailto:moksh.pandit729@gmail.com" className='text-blue-700 underline'>moksh.pandit729@gmail.com</a><br />
            Linkedin: <a href="https://www.linkedin.com/in/moksha-pandit/" className='text-blue-700 underline'>https://www.linkedin.com/in/moksha-pandit/</a>
            
          </p>
          
        </div>
      </div>
    </div>
  );
})

export default Contact
