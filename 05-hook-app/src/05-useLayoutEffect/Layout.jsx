import { useEffect } from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        onClick={() => increment(1)}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};
