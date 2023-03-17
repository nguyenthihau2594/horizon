import s from "./CheckTable.module.scss"
import cx from "classnames"
import { ReactComponent as DropUp } from 'assets/img/icons/icon_arrow_down2.svg';

export interface CheckTableItemProps {
    check?: boolean,
    name: string,
    progress: number,
    quantity: number,
    date: string,
    id: string,
}

interface CheckTableListProps {
    arrange?: boolean;
    data: CheckTableItemProps[];
}
function CheckTableItem({ check, name, progress, quantity, date, id }: CheckTableItemProps) {
    return (
        <tr className={s.checktable_item}>
            <td className={s.name}>
                <input type="checkbox" id={id} defaultChecked={check} className={s.inp_checkbox} />
                <label htmlFor={id} className={s.inp_label}>{name}</label>
            </td>
            <td className={s.progress}>{progress}%</td>
            <td className={s.quantity}>{quantity}</td>
            <td className={s.date}>{date}</td>
        </tr>
    )
}

export default function CheckTableList({ arrange, data }: CheckTableListProps) {
    return (
        <div className={s.checktable}>
            <strong className={s.title}>Check Table</strong>
            <table className={s.table}>
                <caption>Check Table</caption>
                <colgroup>
                    <col style={{ 'width': "40%" }} />
                    <col style={{ 'width': "20%" }} />
                    <col style={{ 'width': "20%" }} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp /></button>) : "NAME"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })}>{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp /></button>) : "PROGRESS"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })}>{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp /></button>) : "QUANTITY"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })}>{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp /></button>) : "DATE"}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <CheckTableItem key={index} check={item.check} name={item.name} date={item.date} quantity={item.quantity} progress={item.progress} id={item.id} />
                        )
                    })}
                </tbody>
            </table>
            <button type="button" className={s.btn_more}></button>
        </div>
    )
}