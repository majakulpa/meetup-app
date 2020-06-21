import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const BOOKINGS_BUCKETS = {
  Free: {
    min: 0,
    max: 0
  },
  Cheap: {
    min: 0.01,
    max: 9.99
  },
  Normal: {
    min: 10.0,
    max: 99.99
  },
  Expensive: {
    min: 100.0,
    max: 1000000
  }
}

const bookingsChart = props => {
  const chartData = { labels: [], datasets: [] }
  let values = []
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price >= BOOKINGS_BUCKETS[bucket].min &&
        current.event.price <= BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1
      } else {
        return prev
      }
    }, 0)
    values.push(filteredBookingsCount)
    chartData.labels.push(bucket)
    chartData.datasets = [
      {
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }

  return <Doughnut data={chartData} />
}

export default bookingsChart
