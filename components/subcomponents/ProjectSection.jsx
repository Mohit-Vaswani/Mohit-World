import React from 'react'
import Image from 'next/image'
import { projectData } from '@data/constant'

const ProjectSection = () => {
  return (
    <div className="blog-section mb-20">
            <h2 className='my-10 text-2xl sm:text-4xl text-center'>Professional Projects</h2>
            <div className="blog-cards grid grid-cols-1 2xl:grid-cols-2 gap-4">
                {projectData.map((project, index) => (
                    <div className="flex flex-col lg:flex-row bg-white relative rounded-md text-black" key={index}>
                        <div className='p-6 pb-10 flex flex-col'>
                        <h3 className='text-2xl font-semibold'>{project.title}</h3>
                        <p className='mt-3'>{project.description}</p>
                        <p className='absolute bottom-0 mb-2'>{project.year}</p>
                        </div>
                        <Image src={project.image} alt='thumbnail' width={250} height={250} className='self-center p-4' />
                    </div>
                ))}
            </div>
        </div>
  )
}

export default ProjectSection