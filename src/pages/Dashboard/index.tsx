
import MainTop from "components/MainTop/MainTop";
import StatisticalList from "components/Statistical/StatisticalList";
import s from "./index.module.scss";
import data from "components/Statistical/Statistical.json"
import { StatisticalItemProps } from "components/Statistical/StatisticalItems";
import  ChartLine  from "components/ChartLine/ChartLine";
import ChartColumn from "components/ChartColumn/ChartColumn";
import CheckTable from "components/CheckTable/CheckTable";
import ChartTraffic from "components/ChartTraffic/ChartTraffic";
import ChartPie from "components/ChartPie/ChartPie";
import ComplexTable from "components/ComplexTable/ComplexTable";
import Tasks  from "components/Tasks/Tasks";
import Calendar from "components/Calendar/Calendar";
import Course from "components/Course/Course";
import Team from "components/Team/Team";
import { Cards } from "components/Cards/Cards";
import { Starbucks } from "components/Starbucks/Starbucks";

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
        <ChartPie />
        <ComplexTable title="Complex Table" />
        <Tasks />
        <Calendar/> 
        <Course />
        <Team />
        <Cards />
        <Starbucks />
      </div>
    </div>
  );
}
