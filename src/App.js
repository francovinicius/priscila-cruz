
const pagina = window.location.pathname === '/' ? <div>Olá mundo</div> : <div>Sobre</div>
function App() {
  return pagina;
}

export default App;
