'use client'

import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import * as React from 'react'

import { ThemeToggle } from '@/components/theme-toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FramePanel,
  FrameTitle,
} from '@/components/ui/frame'
import { Separator } from '@/components/ui/separator'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
} from 'recharts'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
})

export default function ChartsPage() {
  return (
    <article className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8'>
      <Frame className='w-full max-w-3xl my-8'>
        <FramePanel>
          <div className='flex items-start justify-between mb-6'>
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                Visualizing Data Trends
              </FrameTitle>
              <FrameDescription>
                Turning numbers into narrative
              </FrameDescription>
            </div>
            <ThemeToggle />
          </div>

          <div className='space-y-6'>
            <p>
              Data visualization serves as the bridge between raw analytics and
              human understanding. By translating abstract figures into spatial
              representations, we reveal patterns that might otherwise remain
              hidden in the noise.
            </p>

            <Separator />

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Temporal Analysis
            </h2>

            <p>
              Tracking performance over time is fundamental to understanding
              growth and engagement. Here we contrast discrete monthly volume
              with continuous daily activity.
            </p>

            <div className='grid gap-8 md:grid-cols-2 my-4'>
              <Card>
                <CardHeader>
                  <CardTitle>Bar Chart</CardTitle>
                  <CardDescription>Monthly revenue for 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      revenue: {
                        label: 'Revenue',
                        color: 'hsl(var(--primary))',
                      },
                    }}
                    className='min-h-[300px] w-full'
                  >
                    <BarChart
                      data={[
                        { month: 'Jan', revenue: 186 },
                        { month: 'Feb', revenue: 305 },
                        { month: 'Mar', revenue: 237 },
                        { month: 'Apr', revenue: 73 },
                        { month: 'May', revenue: 209 },
                        { month: 'Jun', revenue: 214 },
                      ]}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey='month'
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey='revenue'
                        fill='var(--color-revenue)'
                        radius={4}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Line Chart</CardTitle>
                  <CardDescription>Active users trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      users: {
                        label: 'Users',
                        color: 'hsl(var(--primary))',
                      },
                    }}
                    className='min-h-[300px] w-full'
                  >
                    <LineChart
                      data={[
                        { day: 'Mon', users: 186 },
                        { day: 'Tue', users: 305 },
                        { day: 'Wed', users: 237 },
                        { day: 'Thu', users: 73 },
                        { day: 'Fri', users: 209 },
                        { day: 'Sat', users: 214 },
                        { day: 'Sun', users: 150 },
                      ]}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey='day'
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type='natural'
                        dataKey='users'
                        stroke='var(--color-users)'
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Volume & Distribution
            </h2>

            <p>
              Beyond simple trends, we often need to understand the magnitude of
              activity or the composition of a whole.
            </p>

            <div className='grid gap-8 md:grid-cols-2 my-4'>
              <Card>
                <CardHeader>
                  <CardTitle>Area Chart</CardTitle>
                  <CardDescription>Server load over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      load: {
                        label: 'Load',
                        color: 'hsl(var(--primary))',
                      },
                    }}
                    className='min-h-[300px] w-full'
                  >
                    <AreaChart
                      data={[
                        { time: '00:00', load: 30 },
                        { time: '04:00', load: 45 },
                        { time: '08:00', load: 80 },
                        { time: '12:00', load: 90 },
                        { time: '16:00', load: 70 },
                        { time: '20:00', load: 50 },
                        { time: '24:00', load: 40 },
                      ]}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey='time'
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type='natural'
                        dataKey='load'
                        stroke='var(--color-load)'
                        fill='var(--color-load)'
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pie Chart</CardTitle>
                  <CardDescription>Device distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      desktop: {
                        label: 'Desktop',
                        color: 'hsl(var(--chart-1))',
                      },
                      mobile: {
                        label: 'Mobile',
                        color: 'hsl(var(--chart-2))',
                      },
                      tablet: {
                        label: 'Tablet',
                        color: 'hsl(var(--chart-3))',
                      },
                    }}
                    className='min-h-[300px] w-full'
                  >
                    <PieChart>
                      <ChartTooltip
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={[
                          {
                            browser: 'desktop',
                            visitors: 1260,
                            fill: 'var(--color-desktop)',
                          },
                          {
                            browser: 'mobile',
                            visitors: 570,
                            fill: 'var(--color-mobile)',
                          },
                          {
                            browser: 'tablet',
                            visitors: 200,
                            fill: 'var(--color-tablet)',
                          },
                        ]}
                        dataKey='visitors'
                        nameKey='browser'
                        innerRadius={60}
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </FramePanel>
        <FrameFooter>
          <div className='flex justify-between w-full items-center'>
            <Link
              href='/'
              className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className='size-4' />
              <span>Back to Home</span>
            </Link>
            <p className='text-muted-foreground text-sm'>
              &copy; 2026 Coscientist Design System
            </p>
          </div>
        </FrameFooter>
      </Frame>
    </article>
  )
}
