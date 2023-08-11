import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, decrementar, incrementar, reset} = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />

        <button className='btn btn-primary' onClick={()=> incrementar(2)}>+1</button>
        <button className='btn btn-primary' onClick={reset}>reset</button>
        <button className='btn btn-primary' onClick={()=> decrementar(2)}>-1</button>
    </>
  )
}
