import logo from './images/Logo.svg'
function Footer (){
    return(
        <footer className="footer" id="grid">
            <img src={logo} className="logo"></img>
            <nav className="doormat">
                <h6>Doormat Navigation</h6>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
            <nav className="contact">
                <h6>Contact</h6>
                <ul>
                    <li><a href="">Address</a></li>
                    <li><a href="">Phone Number</a></li>
                    <li><a href="">E-mail</a></li>
                </ul>
            </nav>
            <nav className="social">
                <h6>Social Media Links</h6>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Tik Tok</a></li>
                </ul>
            </nav>
        </footer>
    )    
}

export default Footer;