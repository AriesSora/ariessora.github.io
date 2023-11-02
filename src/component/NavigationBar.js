import 'bootstrap/dist/css/bootstrap.css';
import { Link, Outlet } from "react-router-dom";
import Recycle from '../img/Recycle.png';
import Cart from '../img/Cart.png';
import MagnifyingGlass from '../img/MagnifyingGlass.png';
import Profile from '../img/Profile.png';
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";

function NavigationBar() {
    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
    const [isSustainabilityDropdownOpen, setSustainabilityDropdownOpen] = useState(false);
    const [isAboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProductDropdown = () => {
        setProductDropdownOpen(!isProductDropdownOpen);
    };

    const toggleSustainabilityDropdown = () => {
        setSustainabilityDropdownOpen(!isSustainabilityDropdownOpen);
    };

    const toggleAboutUsDropdown = () => {
        setAboutUsDropdownOpen(!isAboutUsDropdownOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <>
            <div className="row bg-light">
                <div className="col-6 text-start">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Dropdown show={isProductDropdownOpen} onToggle={toggleProductDropdown}>
                                        <Dropdown.Toggle variant="success" id="product-dropdown" style={{ backgroundColor: "transparent", color: "black", borderColor: "transparent" }}>
                                            Product
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Link to="/woman" className="dropdown-item">Woman</Link>
                                            <Link to="/man" className="dropdown-item">Man</Link>
                                            <Link to="/kids" className="dropdown-item">Kids</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <Link to="/discount" className="nav-link">Discount</Link>
                                </li>
                                <li className="nav-item">
                                    <Dropdown show={isSustainabilityDropdownOpen} onToggle={toggleSustainabilityDropdown}>
                                        <Dropdown.Toggle variant="success" id="sustainability-dropdown" style={{ backgroundColor: "transparent", color: "black", borderColor: "transparent" }}>
                                            Sustainability
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Link to="/recycling" className="dropdown-item">Recycling</Link>
                                            <Link to="/eco-day" className="dropdown-item">Eco-Day</Link>
                                            <Link to="/impact-report" className="dropdown-item">Impact Report</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <Dropdown show={isAboutUsDropdownOpen} onToggle={toggleAboutUsDropdown}>
                                        <Dropdown.Toggle variant="success" id="about-us-dropdown" style={{ backgroundColor: "transparent", color: "black", borderColor: "transparent" }}>
                                            About Us
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Link to="/story" className="dropdown-item">Our Story</Link>
                                            <Link to="/team" className="dropdown-item">Contact Us</Link>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-6 text-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={Recycle} alt="Recycle" style={{ width: "30px", height: "30px" }} className="m-4" />
                        </li>
                        <li className="nav-item">
                            <input type="text" className="m-3 d-inline-block" placeholder="Search product here..." />
                        </li>
                        <li className="nav-item">
                            <Dropdown show={isProfileDropdownOpen} onToggle={toggleProfileDropdown}>
                                <Dropdown.Toggle variant="success" id="profile-dropdown" style={{ backgroundColor: "transparent", color: "black", borderColor: "transparent" }}>
                                    <img src={Profile} alt="Profile" style={{ width: "30px", height: "30px" }} className="m-4" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Link to="/account" className="dropdown-item">Account</Link>
                                    <Link to="/wallet" className="dropdown-item">Wallet</Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <img src={Cart} alt="Cart" style={{ width: "30px", height: "30px" }} className="m-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <hr style={{ fontWeight: "bold" }} />

            <Outlet />
        </>
    );
}

export default NavigationBar;
