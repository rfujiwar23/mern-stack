const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <div className='form-row'>
        <label htmlFor='name' className='form-label'>
            Name
        </label>
        <input 
            type="text" 
            value={values.name} 
            name="name" 
            onChange={handleChnge} 
            className='form-input'
        />
    </div>
  )
}
export default FormRow