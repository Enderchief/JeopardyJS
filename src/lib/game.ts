import { writable } from "svelte/store";

const createGameStore = () => {
  const { set, subscribe, update } = writable(
    [...Array(6)].map(() => Array(5))
  );

  return {
    subscribe,
    set: (x: number, y: number) => {
      update((v) => {
        v[x][y] = true;
        return v;
      });
    },
    get: () => {
      let a;
      update((v) => {
        a = v;
        return v;
      });
      return a;
    },
  };
};

export const game = createGameStore();
export const state = writable<"board" | "question" | "answer">("board");
