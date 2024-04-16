import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import FiltroMenu from '../../components/filtroMenu/filtroMenu.jsx';
import { useState } from "react";
import './Index.css';

function Index() {
  const [menu, setMenu] = useState(false);
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [mesa, setMesa] = useState(0);

  function verMenu() {
    const nombre = document.getElementById('nombre').value;
    const mesaNum = parseInt(document.getElementById('mesa').value, 10);

    setName(nombre);
    setMesa(mesaNum);
    setMenu(true);
  }

  return (
    <>
      <Header/>
      {menu ? (
        <main id="main" className="main">
          <section className="infoPedido">
          <h1 className="h1">Hola {name}! </h1>
          <h2 className="h2">Este es nuestro Menu:</h2>
          <FiltroMenu/>
          </section>
        </main>
      ) : (
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
              <button id="verMenuBtn" onClick={verMenu}>Ver Menu</button>
            </div>
          </section>
        </main>
      )}
      <Footer/>
    </>
  );
}

export default Index;