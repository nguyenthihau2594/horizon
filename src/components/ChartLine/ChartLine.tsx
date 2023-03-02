import s from "./ChartLine.module.scss";
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ReactComponent as Icon_calendar } from 'assets/img/icons/icon_calendar.svg';
import { ReactComponent as Icon_drop_up } from 'assets/img/icons/icon_arrow_drop_up.svg';

const options: Highcharts.Options = {
  chart: {
    type: "spline",
    animation: false,
    backgroundColor: "#111C44",
    borderRadius: 20,
    className: "chart_spline",
    margin: [100,32,70,194]
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
    labels:{
      autoRotationLimit:100,
      align: 'left',
      style : {
        color:'#A3AED0',
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
      <div className={s.statistic}>
        <button type="button" className={s.btn_calendar}><Icon_calendar />This month</button>
        <strong className={s.money}>$37.5K</strong>
        <span className={s.statistic_info}>
          <span className={s.statistic_txt}>Total Spent</span>
          <span className={s.statistic_detail}><Icon_drop_up />+2.45%</span>
        </span>
        <div className={s.check_group}>
          <input type="checkbox" className={s.inp_check} id="on_track" defaultChecked />
          <label htmlFor="on_track" className={s.check_label}>On track</label>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
