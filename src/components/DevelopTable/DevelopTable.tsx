import s from "./DevelopTable.module.scss"
import cx from "classnames"
import {ReactComponent as DropUp} from 'assets/img/icons/icon_arrow_down2.svg';

export interface DevelopTableProps {
    name: string;
    operatingSystem: string[];
    date: string,
    progress: number
}

interface DevelopTableListProps {
    arrange?: boolean;
    data: DevelopTableProps[]
}
function DevelopTableItem({ name, operatingSystem, date, progress }: DevelopTableProps) {
    return (
        <tr className={s.complextable_item}>
            <td className={s.name}>{name}</td>
            <td className={s.operating_system}>
                {operatingSystem.map((item,index) =>{
                    return (
                        <span className={s.icon_logo} key={index}><img src={item} alt="" /></span>
                    )
                })}
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

export default function DevelopTable({ arrange = false, data }: DevelopTableListProps) {
    return (
        <div className={s.develop}>
            <strong className={s.title}>Development Table</strong>
            <table className={s.table}>
                <caption>Top Creators</caption>
                <colgroup>
                    <col style={{ 'width': "25%" }} />
                    <col style={{ 'width': "25%" }} />
                    <col style={{ 'width': "25%" }} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "Name"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "Operating System"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "Date"}</th>
                        <th scope="col" className={cx({ [s.arrange_title]: arrange })} >{arrange === true ? (<button type="button" className={s.arrange}>Title<DropUp/></button>) : "PROGRESS"}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <DevelopTableItem key={index} name={item.name} operatingSystem={item.operatingSystem}  date={item.date}  progress={item.progress}  />
                    ))}
                </tbody>
            </table>
            <button type="button" className={s.btn_more}></button>
        </div>
    )

}