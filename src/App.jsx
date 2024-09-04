import './App.css'
import Button from './components/AlertButton/index'
import StyledText from './components/textstyle/index'

function App() {
  
  return (
    <>
     <StyledText textColor='red' textUppercase='uppercase' />
     <Button label='Baixar CV'/>
    </>
  )
}

export default App
