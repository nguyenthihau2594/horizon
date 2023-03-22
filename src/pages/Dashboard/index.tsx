
import MainTop from "components/MainTop/MainTop";
import StatisticalList from "components/Statistical/Statistical";
import s from "./index.module.scss";
import data from "components/Statistical/Statistical.json"
import dataLight from "components/Statistical/StatisticalLight.json"
import dataTable from "../../components/CheckTable/CheckTable.json"
import { StatisticalItemProps } from "components/Statistical/Statistical";
import  ChartLine  from "components/ChartLine/ChartLine";
import ChartColumn from "components/ChartColumn/ChartColumn";
import CheckTable from "components/CheckTable/CheckTable";
import ChartTraffic from "components/ChartTraffic/ChartTraffic";
import ChartPie from "components/ChartPie/ChartPie";
import ComplexTable, { ComplexTableItemProps } from "components/ComplexTable/ComplexTable";
import Tasks  from "components/Tasks/Tasks";
import Calendar from "components/Calendar/Calendar";
import Course from "components/Course/Course";
import Team from "components/Team/Team";
import { Cards } from "components/Cards/Cards";
import { Starbucks } from "components/Starbucks/Starbucks";
import dataComplex from "../../components/ComplexTable/ComplexTable.json"
import { useContext } from "react";
import { ThemeContext } from "hook/ThemeContext";

export default function Dashboard() {
  const context = useContext<any>(ThemeContext)
  return (
    <div className={s.wrap}>
      <MainTop />
      <div className={s.main_content}>
        <StatisticalList data = {context.theme === 'light' ? dataLight as StatisticalItemProps[] : data as StatisticalItemProps[]} />
        {/* <StatisticalList data = {data as StatisticalItemProps[]} /> */}
        <ChartLine />
        <ChartColumn />
        <CheckTable arrange={false} data={dataTable} />
        <ChartTraffic />
        <ChartPie />
        <ComplexTable data={dataComplex as ComplexTableItemProps[]} />
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
