import s from "./ComplexTable.module.scss";

import { ReactComponent as Icon_check } from 'assets/img/icons/icon_check2.svg';
import { ReactComponent as Icon_cancel } from 'assets/img/icons/icon_cancel.svg';
import { ReactComponent as Icon_error } from 'assets/img/icons/icon_error.svg';

export interface ComplexTableItemProps {
    name: string,
    status: "Approved" | "Disable" | "Error",
    date: string,
    progress: number,
    id: string,
}

type ComplexTableListProps = {
    items: ComplexTableItemProps[];
}
export function ComplexTableItem(props : ComplexTableItemProps){
    const {status, name,progress,date} = props;
    return (
        <tr className={s.complextable_item}>
            <td className={s.name}>
                <strong className={s.name}>{name}</strong>
            </td>
            <td className={s.status}>
                {status === 'Approved' && <span className={s.info}><Icon_check />Approved</span>  }
                {status === 'Disable' && <span className={s.info}><Icon_cancel />Disable</span>  }
                {status === 'Error' && <span className={s.info}><Icon_error />Error</span>  }
            </td>
            <td className={s.date}>{date}</td>
            <td className={s.progress}>
                <span className={s.progress_bar}>
                    <span className={s.progress_info} style={{width: `${progress}%`}}></span>
                </span>
            </td>
        </tr>
    )
}

export default function ComplexTableList(props: ComplexTableListProps){
    const {items} = props;
    return (
        <tbody>
            {items.map((item,index) => (
                <ComplexTableItem key={index} id={item.id} name={item.name} progress={item.progress} status={item.status} date={item.date} />
            ))}
        </tbody>
    )
}