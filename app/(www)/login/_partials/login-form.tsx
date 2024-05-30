"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	username: z.string().min(1, "Username is required"),
	password: z.string().min(1, "Password is required"),
});

export default function LoginForm() {
	// Router
	const router = useRouter();

	// Mutation
	const { isPending, mutateAsync } = useMutation({
		mutationFn: async (formData: z.infer<typeof formSchema>) => {
			await login(formData)
				.then(() => {
					toast.success("Logged in successfully");

					// Redirect to dashboard
					router.push("/dashboard");
				})
				.catch(() => {
					toast.error("Invalid username or password");
				});
		},
	});

	// Form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	return (
		<div className="flex justify-center items-center h-screen">
			<Form {...form}>
				<form
					className="space-y-2"
					onSubmit={form.handleSubmit((data) => {
						mutateAsync(data);
					})}>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										type="text"
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										type="password"
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="ml-auto block !mt-4"
						disabled={isPending}>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
