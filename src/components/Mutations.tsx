import gql from "graphql-tag";
import * as React from "react";
import { useQuery, useMutation } from "react-apollo-hooks";

interface Props {}

export const Mutations: React.FC<Props> = () => {
  const q1 = useQuery(
    gql`
      query Count {
        count @client
      }
    `
  );

  const increment = useMutation(gql`
    mutation Increment {
      increment @client
    }
  `);

  const decrement = useMutation(gql`
    mutation Decrement {
      decrement @client
    }
  `);

  const setCount = useMutation(gql`
    mutation SetCount($count: Int!) {
      setCount(count: $count) @client
    }
  `);

  return (
    <div>
      <h1>Mutations</h1>
      <div>Count: {q1.data.count}</div>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>

      <button
        onClick={() =>
          setCount({
            variables: {
              count: 12
            }
          })
        }
      >
        set count resolver
      </button>
    </div>
  );
};
