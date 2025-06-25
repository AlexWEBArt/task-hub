import Link from "next/link";
import { MAIN_MENU } from "./data/main-menu.data";

export function SidebarMenu() {
    return (
        <nav className="mb-8 mt-3">
            <ul className="space-y-4">
                {
                    MAIN_MENU.map(item => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-neutral-500 dark:text-white flex items-center justify-between gap-2 hover:text-neutral-900 dark:hover:text-primary transition-colors pl-2">
                                <span className="flex items-center gap-2">
                                    <item.icon size={20} />
                                    <span>
                                        {
                                            item.label
                                        }
                                    </span>
                                </span>
                                {
                                    item.label === 'Messages' && (
                                        <span className="text-primary bg-[#DCDEF6] rounded-lg px-2 text-xs font-medium">
                                            4
                                        </span>
                                    )
                                }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}