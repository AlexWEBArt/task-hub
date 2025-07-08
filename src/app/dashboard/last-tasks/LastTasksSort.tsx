import type { TTaskSortBy } from './last-tasks.type'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

interface Props {
	sortByDueDate: TTaskSortBy
	setSortByDueDate: (status: TTaskSortBy) => void
}

const sortTypes: Array<TTaskSortBy> = ['asc', 'desc']

export function LastTasksSort({ sortByDueDate, setSortByDueDate }: Props) {
	return (
		<Select
			defaultValue={sortByDueDate}
			onValueChange={setSortByDueDate}
		>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Sort by Due Date' />
			</SelectTrigger>
			<SelectContent>
				{sortTypes.map(type => (
					<SelectItem
						key={type}
						value={type}
					>
						{type === 'asc' ? 'Ascending' : 'Descending'}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
