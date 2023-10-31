import { useNavigation } from 'react-router-dom'

const SubmitButton = ({ text, handleForm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <button
      className='btn btn-primary mt-3 btn-block'
      disabled={isSubmitting}
      type='submit'
    >
      {isSubmitting ? (
        <div>
          <span className='loading loading-spinner'></span>
          Sending...
        </div>
      ) : (
        text || 'Submit'
      )}
    </button>
  )
}

export default SubmitButton
