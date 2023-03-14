import { Button } from "components/Button/Button";
import s from "./History.module.scss"

export interface HistoryProps {
    name: string;
    author: string,
    thumb: string;
    bid: number;
    time: string
}
interface HistoryListProps {
    data: HistoryProps[]
}
export function History({ name, author, thumb, bid, time }: HistoryProps) {
    return (
        <div className={s.history_info}>
            <span className={s.thumb}><img src={thumb} alt="" /></span>
            <div className={s.text}>
                <strong className={s.name}>{name}</strong>
                <span className={s.author}>{author}</span>
            </div>
            <strong className={s.bid}>{bid}</strong>
            <span className={s.time}>{time} ago</span>
        </div>
    )

}

export default function HistoryList({ data }: HistoryListProps) {
    return (
        <div className={s.history}>
            <strong className={s.title}>Top Creators</strong>
            <ul className={s.history_list}>
                {data.map((item,index) => {
                    return (
                        <History key={index} name={item.name} author={item.author} thumb={item.thumb} bid={item.bid} time={item.time} />
                    )
                })}
            </ul>
            <Button className={s.btn_more}>See all</Button>
        </div>
    )

}