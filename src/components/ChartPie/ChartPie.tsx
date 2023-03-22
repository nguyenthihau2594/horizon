import s from "./ChartPie.module.scss";
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ReactComponent as IconDropUp } from 'assets/img/icons/icon_arrow_drop_up2.svg';

const options: Highcharts.Options = {
  chart: {
    type: "pie",
    animation: false,
    backgroundColor: "transparent",
    height: "345",
    className: "chart_pie",
    margin: [60,0, 120]
  },
  title: {
    text: "Your Pie Chart",
    align: "left",
    style:{
      color: "#fff",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "28px",
      fontFamily: 'DM Sans',
    },
    x: 25,
    y: 25
  },
  exporting: {
    enabled: false,
  },
  xAxis: {
    categories: ["1", "2", "3"],
    lineWidth: 0,
    labels: {
      autoRotationLimit: 100,
      align: 'left',
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
  credits: {
    enabled: false,
  },
  legend: { enabled: false },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      borderWidth: 0 
    },
    series: {
      dataLabels: {
        enabled: false
      }
    },
  },
  series: [
    {
      data: [{
        y: 5.5,
        name: "Point2",
        color: "#7551FF"
      }, {
        y: 2,
        name: "Point1",
        color: "#39B8FF"
      }, {
        y: 2.5,
        name: "Point1",
        color: "#6AD2FF"
      }
      ]
    }
  ] as SeriesOptionsType[]

}

export default function ChartPie() {
  return (
    <div className={s.chart_pie}>
      <div className={s.chart_pie_info}>
        <div className={s.chart_pie_item}>
          <span className={s.name}>Your files</span>
          <strong className={s.info}>63%</strong>
        </div>
        <div className={s.chart_pie_item}>
          <span className={s.name}>System</span>
          <strong className={s.info}>25%</strong>
        </div>
      </div>
      <button type="button" className={s.btn_select_month}>Monthly<IconDropUp /></button>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
