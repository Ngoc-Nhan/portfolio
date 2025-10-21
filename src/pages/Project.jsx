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
                    <div className='flex flex-wrap gap-5 justify-center items-center p-5'>
                        {/* Project 1 */}
                        <div className='relative space-y-2'>
                            <img className='w-40 h-40 rounded-lg shadow-md object-cover' src={project1} alt="Remarket Website" />

                            {/* Tag Group Project */}
                            <span className='absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-md'>
                                Group Project
                            </span>

                            <p className='text-center font-medium'>Remarket Website</p>
                        </div>

                        {/* Project 2 */}
                        <div className='space-y-2'>
                            <img className='w-40 h-40 rounded-lg shadow-md object-cover' src={project2} alt="Portfolio Website" />
                            <p className='text-center font-medium'>Portfolio Website</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Project