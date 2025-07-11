import type { ITask } from '../../../types/task.types'
import { USERS } from './users.data'
import { setHours, setMinutes } from 'date-fns'

export const TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App User Flow',
		icon: 'Plane',
		color: 'bg-violet-300',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 9), 50),
			endTime: setMinutes(setHours(new Date(), 12), 10)
		},
		comments: ['This is a comment', 'Another comment', 'Yet another commet'],
		resources: ['', '', '', '', ''],
		links: ['https://examples.com', 'https://examples.org'],
		users: [USERS[0], USERS[1], USERS[2]],
		subTasks: [
			{
				id: '1',
				title: 'Create wireframes',
				isCompleted: false
			},
			{
				id: '2',
				title: 'Design UI components',
				isCompleted: false
			},
			{
				id: '3',
				title: 'Implement user flow',
				isCompleted: true
			},
			{
				id: '4',
				title: 'Test user flow',
				isCompleted: true
			}
		]
	},
	{
		id: '2',
		title: 'E-commerce Website Redesign',
		icon: 'ShoppingBasket',
		color: 'bg-pink-300',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 13), 0),
			endTime: setMinutes(setHours(new Date(), 15), 30)
		},
		comments: ['initial design review', 'Feedback received'],
		resources: ['', '', '', '', ''],
		links: ['https://examples.com', 'https://examples.org'],
		users: [USERS[1], USERS[3], USERS[4]],
		subTasks: [
			{
				id: '1',
				title: 'Create new design mockups',
				isCompleted: true
			}
		]
	},
	{
		id: '3',
		title: 'Mobile App Feature Update',
		icon: 'TabletSmartphone',
		color: 'bg-yellow-300',
		dueDate: {
			date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
		},
		comments: ['Feature requirments defined'],
		resources: ['', '', '', ''],
		links: ['https://examples.com'],
		users: [USERS[2], USERS[5], USERS[6]],
		subTasks: [
			{
				id: '1',
				title: 'Implement new feature',
				isCompleted: true
			},
			{
				id: '2',
				title: 'Review with stakeholders',
				isCompleted: true
			},
			{
				id: '3',
				title: 'Implement new design',
				isCompleted: true
			},
			{
				id: '4',
				title: 'Deploy to production',
				isCompleted: false
			}
		]
	}
]
