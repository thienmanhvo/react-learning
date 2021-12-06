import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //const maxValue = props.dataPoints.sort((a, b) => b.value - a.value)[0].value;
  const maxValue = Math.max(...props.dataPoints.map((w) => w.value));
  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            label={data.label}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
