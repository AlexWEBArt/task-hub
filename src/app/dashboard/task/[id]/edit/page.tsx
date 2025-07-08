import Link from 'next/link'

import { Pages } from '@/config/pages'

interface Props {
	params: Promise<{ id: string }>
}

export default async function TaskEditModal({ params }: Props) {
	return (
		<div className='p-6'>
			<div>
				<Link href={Pages.DASHBOARD}>&#10229; Back to Dashboard</Link>
			</div>
		</div>
	)
}
