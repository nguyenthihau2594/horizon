import s from "./ComplexTable.module.scss"
import cx from "classnames"
import { ReactComponent as IconCheck } from 'assets/img/icons/icon_check2.svg';
import { ReactComponent as IconCancel } from 'assets/img/icons/icon_cancel.svg';
import { ReactComponent as IconError } from 'assets/img/icons/icon_error.svg';
import {ReactComponent as DropUp} from 'assets/img/icons/icon_arrow_down2.svg';

export interface ComplexTableItemProps {
    name: string,
    status: "Approved" | "Disable" | "Error",
    date: string,
    progress: number,
    id: string,
}

type ComplexTableListProps = {
    arrange?: boolean;
    data: ComplexTableItemProps[];
}
function ComplexTableItem(props: ComplexTableItemProps) {
    const { status, name, progress, date } = props;
    return (
        <tr className={s.complextable_item}>
            <td className={s.name}>
                <strong className={s.name}>{name}</strong>
            </td>
            <td className={s.status}>
                {status === 'Approved' && <span className={s.info}><IconCheck />Approved</span>}
                {status === 'Disable' && <span className={s.info}><IconCancel />Disable</span>}
                {status === 'Error' && <span className={s.info}><IconError />Error</span>}
            </td>
            <td className={s.date}>{date}</td>
            <td className={s.progress}>
                <span className={s.progress_bar}>
                    <span className={s.progress_info} style={{ width: `${progress}%` }}></span>
                </span>
            </td>
        </tr>
    )
}

export default function ComplexTable({arrange,data}: ComplexTableListProps) {
    return (
        <div className={s.complextable}>
            <strong className={s.title}>Complex Table</strong>
            <table className={s.table}>
                <caption>Complex Table</caption>
                <colgroup>
                    <col style={{ 'width': "30%" }} />
                    <col style={{ 'width': "25%" }} />
                    <col style={{ 'width': "20%" }} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "NAME"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "STATUS"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "DATE"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "PROGRESS"}</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <ComplexTableItem key={index} id={item.id} name={item.name} progress={item.progress} status={item.status} date={item.date} />
                    ))}
                </tbody>
            </table>
            <button type="button" className={s.btn_more}></button>
        </div>
    )
}