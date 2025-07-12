'use client'

import { authStore } from '../../../../stores/auth.store'
import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProfile } from './SidebarProfile'
import { SidebarProjects } from './SidebarProjects'
import { LogOut } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { PublicPages } from '@/config/public-pages'

export const Sidebar = observer(({}) => {
	const router = useRouter()

	return (
		<aside className='bg-white p-5 dark:bg-neutral-800'>
			{authStore.isLoggedIn && (
				<>
					<div className='items-cenetr flex justify-between'>
						<SidebarHeading title='Account' />
						<Button
							variant='ghost'
							className='opacity-30 transition-opacity hover:opacity-100'
							onClick={() => {
								authStore.logout()
								router.push(PublicPages.LOGIN)
							}}
						>
							<LogOut />
						</Button>
					</div>
					<SidebarProfile />
				</>
			)}

			<SidebarHeading title='Main Menu' />

			<SidebarMenu />

			<SidebarHeading title='Projects' />

			<SidebarProjects />
		</aside>
	)
})
