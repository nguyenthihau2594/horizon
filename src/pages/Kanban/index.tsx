
import Card, { CardProps } from "components/Card/Card";
import MainTop from "components/MainTop/MainTop";
import LNB from "layout/LNB";
import s from "./index.module.scss";
import data from "./Kanban.json"

const data1= data.slice(0,3);
const data2= data.slice(3,6);
const data3= data.slice(6,9)

export default function Kanban() {
  return (
    <div className={s.wrap}>
      <MainTop />
      <div className={s.content}>
        <Card kind="Backlog" data={data1 as CardProps[]} />
        <Card kind="In progress" data={data2 as CardProps[]} />
        <Card kind="Done" data={data3 as CardProps[]} />
      </div>
    </div>
  );
}
