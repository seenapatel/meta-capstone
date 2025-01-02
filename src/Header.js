import logo from './images/Logo.svg'
function Header(){
    return(
         <header>
            <meta name="description" content="Little Lemon Homepage"/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:description" content="Little Lemon Restaurant is a family-owned Mediterranean restaurant with a variety of options."/>
            <meta name="og:image" content={logo}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </header>
    )
}

export default Header;