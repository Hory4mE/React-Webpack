import { create } from "zustand";

interface ICounterStore {
  count: number;
  setCount: (count: number) => void;
}

export const useCounterStore = create<ICounterStore>((set) => {
  return {
    count: 0,
    setCount(count) {
      set({
        count: count,
      });
    },
  };
});
