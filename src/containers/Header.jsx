import "@styles/containers/header.scss";
import { useState,useEffect } from "react";
import UseHiddenOverflow from "../hook/windowHiddenOverflow";
//import logo from '@images/logo.png'
export default function Header({ children }){
	const [navToggle,setNavToggle] = useState(false);
  const [userToggle,setMenuToggle] = useState(false);
  const [shopToggle,setShopToggle] = useState(false);
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
      <a href="./index.html">
        <figure>
          <img src="./src/images/" />
        </figure>
      </a>
      <nav className="navbar-desktop">
        <a className="link">Noticias</a>
        <a className="link">Productos</a>
        <a className="link">Contactar</a>
        <a className="link">Blog</a>
      </nav>
      <div className="userControl">
        <span className="material-symbols-outlined shoppingcart toggleShop">
          shopping_cart
        </span>
        <a className="link" id="closeUser">email@user.com</a>
      </div>
      <nav className={"menuNavbar " + (closeAni ? "closeAnimation" :(!navToggle ? "close": "")) }>
        <figure className="glitchScream">
          <img src={"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRhYWQ0ZWU3NWU4NWEyZTkyNTcyZjllODBhMDc5YjJjZjhhNTAxNiZjdD1n/DS42gDdzDnScE/giphy.gif" || "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3ZjM1YTlhNDM0MTU3NjAyMjFlOTVjY2E2OGVkYzZkZTI1NzViNSZjdD1n/IPFz7kGsj5tqU/giphy.gif"} alt="COCODRILOOOOOOOOO" />
        </figure>
        <h6>categories</h6>
        <a className="link">All</a>
        <a className="link">Foods</a>
        <a className="link">Clothing</a>
        <a className="link">Electronic</a>
        <a className="link">Services</a>
        <a className="link">Other</a>
        <h6>about</h6>
        <a className="link">terms</a>
        <a className="link">contact</a>
        <a className="link">support</a>
        <hr />
        <h6>my acount</h6>
        <a className="link">mi cuenta</a>
        <a className="link">mis ordenes</a>
        <a className="link">cerrar sesion</a>
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