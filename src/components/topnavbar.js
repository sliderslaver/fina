import './topnavbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import logo from './../assets/images/4.png'

function Topnavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg='mycolor' variant="dark" fixed="top" >
          <Nav><Nav.Link  id='invisibile'>____</Nav.Link></Nav>
    <Navbar.Brand href="/">
      <img src={logo} alt='logo'/>
      <em><text id='fonta'>CataniaRoyal⠀</text></em>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link  id='invisibile'>___________________________________________________________________________________________________</Nav.Link>
        <Nav.Link id='font' href="/">Home</Nav.Link>
        <NavDropdown  title="Camere" id="collasible-nav-dropdown">
          <NavDropdown.Item id='font' href="https://www.booking.com/hotel/it/relax-amp-sleep.it.html?label=gen173nr-1DCAEoggI46AdIM1gEaHGIAQGYARS4ARjIAQzYAQPoAQGIAgGoAgS4Aszq3IUGwAIB0gIkYzEwYTc3ZjktYzk5NS00NmQ1LTk0NDgtOTc5MjEzNzQ0MDFk2AIE4AIB&sid=7a3d698f0aa6e9c582f2bf87c8f79bfb&all_sr_blocks=391486602_122461509_2_0_0&checkin=2021-06-10&checkout=2021-06-11&dest_id=-114787&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=391486602_122461509_2_0_0&hpos=1&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=391486602_122461509_2_0_0__3200&srepoch=1622619497&srpvid=b4ed35b4119b00c9&type=total&ucfs=1&activeTab=photosGallery">Singole</NavDropdown.Item>
          <NavDropdown.Item id='font' href="https://www.booking.com/hotel/it/relax-amp-sleep.it.html?label=gen173nr-1DCAEoggI46AdIM1gEaHGIAQGYARS4ARjIAQzYAQPoAQGIAgGoAgS4Aszq3IUGwAIB0gIkYzEwYTc3ZjktYzk5NS00NmQ1LTk0NDgtOTc5MjEzNzQ0MDFk2AIE4AIB&sid=7a3d698f0aa6e9c582f2bf87c8f79bfb&all_sr_blocks=391486602_122461509_2_0_0&checkin=2021-06-10&checkout=2021-06-11&dest_id=-114787&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=391486602_122461509_2_0_0&hpos=1&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=391486602_122461509_2_0_0__3200&srepoch=1622619497&srpvid=b4ed35b4119b00c9&type=total&ucfs=1&activeTab=photosGallery">Matrimoniali</NavDropdown.Item>
          <NavDropdown.Item id='font' href="https://www.booking.com/hotel/it/relax-amp-sleep.it.html?label=gen173nr-1DCAEoggI46AdIM1gEaHGIAQGYARS4ARjIAQzYAQPoAQGIAgGoAgS4Aszq3IUGwAIB0gIkYzEwYTc3ZjktYzk5NS00NmQ1LTk0NDgtOTc5MjEzNzQ0MDFk2AIE4AIB&sid=7a3d698f0aa6e9c582f2bf87c8f79bfb&all_sr_blocks=391486602_122461509_2_0_0&checkin=2021-06-10&checkout=2021-06-11&dest_id=-114787&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=391486602_122461509_2_0_0&hpos=1&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=391486602_122461509_2_0_0__3200&srepoch=1622619497&srpvid=b4ed35b4119b00c9&type=total&ucfs=1&activeTab=photosGallery">triple</NavDropdown.Item>
          <NavDropdown.Item id='font' href="https://www.booking.com/hotel/it/relax-amp-sleep.it.html?label=gen173nr-1DCAEoggI46AdIM1gEaHGIAQGYARS4ARjIAQzYAQPoAQGIAgGoAgS4Aszq3IUGwAIB0gIkYzEwYTc3ZjktYzk5NS00NmQ1LTk0NDgtOTc5MjEzNzQ0MDFk2AIE4AIB&sid=7a3d698f0aa6e9c582f2bf87c8f79bfb&all_sr_blocks=391486602_122461509_2_0_0&checkin=2021-06-10&checkout=2021-06-11&dest_id=-114787&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=391486602_122461509_2_0_0&hpos=1&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=391486602_122461509_2_0_0__3200&srepoch=1622619497&srpvid=b4ed35b4119b00c9&type=total&ucfs=1&activeTab=photosGallery">quadruple</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link id='font'  href="chisiamo">Chi siamo</Nav.Link>
        <Nav.Link id='font' href="contatti">Contattaci</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
  
  export default Topnavbar;
  