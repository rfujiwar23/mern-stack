import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'

const Landing = () => {
  return (
   <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1><span>Track</span> My Activity</h1>
          <p>I'm baby godard actually four dollar toast stumptown, normcore pitchfork coloring book offal gluten-free. Unicorn skateboard next level food truck flexitarian kitsch distillery kickstarter iPhone.</p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt="activity tracker" className='main-img'/>
      </div>
   </Wrapper>
  )
}

// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display:flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display:grid;
//     align-items: center;
//     margin-top:-3rem;
//   }

//   h1 {
//     font-weight: 700;
//     span {
//       color:var(--primary-500);
//     }
//   }
//   p {
//     color:var(--grey-600);
//   }
//   .main-img {
//     display:none;
//   }
//   @media (min-width:992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `


export default Landing