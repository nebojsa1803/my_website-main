const SingleCard = ({ id, img, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice({ img, id })
    }
  }

  return (
    <div key={id} className='relative'>
      <div className={flipped ? 'flipped' : ''}>
        <svg className='images front bg-slate-100' width='90' height='90'>
          <image
            xlinkHref={img}
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

        <svg
          onClick={handleClick}
          alt='card-back'
          className='images back bg-slate-950'
          width='90'
          height='90'
        >
          <image
            xlinkHref='/assets/memory-images/cardCover.svg'
            src='yourfallback.png'
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
      </div>
    </div>
  )
}

export default SingleCard
