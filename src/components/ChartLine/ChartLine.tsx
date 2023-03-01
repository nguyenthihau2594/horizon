import s from "./ChartLine.module.scss";
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
  chart: {
    type: "spline",
    animation: false,
    backgroundColor: "#111C44",
    borderRadius: 20,
    className: "chart1",
    margin: [140,52,70,214]
  },
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },
  xAxis: {
    categories: ["SEP", "OCT", "OCT", "DEC", "JAN", "FEB"],
    lineWidth: 0,
  },
  yAxis: [
    {
      visible: false
    }
  ],
  credits:{
    enabled:false,
   },
  series: [
    {
      marker: {
          enabled: false
      },
      name: undefined,
      data: [1, 0, 4, 7, -4,3],
      yAxis: 0,
      color: '#7551FF',
      lineWidth: 4,
      showInLegend: false,
    },
    {
      marker: {
          enabled: false
      },
      name: undefined,
      data: [3, 2, 5, 1, -8,6],
      yAxis: 0,
      lineWidth: 4,
      showInLegend: false,
    }
  ] as SeriesOptionsType[]

}
export default function ChartLine() {
  return (
    <div className={s.chart_line}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
