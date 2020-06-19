import React from 'react'

const BOOKINGS_BUCKETS = {
  Free: 0,
  Cheap: 10,
  Normal: 100,
  Expensive: 100000
}

const bookingsChart = props => {
  const output = {}
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (current.event.price <= BOOKINGS_BUCKETS[bucket]) {
        return prev + 1
      } else {
        return prev
      }
    }, 0)
    output[bucket] = filteredBookingsCount
  }
  console.log(output)
  return <div>chart</div>
}

export default bookingsChart
