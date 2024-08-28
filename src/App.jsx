import './App.css'
import Button from './components/button/Button'
import StyledText from './components/textstyle/Styledtext'

function App() {
  
  return (
    <>
     <StyledText textColor='red' textUppercase='uppercase' />
     <Button label='Baixar CV'/>
    </>
  )
}

export default App
