import { taskStore } from '../../../../stores/task.store'
import type { TTaskStatus } from '../../../types/task.types'
import { cn } from '@/utils'
import { observer } from 'mobx-react-lite'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const statuses: Array<TTaskStatus | 'all'> = [
	'all',
	'not-started',
	'in-progress',
	'completed'
]

export const LastTasksFilter = observer(() => {
	const currentStatus = taskStore.status

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='capitalize'
				>
					{currentStatus?.replace('-', ' ') || 'ALL'}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{statuses.map(s => (
					<DropdownMenuItem
						key={s}
						onClick={() => taskStore.setStatus(s === 'all' ? null : s)}
						className={cn(
							'cursor-pointer capitalize',
							currentStatus === s ? 'font-bold' : ''
						)}
					>
						{s.replace('-', ' ')}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
})
