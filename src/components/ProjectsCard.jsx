import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectsCard = ({ img, url, github, title, text }) => {
  return (
    <article className='bg-white flex flex-col  rounded-lg shadow-md hover:shadow-xl duration-300 relative'>
      <img
        src={img}
        alt={title}
        className='w-full object-content rounded-t-lg h-56'
      />

      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose mb-3'>{text}</p>
        <div className='flex gap-5 mt-3 absolute bottom-2'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectsCard
