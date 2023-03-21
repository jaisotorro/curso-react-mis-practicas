import "../estilos/LayoutTema.css";
import ConmutadorTema from "./ConmutadorTema";


/**
 * Engloba el contenido principal en un contendor para 
 * centrar el layout
 */
const LayoutConConmutadorTema = ({ title, children }) => (
  <div className="layout" >
    <header className="layout_header">
      <h1>{title}</h1>
      <div>
        <ConmutadorTema />
      </div>
    </header>
    <main>
      {children}
    </main>
  </div>
);

export default LayoutConConmutadorTema;