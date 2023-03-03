import s from "./CheckTable.module.scss"

interface CheckTableItemProps {
    check ?:boolean,
    name: string,
    progress: number,
    quantity: number,
    date: string,
    id: string,
}

type CheckTableListProps = {
    items: CheckTableItemProps[];
}
export function CheckTableItem(props : CheckTableItemProps){
    const {check, name,progress,quantity,date,id} = props;
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

export default function CheckTableList(props: CheckTableListProps){
    const {items} = props;
    return (
        <tbody>
            {items.map((item,index) => (
                <CheckTableItem key={index} id={item.id} name={item.name} progress={item.progress} quantity={item.quantity} date={item.date} check={item.check} />
            ))}
        </tbody>
    )
}