/* eslint-disable react/prop-types */
import './index.css'
export const Button = ({label}) => {
  const buttonClicked = () => {
    alert(label)
  }
  return (
    <button className='btn' onClick={buttonClicked}>{label}</button>
  );
}
  export default Button
