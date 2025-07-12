import { z } from 'zod'

export const AuthSchema = z.object({
	email: z.email('Invalid email adress'),
	password: z
		.string('Password is required')
		.min(6, 'Password must be at least 6 characters')
})
