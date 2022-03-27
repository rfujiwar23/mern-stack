import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className="full-Page">
    <div>
        <img src={img} alt='not found'/>
        <p>Not found!</p>
        <Link to='/'>Go Back</Link>
    </div>
    </Wrapper>
  )
}
export default Error