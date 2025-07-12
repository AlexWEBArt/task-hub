import Link from 'next/link'

import { DashboardPages } from '@/config/dashboard-pages'

interface Props {
	params: Promise<{ id: string }>
}

export default async function TaskEditModal({ params }: Props) {
	return (
		<div className='p-6'>
			<div>
				<Link href={DashboardPages.DASHBOARD}>&#10229; Back to Dashboard</Link>
			</div>
		</div>
	)
}
