import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  // for errors that are not 404, lost connection, loader errors...

  const error = useRouteError()

  return (
    <main className='flex flex-col min-h-screen place-items-center px-8'>
      <div className='text-center'>
        <h1 className=' mt-4 capitalize text-3xl font-bold tracking-tight sm:text-5xl'>
          There was a problem...
        </h1>
        <p className='mt-6 text-lg leading-7'>{error.message}</p>
      </div>
    </main>
  )
}

export default SinglePageError
