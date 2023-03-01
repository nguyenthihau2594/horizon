
import MainTop from "components/MainTop/MainTop";
import StatisticalList from "components/Statistical/StatisticalList";
import s from "./index.module.scss";
import data from "components/Statistical/Statistical.json"
import { StatisticalItemProps } from "components/Statistical/StatisticalItems";
import  ChartLine  from "components/ChartLine/ChartLine";

export default function Dashboard() {
  return (
    <div className={s.wrap}>
      <MainTop />
      <StatisticalList data = {data as StatisticalItemProps[]} />
      <div className={s.chart}>
        <ChartLine />
      </div>
    </div>
  );
}
