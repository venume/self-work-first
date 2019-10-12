import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import "./Header.css"

class Header extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
    this.toggles = this.toggles.bind(this);
    this.state = {
      dropdownOpens: false,
    };
    this.toggless = this.toggless.bind(this);
    this.state = {
      dropdownOpenss: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggles() {
    this.setState({
      dropdownOpens: !this.state.dropdownOpens
    });
  }
  toggless() {
    this.setState({
      dropdownOpenss: !this.state.dropdownOpenss
    });
  }

    render(){

    
    
    
            return (
      <div className='fixed'>
        <Nav pills className="contener">
          <Dropdown className='ss sd' nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret >
             <span className='ss'> website </span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>website</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem  className='sdd'  >
            <NavLink >eCommerenec</NavLink>
          </NavItem>
          <NavItem  className='sdd'>
            <NavLink >contecs/adds</NavLink>
          </NavItem>

          <NavItem  className='sdd' >
            <NavLink>Adsence</NavLink>
          </NavItem>
          <NavItem  className='sdd'>
            <NavLink >saas</NavLink>
          </NavItem>
          <Dropdown className='ss sdd' nav isOpen={this.state.dropdownOpens} toggle={this.toggles}>
            <DropdownToggle nav caret>
            <span className='ss '>apps</span> 
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown className='sdd' nav isOpen={this.state.dropdownOpenss} toggle={this.toggless}>
            <DropdownToggle nav caret>
           <span className='ss '>Domains</span> 
            </DropdownToggle>
            <DropdownMenu className='ss'>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <a href="#" className="link">registered as abyer .its fee!</a>
        </Nav>
        
       
      </div>
    );
  }
}

      
    

     
 

export default Header;