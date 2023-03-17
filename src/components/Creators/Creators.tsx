import Button  from "components/Button/Button";
import s from "./Creators.module.scss"

export interface CreatorsProps {
    name: string;
    avatar: string;
    artworks: number;
    rating: number
}
interface CreatorsListProps {
    data: CreatorsProps[]
}
export function Creators({ name, avatar, artworks, rating }: CreatorsProps) {
    return (
        <tr className={s.complextable_item}>
            <td className={s.name}>
                <span className={s.avatar}><img src={avatar} alt="" /></span>
                <strong className={s.name_txt}>{name}</strong>
            </td>
            <td className={s.artworks}>{artworks}</td>
            <td className={s.progress}>
                <span className={s.progress_bar}>
                    <span className={s.progress_info} style={{ width: `${rating}%` }}></span>
                </span>
            </td>
        </tr>
    )

}

export default function CreatorsList({ data }: CreatorsListProps) {
    return (
        <div className={s.creators}>
            <strong className={s.title}>Top Creators</strong>
            <table className={s.table}>
                <caption>Top Creators</caption>
                <colgroup>
                    <col style={{ 'width': "50%" }} />
                    <col style={{ 'width': "25%" }} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" >Name</th>
                        <th scope="col" >Artworks</th>
                        <th scope="col" >Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <Creators key={index} name={item.name} rating={item.rating} artworks={item.artworks} avatar={item.avatar} />
                    ))}
                </tbody>
            </table>
            <Button className={s.btn_more}>See all</Button>
        </div>
    )

}