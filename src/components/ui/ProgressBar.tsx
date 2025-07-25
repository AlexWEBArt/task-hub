import cn from 'clsx'
import { CheckCircle } from 'lucide-react'
import { useMemo } from 'react'

interface Props {
	progress: number
}

export function ProgressBar({ progress }: Props) {
	const clamped = Math.min(100, Math.max(0, progress))

	const progressText = useMemo(() => {
		if (clamped >= 100)
			return (
				<>
					<CheckCircle className='mr-1.5' />
					Done
				</>
			)
		return `${clamped}%`
	}, [clamped])

	const colorProgressBar = useMemo(() => {
		if (clamped >= 100) return 'bg-emerald-500'
		if (clamped >= 75) return 'bg-amber-500'
		if (clamped >= 50) return 'bg-primary dark:bg-primary/70'
		if (clamped >= 25) return 'bg-rose-400'
		return 'bg-neutral-300'
	}, [clamped])

	return (
		<div className='bg-primary/12 relative h-12 w-full overflow-hidden rounded-full'>
			<div
				className={cn(
					'flex h-full cursor-default items-center justify-center rounded-full bg-[length:56px_56px] font-medium text-white transition-all duration-500',
					colorProgressBar,
					{
						'animate-stripes': clamped < 100
					}
				)}
				style={{
					width: `${clamped}%`,

					backgroundImage:
						clamped < 100
							? 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0.15) 20px, transparent 20px, transparent 40px)'
							: 'none'
				}}
			>
				{progressText}
			</div>
		</div>
	)
}
