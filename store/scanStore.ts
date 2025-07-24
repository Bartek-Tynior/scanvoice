import { create } from "zustand";

interface ScanStore {
  imageUri: string | null;
  setImageUri: (uri: string) => void;
  clear: () => void;
}

export const useScanStore = create<ScanStore>((set) => ({
  imageUri: null,
  setImageUri: (uri) => set({ imageUri: uri }),
  clear: () => set({ imageUri: null }),
}));
