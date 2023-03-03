import s from "./CheckTable.module.scss"
import data from "./CheckTable.json"
import CheckTableList from "./CheckTableList"

type CheckTableProps = {
    title: string;
    kind ?:boolean
}

export default function CheckTable({title, kind}: CheckTableProps){
    return (
       <div className={s.checktable}>
            <strong className={s.title}>{title}</strong>
            <table className={s.table}>
                <caption>Check Table</caption>
                <colgroup>
                    <col style={{'width' : "40%"}}/>
                    <col style={{'width' : "20%"}}/>
                    <col style={{'width' : "20%"}}/>
                    <col  />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" >NAME</th>
                        <th scope="col" >PROGRESS</th>
                        <th scope="col" >QUANTITY</th>
                        <th scope="col" >DATE</th>
                    </tr>
                </thead>
                <CheckTableList items={data}/>
            </table>
            <button type="button" className={s.btn_more}></button>
       </div>
    )

}