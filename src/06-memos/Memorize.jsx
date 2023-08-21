import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"


export const Memorize = () => {

    const {counter, incrementar} = useCounter(0);
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter: <Small value = {counter}/></h1>
        <hr />

        <button
        className="btn btn-primary"
        onClick={()=> incrementar()}>
            +1
        </button>

        <button 
        className="btn btn-outline-primary"
        onClick={()=>setShow(!show)}>
            Show/Hide : {JSON.stringify(show)}
        </button>
    </>
  )
}
