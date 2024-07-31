import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface DataItem {
    year: number;
    month: string;
    label: string;
    value: number;
}

interface ChartDataProps {
    data: DataItem[];
}

const ChartData: React.FC<ChartDataProps> = ({ data }) => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<string>("All");

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(parseInt(event.target.value));
        setMonth("All");
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(event.target.value);
    };

    const filteredData = data.filter((item) => item.year === year);
    const monthlyData =
        month === "All"
            ? filteredData
            : filteredData.filter((item) => item.month === month);

    const chartData = {
        labels: monthlyData.map((item) => item.label),
        datasets: [
            {
                label: `Income for ${year} ${month !== "All" ? month : ""}`,
                data: monthlyData.map((item) => item.value),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 shadow-5xl text-sm">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                    <label className="block text-gray-700">
                        Year:
                        <select
                            value={year}
                            onChange={handleYearChange}
                            className="ml-2 px-3 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        >
                            {[...new Set(data.map((item) => item.year))].map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="block text-gray-700">
                        Month:
                        <select
                            value={month}
                            onChange={handleMonthChange}
                            className="ml-2 px-3 py-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        >
                            <option value="All">All</option>
                            {months.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow sm:h-[350px]">
                <Bar data={chartData} />
            </div>
        </div>
    );
};

export default ChartData;
