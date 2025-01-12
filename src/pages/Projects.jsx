import { ProjectsCard, SectionTitle } from './../components'

const projects = [
  {
    id: '6',
    img: '/assets/projects-images/search.png',
    url: 'https://heroic-dieffenbachia-120021.netlify.app/',
    github: 'https://github.com/nebojsa1803/serach-github-users',
    title: 'Search Github Users',
    text: 'On this site it is enough to just type in the name of the github user to get user statistics',
  },
  {
    id: '5',
    img: '/assets/projects-images/currencies.png',
    url: 'https://currencies-with-favorite-list.netlify.app/',
    github: 'https://github.com/nebojsa1803/currencies',
    title: 'Crypto Currencies display',
    text: 'Web page use public Bitfinex WebSocket to receive and display crypto currency data.',
  },
  {
    id: '4',
    img: '/assets/projects-images/newTestAnalizator.png',
    url: 'https://testanalizator.netlify.app/',
    github: 'https://github.com/nebojsa1803/analizator-2',
    title: 'TestAnalizator',
    text: 'Here is new version of program with better routing, modals, component composition... Application helps teachers to analyze tests and have statistics of students achievements.',
  },
  {
    id: '3',
    img: '/assets/projects-images/tic-tac-toe.jpg',
    url: 'https://o-and-x.netlify.app/',
    github: 'https://github.com/nebojsa1803/tic-tac-toe',
    title: 'Tic Tac Toe',
    text: 'Tic Tac Toe written with React and Redux Toolkit',
  },
  {
    id: '2',
    img: '/assets/projects-images/movies-place.png',
    url: 'https://moviesplace.netlify.app/',
    github: 'https://github.com/nebojsa1803/movies_place',
    title: 'Movies Place',
    text: 'Here you can search for movies and see info about them.',
  },
  {
    id: '1',
    img: '/assets/projects-images/testAnalizatorImg.jpg',
    url: 'https://testanalizatorv1.netlify.app/',
    github: 'https://github.com/nebojsa1803/test_analizator',
    title: 'TestAnalizator (old version)',
    text: 'TestAnalizator is a web application for teachers helping them to analyze tests and keep track see statistics of their students achievements.',
  },
]

const Projects = () => {
  return (
    <div>
      <SectionTitle text='My Work' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
