import type { TTaskStatus } from '../../../types/task.types'
import { cn } from '@/utils'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface Props {
	status: TTaskStatus | null
	setStatus: (status: TTaskStatus | null) => void
}

const statuses: Array<TTaskStatus | 'all'> = [
	'all',
	'not-started',
	'in-progress',
	'completed'
]

export function LastTasksFilter({ status, setStatus }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='capitalize'
				>
					{status?.replace('-', ' ') || 'ALL'}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{statuses.map(s => (
					<DropdownMenuItem
						key={s}
						onClick={() => setStatus(s === 'all' ? null : s)}
						className={cn(
							'cursor-pointer capitalize',
							status === s ? 'font-bold' : ''
						)}
					>
						{s.replace('-', ' ')}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
