import { TASKS } from '../data/last-tasks.data'

import { Task } from '@/components/ui/task/Task'

export function LastTasks() {
	return (
		<div>
			<h2 className='mb-5 text-lg font-medium'>
				Lask Tasks
				<span className='text-lg font-normal opacity-40'>({TASKS.length})</span>
			</h2>
			{TASKS.length ? (
				<div className='grid grid-cols-3 gap-4'>
					{TASKS.map(task => (
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
}
