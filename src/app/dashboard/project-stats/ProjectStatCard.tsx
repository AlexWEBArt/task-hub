import cn from 'clsx'
import type { IProjectStat } from "./project-stat.types"
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
                'rounded-2xl p-5 mb-4 relative overflow-hidden'
            )}
        >
            <div className='flex items-start justify-between relative z-10'>
                <div className='flex flex-col'>
                    <span className='text-4xl font-semibold mb-1'>
                        {
                            projectStat.id === 3 ? formateMinutes(projectStat.number) : projectStat.number
                        }
                    </span>
                    <span className='text-sm'>
                        {
                            projectStat.label
                        }
                    </span>
                </div>
                <div className='flex-shrink-0 ml-4'>
                    <Image
                        src={projectStat.icon}
                        alt={projectStat.label}
                        width={80}
                        height={80}
                    />
                </div>

            </div>
        </div>
    )
}