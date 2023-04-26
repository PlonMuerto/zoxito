import "@styles/containers/header.scss";
import { useState,useEffect, useContext } from "react";
import UseHiddenOverflow from "../hook/windowHiddenOverflow";
import { Link } from "react-router-dom";

import  Logo from '@images/logo.png';
import IconShopping from "@icons/shopping.png"
import IconUser from "@icons/perfil.png"
import AppContext from "../context/AppContext";

const glitchGif = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3ZjM1YTlhNDM0MTU3NjAyMjFlOTVjY2E2OGVkYzZkZTI1NzViNSZjdD1n/IPFz7kGsj5tqU/giphy.gif";

export default function Header({ children }){
  const {state:{cart}} = useContext(AppContext);

	const [navToggle,setNavToggle] = useState(false);
  const [shopToggle,setShopToggle] = useState(false);
  const [userToggle,setMenuToggle] = useState(false);
  const [firstOpen,openComponent] = useState(true);
  const [closeAni,setCloseAni] = useState(false);
  
  useEffect(()=>{
    openComponent(false);
  },[])

  function closeAnimation(){
    setCloseAni(false);
    clearTimeout(closeAnimation);
  }

  function toggleNav(){
    
    setNavToggle((e)=>{
      if(!firstOpen && e){
        setCloseAni(true);
        setTimeout(closeAnimation,300)
        return !e
      }else{
        return !e
      }
    });
    
  }

  return (
    <header id="header">
      {
        navToggle
        ?
        <UseHiddenOverflow/>
        :
        null
      }
      <div className={"toggleMenu "+(!navToggle ? "actived": "")} onClick={()=>{
        toggleNav()
      }}>
        <div className="lineToggle" />
        <div className="lineToggle"/>
        <div className="lineToggle" />
      </div>

        <figure className="logo">
         
          <Link to={"/"}>
            <img className="logoPicture" src={Logo} />
          </Link>
          
          <img className="logoGlitch1" src={Logo} />
          
          <img className="logoGlitch2" src={Logo} />
        </figure>

      <nav className="navbar-desktop">
        
        <Link title="blog"  className="link" to="/blog">
          blog
        </Link>
        <Link title="news" className="link" to="/news">
          news
        </Link>
        <Link title="products" className="link" to="/products">
          products
        </Link>
        <Link title="about" className="link" to="/about">
          about
        </Link>
      </nav>
      <div className="userControl">
        <div className="shoppingcart">
          <figure className="icon-glitch-helper">
            <img className="oneIcon" src={IconShopping} />
            <img className="twoIcon" src={IconShopping} />
            <img className="threeIcon" src={IconShopping} />
          </figure>
          <span className="shoppingSize">
            {cart.length}
          </span>
        </div>
        <figure className="icon-glitch-helper">
          <img className="oneIcon" src={IconUser} />
          <img className="twoIcon" src={IconUser} />
          <img className="threeIcon" src={IconUser} />
        </figure>
      </div>
      <nav className={"menuNavbar " + (closeAni ? "closeAnimation" :(!navToggle ? "close": "")) }>
        <figure className="glitchScream">
          <img src={glitchGif} alt=" " />
        </figure>
        <h6 title="categories">categories</h6>
        <Link className="link" title="All">All</Link>
        <Link className="link" title="Foods">Foods</Link>
        <Link className="link" title="Clothing">Clothing</Link>
        <Link className="link" title="Electronic">Electronic</Link>
        <Link className="link" title="Services">Services</Link>
        <Link className="link" title="Other">Other</Link>
        <h6 title="about">about</h6>
        <Link className="link" title="Terms">Terms</Link>
        <Link className="link" title="Contact">Contact</Link>
        <Link className="link" title="Support">Support</Link>

        <h6 title="account">account</h6>
        <Link className="link" title="Login" to="/login" exact>Login</Link>
        <Link className="link" title="Perfil">Perfil</Link>
        <Link className="link" title="Ordenes">Ordenes</Link>
        <Link className="link" title="Salir">Salir</Link>
      </nav>
      <aside className="userControls close">
        <a className="link">mi cuenta</a>
        <a className="link">mis ordenes</a>
        <a className="link">cerrar sesion</a>
      </aside>
      <aside className="shoping_cart close">
        <span className="closeButton">
          <span className="material-symbols-outlined icon toggleShop">
            storefront
          </span>
          mis ordenes
        </span>
      </aside>
    </header>
	);
};