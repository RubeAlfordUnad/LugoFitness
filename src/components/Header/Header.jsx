import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = React.useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="" className="Logo"/>
            {menuOpened === false && mobile === true ? (
                <div style={{backgroundColor: "var(--orange)", padding: "0.5rem", borderRadius: "5px"}}
                onClick={() => setMenuOpened(true)}
                >
                    
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: "1.5rem"}}/>
                </div>
            ) : (
                <ul className="header-menu">
                    <li><Link onClick={()=> setMenuOpened(false)} activeClass="active" to='header' spy={true} smooth={true}>Inicio</Link></li>
                    <li><Link onClick={()=> setMenuOpened(false)} to='programas' spy={true} smooth={true}>Programas</Link></li>
                    <li><Link onClick={()=> setMenuOpened(false)} to='Reasons' spy={true} smooth={true}>Razones</Link></li>
                    <li><Link onClick={()=> setMenuOpened(false)} to='plans' spy={true} smooth={true}>Planes</Link></li>
                    <li><Link onClick={()=> setMenuOpened(false)} to='Join' spy={true} smooth={true}>Contacto</Link></li>
                </ul>    
            )}
        </div>
    )
}    


export default Header;