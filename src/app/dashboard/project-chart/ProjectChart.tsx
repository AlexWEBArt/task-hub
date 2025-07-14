import {
	dailyStats,
	monthlyStats,
	yearlyStats
} from '../data/project-chart-points.data'
import { ProjectChartTooltip } from './ProjectChartTooltip'
import type { IChartPeriod } from './project-chart.type'
import { useMemo, useState } from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

const periodLabels: Record<IChartPeriod, string> = {
	daily: 'Daily',
	monthly: 'Monthly',
	yearly: 'Yearly'
}

const ProjectStatsChart = () => {
	const [period, setPeriod] = useState<IChartPeriod>('yearly')

	const rawData =
		period === 'daily'
			? dailyStats
			: period === 'monthly'
				? monthlyStats
				: yearlyStats

	const maxData = useMemo(() => {
		if (!rawData || rawData.length === 0) return null

		let maxValue = 0
		let maxPeriod = ''

		rawData.forEach(item => {
			if (item.value > maxValue) {
				maxValue = item.value
				maxPeriod = item.period
			}
		})
		return { value: maxValue, period: maxPeriod }
	}, [rawData])

	return (
		<div className='mb-4 flex w-full max-w-xl flex-col justify-between rounded-2xl bg-white font-[Poppins] dark:bg-neutral-800'>
			<div className='mb-4 flex items-center justify-between p-6'>
				<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
					Projects Statistic
				</h2>
				<div className='flex rounded-full border-2 border-[#ECECEC] pr-3'>
					<select
						value={period}
						onChange={e => setPeriod(e.target.value as IChartPeriod)}
						className='rounded-full bg-white py-1.5 pl-4 text-sm text-black focus:outline-none dark:bg-neutral-800 dark:text-gray-100'
					>
						{(['daily', 'monthly', 'yearly'] as IChartPeriod[]).map(key => (
							<option
								key={key}
								value={key}
							>
								{periodLabels[key]}
							</option>
						))}
					</select>
				</div>
			</div>
			<ResponsiveContainer
				width='100%'
				height='100%'
			>
				<AreaChart
					data={rawData}
					margin={{
						top: 20,
						right: 20,
						left: -20,
						bottom: 0
					}}
				>
					<defs>
						<linearGradient
							id='colorGradient'
							x1='0'
							y1='0'
							x2='0'
							y2='1'
						>
							<stop
								offset='5%'
								stopColor='#725BF2'
								stopOpacity={0.3}
							/>
							<stop
								offset='95%'
								stopColor='#725BF2'
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid
						strokeDasharray='0'
						vertical={false}
						stroke='#F3F4F6'
					/>
					<XAxis
						dataKey='period'
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: '#9CA3AF' }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fill: '#9CA3AF' }}
						domain={[0, 'dataMax + 10']}
					/>
					<Tooltip
						content={<ProjectChartTooltip />}
						cursor={false}
					/>
					{maxData && (
						<ReferenceLine
							x={maxData.period}
							stroke='#6366F1'
							strokeDasharray='5 5'
							strokeWidth={1.5}
						/>
					)}
					<Area
						type='bump'
						dataKey='value'
						stroke='#6366F1'
						strokeWidth={2}
						fillOpacity={1}
						fill='url(#colorGradient)'
					/>
				</AreaChart>
			</ResponsiveContainer>
			{/* <Line data={chartData} options={chartOptions} /> */}
		</div>
	)
}

export default ProjectStatsChart
