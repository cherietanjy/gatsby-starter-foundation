/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>This site was made with <span className="icon -love"><RiHeart2Line/></span> by Yours Truly, Cherie Tan.</p>
    </div>
  </footer>
)

export default Footer