import { FC } from "react";
import { useCounterStore } from "../store/counter";

const Test: FC = () => {
  const { count } = useCounterStore();
  return (
    <>
      <div>count is {count}</div>
    </>
  );
};

export default Test;
