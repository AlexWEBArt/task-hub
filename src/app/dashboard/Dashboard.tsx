'use client'

import { LastTasks } from './last-tasks/LastTasks'
import ProjectStatsChart from './project-chart/ProjectChart'
import { ProjectStats } from './project-stats/ProjectStats'

import { Heading } from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'

export function Dashboard() {
	return (
		<div className='grid grid-cols-[2.7fr_1fr]'>
			<div>
				<div className='mb-6 flex items-center justify-between'>
					<Heading>Dashboard</Heading>
					<SearchField
						onChange={value => console.log(value)}
						value=''
					/>
				</div>
				<div className='mb-7 grid grid-cols-[25%_75%] gap-6'>
					<ProjectStats />
					<ProjectStatsChart />
				</div>
				<LastTasks />
			</div>
			<div className='flex h-screen items-center justify-center p-5'>CHAT</div>
		</div>
	)
}
