export default function FormRow({
  type,
  name,
  value,
  handleChange,
  labelText,
}) {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
}
