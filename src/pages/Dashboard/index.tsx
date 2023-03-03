
import MainTop from "components/MainTop/MainTop";
import StatisticalList from "components/Statistical/StatisticalList";
import s from "./index.module.scss";
import data from "components/Statistical/Statistical.json"
import { StatisticalItemProps } from "components/Statistical/StatisticalItems";
import  ChartLine  from "components/ChartLine/ChartLine";
import ChartColumn from "components/ChartColumn/ChartColumn";
import CheckTable from "components/CheckTable/CheckTable";
import ChartTraffic from "components/ChartTraffic/ChartTraffic";

export default function Dashboard() {
  return (
    <div className={s.wrap}>
      <MainTop />
      <div className={s.main_content}>
        <StatisticalList data = {data as StatisticalItemProps[]} />
        <ChartLine />
        <ChartColumn />
        <CheckTable title="Check Table" />
        <ChartTraffic />
      </div>
    </div>
  );
}
