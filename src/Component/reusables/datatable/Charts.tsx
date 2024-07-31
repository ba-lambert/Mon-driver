import React, { useState } from 'react';
import { BarChart } from '@mantine/charts';
import { Select } from '@mantine/core';

const data1 = [
  { "year": 2022, "month": "January", "label": "Data Point 1", "completed_bookings": 300, "canceled_bookings": 20, "amount_generated": 30000 },
  { "year": 2022, "month": "February", "label": "Data Point 2", "completed_bookings": 250, "canceled_bookings": 30, "amount_generated": 20000 },
  { "year": 2022, "month": "March", "label": "Data Point 3", "completed_bookings": 400, "canceled_bookings": 25, "amount_generated": 40000 },
  { "year": 2022, "month": "April", "label": "Data Point 10", "completed_bookings": 0, "canceled_bookings": 5, "amount_generated": 0 },
  { "year": 2022, "month": "May", "label": "Data Point 11", "completed_bookings": 600, "canceled_bookings": 50, "amount_generated": 63000 },
  { "year": 2022, "month": "June", "label": "Data Point 12", "completed_bookings": 620, "canceled_bookings": 40, "amount_generated": 62000 },
  { "year": 2022, "month": "July", "label": "Data Point 13", "completed_bookings": 650, "canceled_bookings": 35, "amount_generated": 65000 },
  { "year": 2022, "month": "August", "label": "Data Point 17", "completed_bookings": 400, "canceled_bookings": 20, "amount_generated": 40000 },
  { "year": 2022, "month": "October", "label": "Data Point 14", "completed_bookings": 550, "canceled_bookings": 45, "amount_generated": 55000 },
  { "year": 2022, "month": "November", "label": "Data Point 15", "completed_bookings": 540, "canceled_bookings": 30, "amount_generated": 54000 },
  { "year": 2022, "month": "December", "label": "Data Point 16", "completed_bookings": 100, "canceled_bookings": 2, "amount_generated": 10002 },
  { "year": 2023, "month": "January", "label": "Data Point 4", "completed_bookings": 350, "canceled_bookings": 25, "amount_generated": 35000 },
  { "year": 2023, "month": "February", "label": "Data Point 5", "completed_bookings": 225, "canceled_bookings": 20, "amount_generated": 22500 },
  { "year": 2023, "month": "March", "label": "Data Point 6", "completed_bookings": 450, "canceled_bookings": 30, "amount_generated": 45000 },
  { "year": 2023, "month": "April", "label": "Data Point 10", "completed_bookings": 800, "canceled_bookings": 50, "amount_generated": 80000 },
  { "year": 2023, "month": "May", "label": "Data Point 11", "completed_bookings": 630, "canceled_bookings": 40, "amount_generated": 63000 },
  { "year": 2023, "month": "June", "label": "Data Point 12", "completed_bookings": 620, "canceled_bookings": 35, "amount_generated": 62000 },
  { "year": 2023, "month": "July", "label": "Data Point 13", "completed_bookings": 650, "canceled_bookings": 30, "amount_generated": 65000 },
  { "year": 2023, "month": "August", "label": "Data Point 17", "completed_bookings": 400, "canceled_bookings": 25, "amount_generated": 40000 },
  { "year": 2023, "month": "October", "label": "Data Point 14", "completed_bookings": 550, "canceled_bookings": 40, "amount_generated": 55000 },
  { "year": 2023, "month": "November", "label": "Data Point 15", "completed_bookings": 540, "canceled_bookings": 30, "amount_generated": 54000 },
  { "year": 2023, "month": "December", "label": "Data Point 16", "completed_bookings": 100, "canceled_bookings": 2, "amount_generated": 10002 },
  { "year": 2024, "month": "January", "label": "Data Point 4", "completed_bookings": 350, "canceled_bookings": 25, "amount_generated": 35000 },
  { "year": 2024, "month": "February", "label": "Data Point 5", "completed_bookings": 225, "canceled_bookings": 20, "amount_generated": 22500 },
  { "year": 2024, "month": "March", "label": "Data Point 6", "completed_bookings": 450, "canceled_bookings": 30, "amount_generated": 45000 },
  { "year": 2024, "month": "April", "label": "Data Point 10", "completed_bookings": 800, "canceled_bookings": 50, "amount_generated": 80000 },
  { "year": 2024, "month": "May", "label": "Data Point 11", "completed_bookings": 630, "canceled_bookings": 40, "amount_generated": 63000 },
  { "year": 2024, "month": "June", "label": "Data Point 12", "completed_bookings": 620, "canceled_bookings": 35, "amount_generated": 62000 }
  // add more data as needed
];

const years = [...new Set(data1.map(item => item.year.toString()))];

function Demo({h,w}:{h:number,w:number}) {
  const [selectedYear, setSelectedYear] = useState<string | null>(years[0]);

  const filteredData = data1.filter(item => item.year.toString() === selectedYear);

  return (
    <div>
      <Select
        data={years.map(year => ({ value: year, label: year }))}
        value={selectedYear}
        onChange={(year) => setSelectedYear(year)}
        placeholder="Select year"
        label="Year"
        style={{ marginBottom: 20,width:'120px' }}
      />
      <BarChart
        h={h}
        w={w}
        data={filteredData}
        dataKey="month"
        type="stacked"
        series={[
          { name: 'completed_bookings', color: 'violet.6' },
          { name: 'canceled_bookings', color: 'red.6'},
          { name: 'amount_generated', color: 'green.6' },
        ]}
      />
    </div>
  );
}

export default Demo;
