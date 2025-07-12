import type { IMenuItem } from '../menu/menu.types'
import {
	CalendarDays,
	ChartNoAxesColumn,
	LayoutGrid,
	MessageCircleMore,
	NotebookText,
	Settings,
	UserRound
} from 'lucide-react'

import { DashboardPages } from '@/config/dashboard-pages'

export const MAIN_MENU: IMenuItem[] = [
	{ icon: LayoutGrid, label: 'Dashboard', href: DashboardPages.DASHBOARD },
	{ icon: MessageCircleMore, label: 'Messages', href: DashboardPages.MESSAGES },
	{ icon: ChartNoAxesColumn, label: 'Insight', href: DashboardPages.INSIGHT },
	{ icon: UserRound, label: 'Team', href: DashboardPages.TEAM },
	{ icon: CalendarDays, label: 'Schedule', href: DashboardPages.SCHEDULE },
	{ icon: NotebookText, label: 'Report', href: DashboardPages.REPORT },
	{ icon: Settings, label: 'Settings', href: DashboardPages.SETTINGS }
]
