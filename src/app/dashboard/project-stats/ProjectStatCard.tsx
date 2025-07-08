import type { IProjectStat } from './project-stat.types'
import cn from 'clsx'
import Image from 'next/image'

import { formateMinutes } from '@/utils/format-minutes'

interface Props {
	projectStat: IProjectStat
}

export function ProjectStatCard({ projectStat }: Props) {
	return (
		<div
			className={cn(
				projectStat.bgColor,
				'relative mb-4 overflow-hidden rounded-2xl p-5'
			)}
		>
			<div className='relative z-10 flex items-start justify-between'>
				<div className='flex flex-col'>
					<span className='mb-1 text-4xl font-semibold'>
						{projectStat.id === 3
							? formateMinutes(projectStat.number)
							: projectStat.number}
					</span>
					<span className='text-sm'>{projectStat.label}</span>
				</div>
				<div className='ml-4 flex-shrink-0'>
					<Image
						src={projectStat.icon}
						alt={projectStat.label}
						width={80}
						height={80}
						className='h-auto w-auto'
					/>
				</div>
			</div>
		</div>
	)
}
