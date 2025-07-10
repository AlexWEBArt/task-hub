import { taskStore } from '../../../../stores/task.store'
import { LastTasksFilter } from './LastTasksFilter'
import { LastTasksSort } from './LastTasksSort'
import { observer } from 'mobx-react-lite'

import { Task } from '@/components/ui/task/Task'

export const LastTasks = observer(() => {
	const filteredTasks = taskStore.filteredTasks

	return (
		<div>
			<div className='mb-5 flex items-center justify-between'>
				<h2 className='text-lg font-medium'>
					Lask Tasks
					<span className='text-lg font-normal opacity-40'>
						({filteredTasks.length})
					</span>
				</h2>

				<div className='flex items-center gap-2'>
					<LastTasksFilter />
					<LastTasksSort />
				</div>
			</div>

			{filteredTasks.length ? (
				<div className='grid grid-cols-3 gap-4'>
					{filteredTasks.map(task => (
						<Task
							key={task.id}
							task={task}
						/>
					))}
				</div>
			) : (
				<div>
					<p className='opacity-50'>No tasks available</p>
				</div>
			)}
		</div>
	)
})
