import type { IconName } from '@/utils/icon-map'

import type { IProfile } from '@/types/profile.types'

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	icon: IconName
	dueDate: {
		date: Date
		startTime?: Date
		endTime?: Date
	}
	users: IProfile[]
	subTasks: ISubTask[]
	comments: string[]
	resources: string[]
	links: string[]
}

export interface ITaskWithTime extends ITask {
	dueDate: {
		date: Date
		startTime: Date
		endTime: Date
	}
}

export type TTaskStatus = 'not-started' | 'in-progress' | 'completed'
export type TTaskSortBy = 'asc' | 'desc'

export type TTaskFromData = Pick<ITask, 'title' | 'dueDate' | 'icon'>
export type TSubTaskFormData = Pick<ISubTask, 'title' | 'isCompleted'>
