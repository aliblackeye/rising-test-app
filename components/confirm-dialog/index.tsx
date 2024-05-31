"use client";

import { useDialogStore } from "@/store/use-dialog-store";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

export function ConfirmDialog() {
	const {
		dialogVisible,
		onDialogConfirm,
		dialogDescription,
		dialogTitle,
		setDialogVisible,
	} = useDialogStore();

	return (
		<Dialog
			open={dialogVisible}
			onOpenChange={(visible) => {
				if (!visible) {
					setDialogVisible(false);
				}
			}}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogDescription>{dialogDescription}</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button
						type="button"
						variant={"secondary"}
						onClick={() => {
							setDialogVisible(false);
						}}>
						Close
					</Button>
					<Button
						type="button"
						variant={"default"}
						onClick={() => onDialogConfirm()}>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
