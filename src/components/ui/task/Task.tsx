import { ProgressBar } from '../ProgressBar'
import { cn } from '@/utils'
import { format, isToday } from 'date-fns'
import {
	Edit2,
	Link as LinkLucide,
	Image as LucideImage,
	MessageSquareMore,
	Plus
} from 'lucide-react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { SubTaskCreateModal } from '@/app/dashboard/last-tasks/create-sub-task/SubTaskCreateModal'

import { ICON_MAP } from '@/utils/icon-map'

import type { ITask } from '@/types/task.types'

import { DashboardPages } from '@/config/dashboard-pages'

interface Props {
	task: ITask
	isColor?: boolean
	isMinimal?: boolean
}

export const Task = observer(({ task, isColor, isMinimal }: Props) => {
	const completedCount = task.subTasks.filter(
		subTask => subTask.isCompleted
	).length
	const totalCount = task.subTasks.length
	const progress = Math.round((completedCount / totalCount) * 100)
	const Icon = ICON_MAP[task.icon]

	const dueDate = useMemo(() => {
		return isToday(task.dueDate.date)
			? 'Today'
			: Math.ceil((+task.dueDate.date - Date.now()) / (1000 * 60 * 60 * 24)) +
					' days'
	}, [task.dueDate.date]) as unknown as string

	return (
		<div
			className={cn(
				'bg-card flex flex-col justify-between rounded-xl p-3.5',
				isColor && task.color,
				isColor && 'text-foreground'
			)}
		>
			<div
				className={cn(
					'mb-3 flex h-full items-start justify-between',
					isMinimal && 'mb-0 flex-col gap-3'
				)}
			>
				<div className='flex h-full items-start gap-3'>
					<div
						className={cn(
							'bg-primary/10 text-primary flex items-center justify-center rounded-full p-1.5',
							isColor && 'text-primary bg-card'
						)}
					>
						<Icon />
					</div>
					<div
						className={cn(
							'flex h-full flex-col justify-between',
							!isMinimal && 'w-32'
						)}
					>
						<div className='leading-tight font-medium wrap-normal opacity-90'>
							{task.title}
						</div>
						<div>
							<span
								className={cn('text-sm opacity-50', isColor && 'opacity-75')}
							>
								{isMinimal ? (
									<>
										{format(task.dueDate.startTime!, 'ha')} -{' '}
										{format(task.dueDate.endTime!, 'ha')}
									</>
								) : (
									<> Due: {dueDate}</>
								)}
							</span>
						</div>
					</div>
				</div>
				<div className='flex items-center -space-x-3'>
					{task.users.map(user => (
						<div key={user.id}>
							<Image
								src={user.avatarPath || ''}
								alt={user.name}
								width={36}
								height={36}
								className='border-foreground rounded-full border dark:border-neutral-800'
							/>
						</div>
					))}
				</div>
			</div>
			{!isMinimal && (
				<div>
					<div className='mb-4'>
						<ProgressBar progress={progress} />
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-4'>
							<span className='flex items-center gap-1 text-sm'>
								<MessageSquareMore
									size={16}
									className='opacity-40'
								/>{' '}
								{task.comments.length}
							</span>
							<span className='flex items-center gap-1 text-sm'>
								<LucideImage
									size={16}
									className='opacity-40'
								/>{' '}
								{task.resources.length}
							</span>
							<span className='flex items-center gap-1 text-sm'>
								<LinkLucide
									size={16}
									className='opacity-40'
								/>{' '}
								{task.links.length}
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<SubTaskCreateModal taskId={task.id} />
							<Link
								href={DashboardPages.TASK_EDIT(task.id)}
								className='border-primary text-primary hover:bg-primary/10 bg-card rounded-full border p-2 transition-colors'
							>
								<Edit2 size={18} />
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
})
