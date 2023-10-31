import { SectionTitle } from '../components'
const About = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 items-center gap-16'>
        <svg>
          <image
            xlinkHref='/assets/about.svg'
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
            }}
          />
        </svg>

        <article className='flex flex-col gap-5'>
          <SectionTitle text='Profile' />
          <p className='text-slate-600  leading-loose'>
            Experienced mathematics teacher with a desire to work in the
            information technology and services industry. Skilled in ReactJS,
            JavaScript (programming language) and mathematics. Energetic,
            optimistic, well organized and hardworking person. Interested in
            personal development, passionate about music, movies and books.
          </p>
          <SectionTitle text='Education' />
          <p className='text-slate-600  leading-loose'>
            Faculty of Mathematics, University of Belgrade
          </p>
          <SectionTitle text='Tools and technologies' />
          <p className='text-slate-600  leading-loose'>
            ReactJS, JavaScript, React Router, Axios, React Query, Redux
            Toolkit,TypeScript, HTML5, CSS3, Tailwind, Daisy UI, MUI
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
