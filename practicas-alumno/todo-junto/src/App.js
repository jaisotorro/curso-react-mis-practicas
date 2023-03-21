import React, { useEffect, useRef, useState } from "react"
import Layout from "../../../common/components/Layout"
import ContadorClase from "./components/ContadorClase"
import ContadorFuncional from "./components/ContadorFuncional"
import ContadorConEmojis from "./components/ContadorConEmojis"
import ContadorConUseEffect from "./components/ContadorConUseEffect"
import ContadorConUseRef from "./components/ContadorConUseRef"
import Tema from "./contexts/Tema"
import { TEMAS } from "./constants/temas"
import LayoutConConmutadorTema from "./components/LayoutConConmutadorTema"
import ContadorConTema from "./components/ContadorConTema"
import ContadorConUsePersonalizado from "./components/ContadorConUsePersonalizado"
import TemaRepe from "./contexts/TemaRepe"
import TemaDiv from "./contexts/TemaDiv"
import LayoutConConmutadoresTema from "./components/LayoutConConmutadoresTema"
import ErrorBoundary from "./components/ErrorBoundary"
import { Componente } from "./components/Componente"
import ControlledForm from "./components/ControlledForm"
import UncontrolledForm from "./components/UncontrolledForm"

const App = () => {
    // Para el 2.4
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef != null){
            inputRef.current.focus();
        }
    }, [inputRef]
    );

    // Para el 2.5 y 2.7
    const [tema, setTema] = useState(TEMAS.claro);
    useEffect(
        () => {
            if (document.body.classList == ""){
                document.body.classList.add(tema)
            } else {
                document.body.classList.replace(document.body.classList.value, tema)
            }
        }, [tema]
    );

    // Para el 2.7    
    const refDiv = useRef(null)
    const [temaDiv, setTemaDiv] = useState(TEMAS.claro);
      useEffect(
        () => {
            if (refDiv.current) {
                if (refDiv.current.classList == ""){
                    refDiv.current.classList.add(temaDiv)
                } else {
                    refDiv.current.classList.replace(refDiv.current.classList.value, temaDiv)
                }
            } 
        }, [temaDiv]
    );

    // Para el 3.2
    const [estadoComponente1, setEstadoComponente1] = useState({});
    const [estadoComponente2, setEstadoComponente2] = useState({});
    
    const onClick1 = () => {
        setEstadoComponente1({provocarError: true});
    }
    const onClick2 = () => {
        setEstadoComponente2({provocarError: true});
    }
    const onReset = () => {
        setEstadoComponente1({provocarError: false});
        setEstadoComponente2({provocarError: false});
    }

    return (
        <>
            <Layout title={"2.1 Introducción a los Hooks"} >
                <h3>Contador con componente clase</h3>
                <p>Contador definido como una clase. Utiliza el estado interno para gestionar el contador.</p>
                <ContadorClase />
                <h3>Contador con componente funcional</h3>
                <p>Contador definido como un componente funcional que utiliza hooks para gestionar el estado.</p>
                <ContadorFuncional />
            </Layout>
            <br/><br/><hr/><br/><br/>            
            <Layout title={"2.2 useState"} >
                <p>Contador de emojis y un selector para cambiar el tipo. Además, el emoji por defecto es aleatorio. 
                    El cálculo de este es bastante más complejo de lo que debería ser a propósito (para probarlo, descomentar el primero o el segundo de los 3 useState que hay 
                    para el emoji)</p>
                <ContadorConEmojis />            
            </Layout>
            <br/><br/><hr/><br/><br/>            
            <Layout title={"2.3 useEffect"}>
                <p>Contador que usa useEffect para incrementarse a traves de un timeout</p>
                <ContadorConUseEffect />
            </Layout>
            <br/><br/><hr/><br/><br/>            
            <Layout title={"2.4 useRef"}>
                <p>Contador que usa useRef para guardar el elemento input y el timeout, y poder referenciarlos desde los useEffect que enfoca el input e incrementa el contador respectivamente</p>
                <div>
                    <ContadorConUseRef ref={inputRef} />
                </div>
                <br/>
                <div>
                    <ContadorConUseRef />
                </div>
            </Layout>
            <br/><br/><hr/><br/><br/>                        
            <Tema.Provider value={{valor: tema, cambiarTema: setTema}} >
                <LayoutConConmutadorTema title={"2.5 useContext"}>
                    <p>Contador dentro de un contexto al que se le aplica un tema de estilo modificable</p>
                    <div>
                        <ContadorConTema />
                    </div>
                </LayoutConConmutadorTema>
            </Tema.Provider>
            <br/><br/><hr/><br/><br/>
            <TemaRepe.Provider value = {{valor: tema, updateValor: setTema }}>
                <TemaDiv.Provider value = {{valor: temaDiv, updateValor: setTemaDiv}} >
                    <div ref={refDiv}>
                        <LayoutConConmutadoresTema title={"2.7 Mi primer hook"} >
                            <h3>Contador usando un hook personalizado</h3>
                            <p>Contador que usa un hook donde se encapsula su valor, si está avanzando, y sus funciones de empezar, parar y resetear</p>
                            <ContadorConUsePersonalizado />
                        </LayoutConConmutadoresTema>
                    </div>
                </TemaDiv.Provider>
            </TemaRepe.Provider>
            <br/><br/><hr/><br/><br/>                        
            <Layout title={"3.2 Error Boundaries"}>
                <p>Aqui hay 2 componentes 1 y 2, y 2 ErrorBoundary a distinto nivel. El ErrorBoundary padre engloba al componente 1 y al ErrorBoundary hijo,
                    que a su vez, engloba al componente 2. Si falla el componente 1, se invoca el ErrorBoundary padre, por lo que desaparecen ambos componentes
                    por estar dentro. Pero si el que falla es el 2, desaparece solo el 2, porque es el único que está dentro del ErrorBoundary hijo invocado.
                    Los botones para provocar los errores están dentro del ErrorBoundary padre, pero fuera del hijo, por lo que solo desaparecen cuando falla
                    el componente 1
                </p>
                <ErrorBoundary mensajeError= "Se ha producido un error en el componente 1" onReset={onReset} >
                    <Componente {...estadoComponente1}>Este es el componente 1</Componente>
                    <ErrorBoundary  mensajeError= "Se ha producido un error en el componente 2" onReset={onReset} >
                        <Componente {...estadoComponente2}>Este es el componente 2</Componente> 
                    </ErrorBoundary>
                    <button onClick={onClick1}>Provocar error en el 1</button>{" "}<button onClick={onClick2}>Provocar error en el 2</button>    
                </ErrorBoundary>
            </Layout>
            <br/><br/><hr/><br/><br/>                        
            <Layout title={"3.5 Gestión de formularios"}>
                <p>Pendiente</p>
                <ControlledForm />
                <UncontrolledForm />
            </Layout>

        </>
    )
}
export default App;