import { Link, Outlet } from "react-router-dom";
import '../App.css'
import CartWidget from './CartWidget';
const Layout = () => {
    return (
        <> 
        <nav className="navbar">
            <div className='links-container'>
              <ul className="navbar-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                </ul>
            </div>

                <Link to="/carrito" className='navbar-logo'><CartWidget /></Link>
           
        </nav>
         <Outlet />
         </>
    );
};

export default Layout;