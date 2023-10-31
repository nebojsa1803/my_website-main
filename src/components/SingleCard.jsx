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
            src='yourfallback.png'
            width='90'
            height='90'
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
            width='90'
            height='90'
          />
        </svg>
      </div>
    </div>
  )
}

export default SingleCard
