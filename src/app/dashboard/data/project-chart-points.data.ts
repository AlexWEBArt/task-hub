import type { IProjectChartPoint } from "../project-chart/project-chart.type";

export const dailyStats: IProjectChartPoint[] = [
  { period: 'Mon', value: 5 },
  { period: 'Tue', value: 8 },
  { period: 'Wed', value: 4 },
  { period: 'Thu', value: 9 },
  { period: 'Fri', value: 6 },
  { period: 'Sat', value: 7 },
  { period: 'Sun', value: 3 },
];

export const monthlyStats: IProjectChartPoint[] = [
  { period: 'Jan', value: 32 },
  { period: 'Feb', value: 29 },
  { period: 'Mar', value: 38 },
  { period: 'Apr', value: 24 },
  { period: 'May', value: 18 },
  { period: 'Jun', value: 22 },
  { period: 'Jul', value: 30 },
];

export const yearlyStats: IProjectChartPoint[] = [
  { period: '2020', value: 200 },
  { period: '2021', value: 240 },
  { period: '2022', value: 210 },
  { period: '2023', value: 270 },
  { period: '2024', value: 300 },
  { period: '2025', value: 280 },
];
