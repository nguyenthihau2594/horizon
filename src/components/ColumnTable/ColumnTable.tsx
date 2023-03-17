import s from "./ColumnTable.module.scss"
import cx from "classnames"
import {ReactComponent as DropUp} from 'assets/img/icons/icon_arrow_down2.svg';

export interface ColumnTableProps {
    name: string;
    progress: number;
    quantity: number;
    date: string;
}

interface ColumnTableListProps {
    arrange?: boolean;
    data: ColumnTableProps[];
}
function ColumnTableItem({ name, progress, date, quantity }: ColumnTableProps) {
    return (
        <tr className={s.complextable_item}>
            <td className={s.name}>{name}</td>
            <td className={s.progress}>{progress}</td>
            <td className={s.quantity}>{quantity}</td>
            <td className={s.date}>{date}</td>
        </tr>
    )
}

export default function ColumnTable({ arrange = false, data }: ColumnTableListProps) {
    return (
        <div className={s.develop}>
            <strong className={s.title}>4-Column Table</strong>
            <table className={s.table}>
                <caption>4-Column Table</caption>
                <colgroup>
                    <col style={{ 'width': "25%" }} />
                    <col style={{ 'width': "25%" }} />
                    <col style={{ 'width': "25%" }} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "NAME"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "PROGRESS"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "QUANTITY"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "DATE"}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <ColumnTableItem key={index} name={item.name} quantity={item.quantity}  date={item.date}  progress={item.progress}  />
                    ))}
                </tbody>
            </table>
            <button type="button" className={s.btn_more}></button>
        </div>
    )
}