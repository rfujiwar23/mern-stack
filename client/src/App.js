import Landing from './pages/Landing'
import styled from 'styled-components'

const Button = styled.button`
  background: blue;
  color: #fff;
  font-size:1rem;
`

const ButtonSecond = styled.button`
  background: red;
  color: #fff;
  font-size:1rem;
`

function App() {
  return (
    <div>
      <Button>Click Here</Button>
      <ButtonSecond>Click Here</ButtonSecond>
      <h1>Search</h1>
    <Landing/>  
    </div>
  );
}

export default App;
