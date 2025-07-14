import { taskStore } from '../../../stores/task.store'
import { Task } from '../ui/task/Task'
import { getHours, getMinutes } from 'date-fns'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

export const TaskTimeLine = observer(() => {
	const todayTasks = taskStore.todayTasks
	const users = [
		...new Map(
			todayTasks.flatMap(task => task.users).map(user => [user.id, user])
		).values()
	]

	return (
		<div className='bg-card rounded-xl p-5'>
			<div className='mb-4 flex items-center justify-between'>
				<h2 className='text-xl font-medium'>Today Tasks</h2>
				<div className='flex items-center -space-x-3'>
					{users.map(user => (
						<div key={user.id}>
							<Image
								src={user.avatarPath || ''}
								alt={user.name}
								width={40}
								height={40}
								className='rounded-full border border-white dark:border-neutral-800'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='w-full overflow-x-auto p-3'>
				<div className='grid grid-cols-9'>
					{HOURS.map(hour => (
						<div
							key={hour}
							className='opasity-50 text-left text-sm font-medium'
						>
							{hour > 12 ? `${hour - 12} pm` : `${hour} am`}
						</div>
					))}
				</div>
			</div>
			<div className='relative h-72'>
				{todayTasks.map(task => {
					const start = getHours(task.dueDate.startTime)
					const end = getHours(task.dueDate.endTime)

					const startMinutes = getMinutes(task.dueDate.startTime)
					const endMinutes = getMinutes(task.dueDate.endTime)

					const startPercent =
						(((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100
					const endPercent =
						(((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100
					const widthPercent = endPercent - startPercent

					return (
						<div
							key={task.id}
							className='absolute top-8 rounded-lg'
							style={{
								left: `${startPercent}%`,
								width: `${widthPercent}%`
							}}
						>
							<Task
								task={task}
								isColor
								isMinimal
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
})
