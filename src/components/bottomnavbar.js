import './bottomnavbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import facebook from './../assets/images/facebook.png'
import instagram from './../assets/images/instagram.png'

function Bottomnavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg='mycolor' variant="dark" fixed="bottom" >
          <Nav><Nav.Link id='socials'>⠀⠀Socials</Nav.Link></Nav>
    <Navbar.Brand id='social' href="https://www.facebook.com/catania.royal.3">
      <img id='fb' src={facebook} alt='logo'/>
      </Navbar.Brand>
      <Navbar.Brand href="https://www.instagram.com/catania_royal_guest_house/">
      <img id='inst' src={instagram} alt='logo'/>
      </Navbar.Brand>
      <Nav><Nav.Link id='fo1' >Powered By: Simone Gigantini</Nav.Link></Nav>
  </Navbar>
    );
  }
  
  export default Bottomnavbar;
  