import s from "./ComplexTable.module.scss"
import data from "./ComplexTable.json"
import ComplexTableList, {ComplexTableItemProps} from "./ComplexTableList"

type ComplexTableProps = {
    title: string;
    kind ?:boolean
}

export default function ComplexTable({title, kind}: ComplexTableProps){
    return (
       <div className={s.complextable}>
            <strong className={s.title}>{title}</strong>
            <table className={s.table}>
                <caption>Complex Table</caption>
                <colgroup>
                    <col style={{'width' : "30%"}}/>
                    <col style={{'width' : "25%"}}/>
                    <col style={{'width' : "20%"}}/>
                    <col  />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" >NAME</th>
                        <th scope="col" >STATUS</th>
                        <th scope="col" >DATE</th>
                        <th scope="col" >PROGRESS</th>
                    </tr>
                </thead>
                <ComplexTableList items={data as ComplexTableItemProps[]} />
            </table>
            <button type="button" className={s.btn_more}></button>
       </div>
    )

}