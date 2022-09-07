import './App.css';
import Logo from '../images/logo.png'

function App() {

  return (
    <nav className="navBar">
      <img className='logo' src={Logo} alt='logo' />
      <ul className='list'>
            <li><a  href="#">Categorias</a>
                <ul>
                    <li><a href="#">Livros</a></li>
                    <li><a href="#">Escritório</a></li>
                    <li><a href="#">Vestuário</a></li>
                </ul>
            </li>
      </ul>
      <div className="navBar">
        <input type='text' className='input' placeholder='Pesquisar'></input>
      </div>
      <ul>
        <li><a className='conta' href='#'>Minha Conta</a></li>
        <li><a className='carrinho' href='#'>Carrinho</a></li>
      </ul>
      
    </nav>
  );
}



export default App;



