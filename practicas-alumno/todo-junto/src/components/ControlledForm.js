import { useState } from "react";
import { DEFAULT_STATE } from "../constants/form";

const ControlledForm = () => {
    const [formState, setFormState] = useState(DEFAULT_STATE);

    const onChange = (key) => {
        return (e) => {
            setFormState({
                ...formState,
                [key]: e.target.value
            })
        }
    }

    return (<>
        <form>
            Nombre: <input type="text" value={formState.name} onChange={onChange("name")}></input>
            Color: <input type="color" value={formState.color} onChange={onChange("color")}></input>
            <pre>
                <code>
                    {JSON.stringify(formState,null,2)}
                </code>
            </pre>
        </form>
    </>)

}
export default ControlledForm;