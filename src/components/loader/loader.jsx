import "./loader.css"
const Loader = () => {
  return (
<div className="containerr font-extrabold font-openSans">
  <div className="cargando">
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <div className="pelotas"></div>
    <span className="texto-cargando">Cargando...</span>
  </div>
</div>
  )
}
export default Loader