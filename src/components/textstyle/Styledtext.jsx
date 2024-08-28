/* eslint-disable react/prop-types */
import './Styledtext.css'
export const StyledText = ({textColor, textUppercase}) => {
  return (
    <>
      <h2>Quest - devQuest</h2>
      <p style={{color: textColor, textTransform: textUppercase}}>Este é um parágrafo</p>
    </>
  )
}

export default StyledText