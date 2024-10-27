
import  './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
function Header(){
  return (
    <>
      <div className="container">
              <div className="imgcontainer">
                  <img src="https://cdn.dribbble.com/users/2102703/screenshots/13943094/untitled-6_4x.jpg" alt="" />
              </div>
              <div className="nav-section">
                <Link to='/' id='nav-links1'> <span><HomeIcon/></span> <span>Home</span></Link>
                <Link to="/about" id='nav-links2'> <span><InfoIcon/></span> <span>About</span></Link>
                <Link to="/offers" id='nav-links3'> <span><LocalOfferIcon/> </span><span>Offers</span></Link>
                <Link to="/sign-in" id='nav-links4'> <span><PersonIcon/></span> <span>Sign in</span></Link>
                <Link to="#" id='nav-links5'> <span><ShoppingCartIcon/></span> <span>Cart</span></Link>
                <Link to="#" id="hidden" className=" inline-block p-1"><MenuIcon id='icon-ham' /> {/* Adjust the size here */}</Link>

              
              </div>
      </div>
    </>
  )
}
export default Header;