import { useRef, useState } from "react";
import { DEFAULT_STATE } from "../constants/form";

const UncontrolledForm = () => {
    const [formState, setFormState] = useState(DEFAULT_STATE);
    const nameRef = useRef(null);
    const colorRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormState({
            ...DEFAULT_STATE,
            name: nameRef.current.value,
            color: colorRef.current.value
        })

    }

    return (<>
        <form onSubmit={onSubmit}>
            Nombre: <input ref={nameRef} type="text" defaultValue={formState.name}></input>
            Color: <input ref={colorRef} type="color" defaultValue={formState.color}></input>
            <button>Enviar informacion</button>
            <pre>
                <code>
                    {JSON.stringify(formState,null,2)}
                </code>
            </pre>
        </form>
    </>)

}
export default UncontrolledForm;