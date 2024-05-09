import { FC } from "react";
import { useRandom } from "../hooks/useRandom";
import { useCounterStore } from "../store/counter";

const Home: FC = () => {
  const { count, setCount } = useCounterStore();
  const random = useRandom();
  return (
    <>
      <button onClick={random.random}>random</button>
      <div>{random.value}</div>
      <div>{random.doublevalue}</div>
      <button onClick={() => setCount(count + 1)}>
        current number is {count}
      </button>
    </>
  );
};

export default Home;
