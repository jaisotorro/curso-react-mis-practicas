import "../estilos/LayoutTema.css";
import ConmutadoresTema from "./ConmutadoresTema";


/**
 * Engloba el contenido principal en un contendor para 
 * centrar el layout
 */
const LayoutConConmutadoresTema = ({ title, children }) => {

  return (    
    <div className="layout" >
        <header className="layout_header">
            <h1>{title}</h1>
            {/* <br/> */}
            <ConmutadoresTema />
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default LayoutConConmutadoresTema;