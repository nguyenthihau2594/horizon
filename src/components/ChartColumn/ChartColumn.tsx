import s from "./ChartColumn.module.scss";
import Highcharts, { SeriesOptionsType } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HC_rounded from "highcharts-rounded-corners";
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import fullscreen from "highcharts/modules/full-screen";
import { ReactComponent as Icon_calendar } from 'assets/img/icons/icon_calendar.svg';
import { ReactComponent as Icon_drop_up } from 'assets/img/icons/icon_arrow_drop_up.svg';
import IconMenu from 'assets/img/icons/icon_menu.svg';

exporting(Highcharts);
exportData(Highcharts);
fullscreen(Highcharts);

const options: Highcharts.Options = {
 
  chart: {
    type: "column",
    animation: false,
    backgroundColor: "#111C44",
    borderRadius: 20,
    className: "chart_spline",
    margin: [66,18,60,18],
    height: "345",
  },
  exporting: {
    enabled: true,
    buttons: {
      contextButton: {
        menuItems:["viewFullscreen"],
        symbolStroke: "transparent",
        x: -30,
        y:30,
        symbol: `url(${IconMenu})`,
        theme:{
          fill: "transparent",
          stroke:"none",
        },
        symbolSize:33,
        symbolX:33,
        symbolY:33,
        width:33,
        height: 33,
      }
    }
  },
  title: {
    text: "Weekly Revenue",
    align: "left",
    style:{
      color: '#fff',
      fontFamily: 'DM Sans',
      fontWeight: '700',
      fontSize: '24px',
    },
    margin: 13,
    x: 30,
    y: 30
  },
  subtitle: {
    text: ""
  },
  xAxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    lineWidth: 0,
    labels:{
      autoRotationLimit:100,
      align: 'center',
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
  legend:{ enabled:false },
  credits:{
    enabled:false,
   },
   plotOptions: {
       column: {
           stacking: 'normal',
           borderWidth: 0,
           maxPointWidth: 20,
            
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
      data: [7, 5, 4, 6, 3,4,5,2,5],
      color: '#6AD2FF',
    },
    {
      data: [7, 5, 4, 6, 3,4,5,2,5],
      color: '#39B8FF',
    },
    {
      data: [7, 5, 4, 6, 3,4,5,2,5],
      color: '#7551FF',
    }
  ] as SeriesOptionsType[]

}

HC_rounded(Highcharts);

interface ExtendedPlotSeriesOptions extends Highcharts.PlotSeriesOptions {
  borderRadiusTopLeft: string;
}
export default function ChartColumn() {
  return (
    <div className={s.chart_column}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
