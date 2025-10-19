import React from 'react'
import project2 from '../assets/project2.png'
import project1 from '../assets/project1.png'


function Project() {
    return (
        <div>
            <div className="max-w-7xl  flex grid-cols-2 mx-auto  border-0.5 border-base-300   mb-10 ">
                <div className='flex-1 border-0.5 border-base-300 pb-5 rounded-lg shadow-lg '>
                    <h2 className='text-2xl text-center'>Certificates – Awards</h2>
                    <ul className='list-disc text-lg ml-5 space-y-5  my-10 justify-center items-center px-20 '>
                        <li>Basic Informatics Certificate (MOS)</li>
                        <li>Basic Web Programming Certificate</li>
                        <li>Successfully completed all subjects during the academic year.</li>
                    </ul>



                </div>
                <div className=' flex-1 ml-10 border-0.5 border-base-300 rounded-lg shadow-lg items-center'>
                    <h2 className='text-2xl text-center'>Projects</h2>
                    <div className='flex space-x-5 justify-center items-center p-5'>
                        <div className='space-y-2'>
                            <img className='w-40 h-40' src={project1} alt="" />
                            <p>Remarket Website</p>

                        </div>
                        <div className='space-y-2'>
                            <img className='w-40 h-40' src={project2} alt="" />
                            <p className='text-center'>Portfolio Website</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Project