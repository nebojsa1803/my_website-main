const FormInput = ({ label, name, type }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input type={type} className='input input-bordered' name={name} />
    </div>
  )
}

export default FormInput
