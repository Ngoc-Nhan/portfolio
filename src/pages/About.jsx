import React from 'react';
import eat from '../assets/eat.jpg';
import music from '../assets/music.jpg';
import dulich from '../assets/dulich.jpg';
import { User, Calendar, MapPin, Mail } from 'lucide-react';

function About() {
    return (
        <div className="px-4">
            {/* Thông tin cá nhân */}
            <div className="max-w-7xl mx-auto p-6 border border-base-300 rounded-2xl shadow-lg mt-10 mb-6">
                <h2 className="text-2xl font-semibold mb-3">Personal Information</h2>
                <ul className="text-lg space-y-2">
                    <li className="flex items-center gap-2"><User /> Full Name: Vo Thi Ngoc Nhan</li>
                    <li className="flex items-center gap-2"><Calendar /> Date of Birth: 02/08/2005</li>
                    <li className="flex items-center gap-2"><MapPin /> Address: Thu Duc City</li>
                    <li className="flex items-center gap-2"><Mail /> Email: ngocnhan282005@gmail.com</li>
                </ul>
            </div>

            {/* Mục tiêu nghề nghiệp */}
            <div className="max-w-7xl mx-auto p-6 border border-base-300 rounded-2xl shadow-lg mb-6">
                <h2 className="text-2xl font-semibold mb-3">Career Objective</h2>
                <p className="text-lg">
                    To become a professional Front-End Developer, capable of designing and building modern, creative, and user-friendly interfaces.
                    I aim to continuously improve my skills in web technologies,
                    contribute to creating high-quality and visually appealing websites, and collaborate effectively within a
                    dynamic development team to deliver innovative digital experiences.
                </p>
            </div>

            {/* Sở thích & Kỹ năng */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Hobby */}
                <div className="border border-base-300 rounded-2xl shadow-lg text-center p-6">
                    <h2 className="text-2xl font-semibold mb-4">My Hobby</h2>
                    <p className="text-base sm:text-lg text-center mb-6 px-2 sm:px-8 leading-relaxed">
                        I enjoy exploring new cuisines, listening to music, and traveling to discover
                        different cultures and beautiful places. My curiosity also inspires me to keep
                        learning and exploring new things every day.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 place-items-center">
                        <img
                            src={eat}
                            alt="Eating"
                            className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-xl shadow-md"
                        />
                        <img
                            src={music}
                            alt="Music"
                            className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-xl shadow-md"
                        />
                        <img
                            src={dulich}
                            alt="Traveling"
                            className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>



                {/* Skills */}
                <div className="border border-base-300 rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
                    <ul className="list-disc text-lg space-y-2 ml-8">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
