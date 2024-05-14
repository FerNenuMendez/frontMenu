import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx'
import FiltroMenu from '../../components/filtroMenu/FiltroMenu.jsx';
import { cartContext } from '../../context/cartProvider.jsx';
import { useContext } from "react";
import './Menu.css'

const Menu = () => {
    const {name} = useContext(cartContext)
  return (
    <>
      <Header/>
      <main id="main" className="main">
          <section className="infoPedido">
          <h1 className="h1">Hola {name}! </h1>
          <h2 className="h2">Este es nuestro Menu:</h2>
          <FiltroMenu/>
          </section>
      </main>
      {/* ACA IRIA EL BOTON DE FINALIZAR PEDIDO QUE SALE CUANDO EL CART.LENGTH ES MAYOR A 0 */}
      <Footer/>
    </>
  )
}

export default Menu
