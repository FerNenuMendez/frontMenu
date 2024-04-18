import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import { useContext } from "react";
import { Link } from "react-router-dom"
import { cartContext } from '../../context/cartProvider.jsx';
import './Index.css';

function Index() {
  //context pedido
  const {infoMesa} = useContext(cartContext)
  //funcion que muestra el menu y guarda info de la mesa
  function verMenu() {
    const nombre = document.getElementById('nombre').value;
    const mesaNum = parseInt(document.getElementById('mesa').value, 10);
    infoMesa(nombre, mesaNum)
  }

  return (
    <>
      <Header/>
        <main id="main" className="main">
          <section id="info" className="infoPedido">
            <h1 className="h1">Bienvenidos a Kansas</h1>
            <h2 className="h2">Reliza tu Pedido</h2>
            <div className="formulario">
              <form action="#" method="post" id="reservaForm">
                <div className="div__info">
                  <label htmlFor="nombre">NOMBRE:</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="div__info">
                  <label htmlFor="mesa">Nº MESA:</label>
                  <input type="number" id="mesa" name="mesa" required />
                </div>
              </form>
              <Link to='/menu'><button id="verMenuBtn" onClick={verMenu}>Ver Menu</button></Link>
            </div>
          </section>
        </main>
      <Footer/>
    </>
  );
}

export default Index;