import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
import { getLast7Days } from "../../../libs/features";
import { purple, purpleLight } from "../constants/color";



ChartJS.register(
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend
)

const labels = getLast7Days();




const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },

    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    },
};


const LineChart = ({ value = [] }) => {

    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Revenue",
                fill: true,
                backgroundColor: purpleLight,
                borderColor: purple,

            },
        ],

    }
    return (
        <Line data={data} options={lineChartOptions} />
    )
}




// const doughnutChartOptions = {
//     responsive: true,
//     plugins: {
//         legend: {
//             display: false,
//         },
//     },
//     cutout: 120,
// }



// const DoughnutChart = ({ value = [], labels = [] }) => {

//     const data = {
//         labels,
//         datasets: [
//             {
//                 data: value,
//                 label: "Total Chats vs Group Chats",
//                 backgroundColor: [purple, orangeLight],
//                 hoverBackgroundColor: [purple, orange],
//                 borderColor: [purple, orange],
//                 offset: 30,
//             },
//         ],

//     }
//     return (
//         <Doughnut style={{ zIndex: 10 }} data={data} options={doughnutChartOptions} />
//     )
// }

export { LineChart };












































// import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, plugins, PointElement, scales, Tooltip } from "chart.js";
// import { Doughnut, Line } from "react-chartjs-2";
// import { purple, purpleLight } from "../constants/color";


// ChartJS.register(
//     Tooltip,
//     Filler,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     ArcElement,
//     Legend
// )

// const lineChartOptions = {
//     responsive: true,
//     plugins: {
//         legend: {
//             display: false,
//         },
//         title: {
//             display: false,
//         },
//     },

//     scales: {
//         x: {
//             grid: {
//                 display: false,
//             },
//         },
//         y: {
//             beginAtZero: true,
//             grid: {
//                 display: false,
//             },
//         },
//     },
// };


// const LineChart = ({ value = [] }) => {

//     const data = {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [
//             {
//                 data: [1, 22, 45, 6],
//                 label: "Revenue",
//                 fill: true,
//                 backgroundColor: "rgba(75, 12, 192, 0.2)",
//                 borderColor: "rgba(75, 12, 192, 1)",
//             },
//         ],

//     }
//     return (
//         <Line data={data} options={lineChartOptions} />
//     )
// }




// const DoughnutChart = () => {
//     return (
//         <div>charts</div>
//     )
// }

// export { LineChart, DoughnutChart };