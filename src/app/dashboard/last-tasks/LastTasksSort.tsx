import { taskStore } from '../../../../stores/task.store'
import type { TTaskSortBy } from '../../../types/task.types'
import { observer } from 'mobx-react-lite'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

const sortTypes: Array<TTaskSortBy> = ['asc', 'desc']

export const LastTasksSort = observer(() => {
	return (
		<Select
			defaultValue={taskStore.sortByDueDate}
			onValueChange={e => taskStore.setSortByDueDate(e as TTaskSortBy)}
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
})
