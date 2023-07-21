import { ReactNode, useEffect } from "react";

interface DataProps {
  id: string;
  body: string;
  title: string;
  userId: string;
}

interface DivProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function loggingIdentity<T, Z>(arg: T): Z {
  console.log(arg.length);
  return arg;
}

export const Div: React.FC<DivProps> = ({ children }) => {
  useEffect(() => {
    function responseFetch() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((e) => console.log(e));
    }
    loggingIdentity<string[], string>([]);
    loggingIdentity<number[], string>([]);
  }, []);
  return <div>{children}</div>;
};

// 20 propiedades del elemento div, button, input
// p, span, h1, input
