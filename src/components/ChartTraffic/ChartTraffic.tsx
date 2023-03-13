import s from "./ChartTraffic.module.scss";
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_rounded from "highcharts-rounded-corners";
import { ReactComponent as Icon_drop_up } from 'assets/img/icons/icon_arrow_drop_up.svg';

const options: Highcharts.Options = {

  chart: {
    type: "column",
    animation: false,
    backgroundColor: "#111C44",
    borderRadius: 20,
    height: "345",
    className: "chart_traffic",
    margin: [100, 10, 60, 10]
  },
  exporting: {
    enabled: false,
  },
  title: {
    text: undefined
  },
  xAxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    lineWidth: 0,
    labels: {
      autoRotationLimit: 100,
      align: 'center',
      style: {
        color: '#A3AED0',
        fontSize: "12px",
        fontWeight: "500",
        fontFamily: "DM Sans",
      }
    },
  },
  yAxis: [
    {
      visible: false
    }
  ],
  legend: { enabled: false },
  credits: {
    enabled: false,
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      maxPointWidth: 14,

    },
    series: {
      stacking: 'percent',
      dataLabels: {
        enabled: false
      }
    },
  },
  series: [
    {
      borderRadiusTopLeft: "50%",
      borderRadiusTopRight: "50%",
      data: [5, 3, 8, 4, 6, 9, 2],
      color: '#7551FF',
    }
  ] as any

}

HC_rounded(Highcharts);

interface ExtendedPlotSeriesOptions extends Highcharts.PlotSeriesOptions {
  borderRadiusTopLeft: string;
}
export default function ChartTraffic() {
  return (
    <div className={s.chart_traffic}>
      <div className={s.chart_traffic_info}>
        <div className={s.info_area}>
          <span className={s.title}>Daily Traffic</span>
          <span className={s.visitors}><strong className={s.number}>2.579</strong>Visitors</span>
        </div>
        <span className={s.statistic_detail}><Icon_drop_up />+2.45%</span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
