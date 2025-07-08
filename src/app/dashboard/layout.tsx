import type { PropsWithChildren, ReactNode } from 'react'

import { Sidebar } from '@/components/layout/sidebar/Sidebar'

interface Props {
	children: ReactNode
	modals: ReactNode
}

export default function DashboardLayout({ children, modals }: Props) {
	return (
		<div className='grid h-screen grid-cols-[230px_1fr]'>
			<Sidebar />
			<main className='bg-image-gradient p-5'>{children}</main>
			{modals}
		</div>
	)
}
