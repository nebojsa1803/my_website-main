import { Link } from 'react-router-dom'
import MemoryGame from '../components/MemoryGame'

const Landing = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200 '>
        <div className='hero-content flex gap-10 flex-col  md:flex-row'>
          <div>
            <h1 className='text-5xl font-bold'>Nebojša Nikolić</h1>
            <p className='py-6'>Software Developer/Mathematician</p>
            <Link to='/projects' className='btn btn-primary'>
              Go To Projects
            </Link>
          </div>
          <div className='max-w-md'>
            <MemoryGame />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
