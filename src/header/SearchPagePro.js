import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, FormInline, Navbar, NavbarBrand, Collapse, NavbarToggler, NavbarNav, NavItem, NavLink, Fa  } from 'mdbreact';

//import { Navbar, Button } from 'reactstrap';
import { Button } from 'reactstrap';
import './SearchPagePro.css';
import search from '../image/search_icon.jpeg'
import liveChat from '../image/live_chat.svg'
import shoppingCart from '../image/shopping-cart-xxl.png'



class SearchPagePro extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            collapsed: false
        };
        this.handleTogglerClick = this.handleTogglerClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }

    handleTogglerClick(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleNavbarClick(){
        this.setState({
            collapsed: false
        });
    }

    render() {
        return (
            <div>
                    <Navbar color="deep-purple" className="text-white darken-3" style={{ "background": "#3399ff", width: "1440px"}} dark expand="md">
                        <NavbarBrand style={{marginLeft: "250px"}}>
                        <a href="index.html" id="header-logo" title="EntirelyPets.com">
                        <img id="large-logo-img" alt="EntirelyPets.com" src="https://sep.yimg.com/ty/cdn/entirelypets/EntirelyPets-logo-flat.svg" class="large-logo-img"/>
                         </a>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.collapsed} navbar style={{ marginRight: "450px" }}>
                            <NavbarNav right onClick={this.handleNavbarClick}>
                                <FormInline className="md-form mr-auto m-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                        aria-label="Search" />
                                    
                                    <Button outline style={{ "color": "white", border: "none" }} size="sm" type="submit"
                                        className="mr-auto"><img src={search} style={{width: "35px", "background": "#3399ff"}} /></Button>
                                </FormInline>
                            </NavbarNav>
                        </Collapse>
                        <form style={{marginLeft: "50px" }}>
                             <img src={liveChat} style={{width: "35px"}} />
                             
                             <img src={shoppingCart} style={{width: "35px", "background": "#3399ff"}} />

                        </form>
                    </Navbar>
            </div>
        );
    }
}

export default SearchPagePro;