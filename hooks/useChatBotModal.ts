import { create } from "zustand";

interface ChatBotModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  type: string;
}

const useChatBotModal = create<ChatBotModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  type: "mom",
}));

export default useChatBotModal;
