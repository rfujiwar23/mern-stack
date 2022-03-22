import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
   <main>
      <nav>
        <img src={logo} alt="yes" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>Track My Activity</h1>
          <p>I'm baby godard actually four dollar toast stumptown, normcore pitchfork coloring book offal gluten-free. Unicorn skateboard next level food truck flexitarian kitsch distillery kickstarter iPhone.</p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt="activity tracker" className='img-main-img'/>
      </div>
   </main>
  )
}
export default Landing