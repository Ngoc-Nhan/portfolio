import React from 'react'
import eat from '../assets/eat.jpg'
import music from '../assets/music.jpg'
import dulich from '../assets/dulich.jpg'
import { User } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';

function About() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-10 border-0.5 border-base-300 rounded-lg shadow-lg mt-10 mb-5">
                <h2 className="text-2xl">Personal Infomation</h2>
                <ul className="text-xl ml-5 ">
                    <li className='flex gap-2'><User />Full Name : Vo Thi Ngoc Nhan</li>
                    <li className='flex gap-2'><Calendar />Date of Birth: 02/08/2005</li>
                    <li className='flex gap-2' ><MapPin />Address: Thu Duc City</li>

                    <li className='flex gap-2'> <Mail />Email: ngocnhan282005@gmail.com</li>
                </ul>



            </div>
            <div className="max-w-7xl mx-auto p-10 border-0.5 border-base-300 rounded-lg shadow-lg mt-10 mb-5">
                <h2 className="text-2xl">Career Objective</h2>
                <p className="text-lg ml-5 ">To become a professional Front–End developer, able to design and
                    build user-friendly, modern and creative interfaces.</p>
            </div>
            <div className="max-w-7xl  flex grid-cols-2 mx-auto py-12 border-0.5 border-base-300   mb-10 ">
                <div className='flex-1 border-0.5 border-base-300 rounded-lg shadow-lg text-center'>
                    <h2 className='text-2xl mb-2 '>My Hobby</h2>
                    <div className='flex space-x-5 flex-wrap justify-center items-center p-5'>
                        <img className='w-30 h-30' src={eat} alt="" />
                        <img className='w-30 h-30' src={music} alt="" />
                        <img className='w-30 h-30' src={dulich} alt="" />
                    </div>


                </div>
                <div className=' flex-1 ml-10 border-0.5 border-base-300 rounded-lg shadow-lg p-5 items-center'>
                    <h2 className='text-2xl text-center'>Skills</h2>
                    <ul className='list-disc text-lg ml-5 justify-center items-center px-20'>
                        <li>HTML </li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About