
import CheckTable from "components/CheckTable/CheckTable";
import DevelopTable, { DevelopTableProps } from "components/DevelopTable/DevelopTable";
import MainTop from "components/MainTop/MainTop";
import ColumnTable from "components/ColumnTable/ColumnTable";
import ComplexTable, { ComplexTableItemProps } from "components/ComplexTable/ComplexTable";
import s from "./index.module.scss";

import data from "../../components/DevelopTable/DevelopTable.json"
import dataTable from "./CheckTable.json"
import dataColumn from "./ColumnTable.json"
import dataComplex from "../../components/ComplexTable/ComplexTable.json"

export default function Tables() {
  return (
    <div className={s.wrap}>
      <MainTop />
      <div className={s.content}>
        <DevelopTable data={data as DevelopTableProps[]} arrange={true} />
        <CheckTable arrange={true} data = {dataTable} />
        <ColumnTable arrange={true} data={dataColumn} />
        <ComplexTable arrange={true} data={dataComplex as ComplexTableItemProps[]} />
      </div>
    </div>
  );
}
