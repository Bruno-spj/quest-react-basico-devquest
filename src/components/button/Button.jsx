/* eslint-disable react/prop-types */
import './Button.css'
export const Button = ({label}) => {
  const buttonClicked = () => {
    alert(label)
  }
  return (
    <button className='btn' onClick={buttonClicked}>{label}</button>
  );
}
  export default Button
