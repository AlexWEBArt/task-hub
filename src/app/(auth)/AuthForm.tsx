'use client'

import { authStore } from '../../../stores/auth.store'
import { AuthSchema } from '@/zod-schemes/auth.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type z from 'zod'

import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { DashboardPages } from '@/config/dashboard-pages'

interface Props {
	type: 'login' | 'register' | 'forgot-password' | 'reset-password'
}

export function AuthForm({ type }: Props) {
	const isLogin = type === 'login'
	const form = useForm<z.infer<typeof AuthSchema>>({
		resolver: zodResolver(AuthSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const router = useRouter()

	const onSubmit = (data: z.infer<typeof AuthSchema>) => {
		authStore.login()
		form.reset()

		if (authStore.isLoggedIn) {
			toast.success(
				isLogin ? 'Logged in successfully' : 'Registered successfully'
			)
			router.replace(DashboardPages.DASHBOARD)
		}
	}

	return (
		<BubbleBackground
			interactive
			className='absolute inset-0 flex items-center justify-center rounded-xl'
		>
			<div className='relative z-50 max-w-sm rounded-lg bg-white p-6 dark:bg-neutral-800'>
				<h1 className='mb-5 text-2xl font-bold'>
					{isLogin ? 'Login' : 'Register'}
				</h1>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4'
					>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder='Enter email: '
											type='email'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder='Enter password: '
											type='password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Save</Button>
					</form>
				</Form>
			</div>
		</BubbleBackground>
	)
}
