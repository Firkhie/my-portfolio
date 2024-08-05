import { create } from "zustand";

interface useObserverStore {
  heading: string;
  setHeading: (heading: string) => void;
}

export const useObserverStore = create<useObserverStore>((set) => ({
  heading: "",
  setHeading: (heading) => set({ heading }),
}));
