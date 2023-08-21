import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote,Quote } from "../03-examples/";

export const Layout = () => {
  const { counter, incrementar} = useCounter(1);
  const {data, isLoading, hasError} =  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const {quote, author} = !!data && data[0];

  
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

      {/* {
        isLoading
        ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>

        ) :
        (
            <blockquote className="blockquote text-end">
              <p className="mb-1"> {quote} </p> <br />
              <footer className="blockquote-footer">  {author} </footer>
            </blockquote>
            )
      } */}
    {
      isLoading 
      ?
      <LoadingQuote/>
      :
      <Quote author={author} quote={quote}/>
    }

      <button className="btn btn-primary" 
      disabled={isLoading}
      onClick={()=> incrementar(1)}>
        Next Quote
      </button>
    </>
  )
}
