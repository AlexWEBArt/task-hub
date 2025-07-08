import { MAIN_MENU } from './data/main-menu.data'
import Link from 'next/link'

export function SidebarMenu() {
	return (
		<nav className='mt-3 mb-8'>
			<ul className='space-y-4'>
				{MAIN_MENU.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className='dark:hover:text-primary flex items-center justify-between gap-2 pl-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-white'
						>
							<span className='flex items-center gap-2'>
								<item.icon size={20} />
								<span>{item.label}</span>
							</span>
							{item.label === 'Messages' && (
								<span className='text-primary rounded-lg bg-[#DCDEF6] px-2 text-xs font-medium'>
									4
								</span>
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
