import { create } from "zustand";

type Store = {
	dialogVisible: boolean;
	dialogTitle: string;
	dialogDescription: string;
	onDialogConfirm: () => void;
	setDialogConfirm: (callback: () => void) => void;
	setDialogTitle: (title: string) => void;
	setDialogVisible: (visible: boolean) => void;
	setDialogDescription: (description: string) => void;
};

export const useDialogStore = create<Store>((set) => ({
	dialogVisible: false,
	dialogTitle: "Are you absolutely sure?",
	dialogDescription: "This action cannot be undone.",
	onDialogConfirm: () => {},
	setDialogConfirm: (onDialogConfirm) =>
		set({
			onDialogConfirm: () => {
				onDialogConfirm();
				set({ dialogVisible: false });
			},
		}),
	setDialogTitle: (dialogTitle) => set({ dialogTitle }),
	setDialogVisible: (dialogVisible) => set({ dialogVisible }),
	setDialogDescription: (dialogDescription) => set({ dialogDescription }),
}));
