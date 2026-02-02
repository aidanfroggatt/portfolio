import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '~/components/ui/chart';

const chartData = [
  { process: 'Manual', time: 100, label: '100% Time', fill: 'var(--color-manual)' },
  { process: 'Automated', time: 0.5, label: '0.5% Time', fill: 'var(--color-automated)' },
];

const chartConfig = {
  time: {
    label: 'Time Spent',
  },
  manual: {
    label: 'Manual Entry',
    color: 'hsl(var(--muted-foreground))',
  },
  automated: {
    label: 'Burloak Insight',
    color: '#8884D8',
  },
} satisfies ChartConfig;

export function BurloakImpactChart() {
  return (
    <Card className="w-full max-w-work-card-lg bg-custom-dark-alt border-white/10">
      <CardHeader>
        <CardTitle className="text-custom-light">Operational Efficiency</CardTitle>
        <CardDescription className="text-custom-light/50">
          Comparing time spent on data entry tasks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 0, right: 50, top: 0, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.1)" />
            <YAxis
              dataKey="process"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              stroke="rgba(255,255,255,0.7)"
              fontSize={14}
              width={100}
            />
            <XAxis dataKey="time" type="number" hide />
            <ChartTooltip
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="time" radius={[0, 4, 4, 0]} barSize={32}>
              <LabelList
                dataKey="label"
                position="right"
                className="fill-custom-light"
                fontSize={12}
                offset={10}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
