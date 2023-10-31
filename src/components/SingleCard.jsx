import { cardCover } from '../assets/memory-images'

const SingleCard = ({ id, img, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice({ img, id })
    }
  }

  return (
    <div key={id} className='relative'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='images front bg-slate-100' src={img} alt='card-front' />
        <img
          className='images back bg-slate-950'
          src={cardCover}
          alt='card-back'
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default SingleCard
