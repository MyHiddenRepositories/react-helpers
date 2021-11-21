import { Line } from "react-chartjs-2";



const data = (canvas) => {
  const ctx = canvas.getContext('2d');
  var gradient = ctx.createLinearGradient(20, 0, 0, 80);
  gradient.addColorStop(0, 'rgba(255,0,0,1)');
  gradient.addColorStop(0.5, 'rgba(0,255,0,1)');
  gradient.addColorStop(1, 'rgba(0,0,255,1)');

  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65],
        // borderColor: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(44,0,255,1) 50%, rgba(204,255,0,1) 100%)"
        borderColor: gradient,
        tension: 0.4,
        borderWidth: 6
      },
    ]
  }
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  }
};

export const ChartContainer = () => {
    return <Line
        data={data}
        options={options}
    />
}