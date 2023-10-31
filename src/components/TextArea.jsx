const TextArea = ({ label, name }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <textarea
        name={name}
        className='textarea textarea-bordered h-24'
      ></textarea>
    </div>
  )
}

export default TextArea
