import type { IProjectStat } from "../project-stats/project-stat.types";

export const PROJECT_STATS_DATA: IProjectStat[] = [
    {
        id: 1,
        number: 92,
        label: 'Active Projects',
        bgColor: 'bg-violet-300',
        icon: '/images/icons/active-projects.svg'
    },
    {
        id: 2,
        number: 35,
        label: 'On Going Projects',
        bgColor: 'bg-yellow-200',
        icon: '/images/icons/ongoing-projects.svg'
    },
    {
        id: 3,
        // minutes
        number: 1149,
        label: 'Working Hours',
        bgColor: 'bg-pink-300',
        icon: '/images/icons/working-hours.svg'
    }

]