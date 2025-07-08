import type { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/layout/sidebar/Sidebar'

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<div className='grid h-screen grid-cols-[230px_1fr]'>
			<Sidebar />
			<main className='bg-amber-50 p-5'>{children}</main>
		</div>
	)
}
