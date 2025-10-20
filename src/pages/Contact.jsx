import React from 'react'
import { PhoneCall, Mail, Github, Facebook } from 'lucide-react';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto p-10 border border-base-300 rounded-lg shadow-lg mt-10 mb-5">
      <h2 className='text-2xl font-bold'>Contact Me!</h2>

      {/* Grid 2 cột */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
        {/* Cột 1 */}
        <div>
          <p className='flex items-center gap-2 text-lg'>
            <PhoneCall /> Phone: 0855830959
          </p>
          <p className='flex items-center gap-2 text-lg mt-5'>
            <Mail /> Mail: ngocnhan282005@gmail.com
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <p className='flex items-center gap-2 text-lg'>
            <Github /> <a href="https://github.com/Ngoc-Nhan" >Github: Ngoc-Nhan</a>
          </p>
          <p className='flex items-center gap-2 text-lg mt-5'>
            <Facebook /> <a href="https://www.facebook.com/ngocnhan.vt.1?locale=vi_VN" >FB: Ngọc Nhàn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
