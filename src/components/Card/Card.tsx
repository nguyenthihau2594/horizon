import s from "./Card.module.scss"
import cx from "classnames"
import Button  from "components/Button/Button";
import { ReactComponent as IconEdit } from 'assets/img/icons/icon_edit.svg';
import { ReactComponent as IconPlus } from 'assets/img/icons/icon_plus.svg';

export interface CardProps {
    title: string;
    thumb?: string;
    content: string;
    user: string[];
    status: "updates" | "pending" | "done" | "errors";
}

interface dataProp {
    dataItem: CardProps;
}

interface CardListProps {
    kind: string;
    data: CardProps[];
}
function CardItem({dataItem}: dataProp) {
    const  {title, thumb, content, user, status} = dataItem;
    return (
        <div className={s.card_item}>
            <strong className={s.card_title}>{title}</strong>
            {thumb && <span className={s.card_thumb}><img src={thumb} alt="" /></span>}
            <p className={s.card_desc}>{content}</p>
            <div className={s.card_bottom}>
                <div className={s.user}>
                    <>
                        {user.map((item, index) => <span className={s.avatar} key={index}><img src={item} alt="" /></span>)}
                        <span className={s.num_plus}>18+</span>
                    </>
                </div>
                {status === "updates" && <Button className={cx(s.btn_status, s.btn_status_update)}>UPDATES</Button>}
                {status === "pending" && <Button className={cx(s.btn_status, s.btn_status_pending)}>pending</Button>}
                {status === "done" && <Button className={cx(s.btn_status, s.btn_status_done)}>done</Button>}
                {status === "errors" && <Button className={cx(s.btn_status, s.btn_status_errors)}>errors</Button>}
            </div>
            <button type="button" className={s.btn_edit}><IconEdit /></button>
        </div>
    )
}

export default function Card({ kind, data }: CardListProps) {
    return (
        <div className={s.kanban}>
            <strong className={s.title}>{kind}</strong>
            <ul className={s.card_list}>
                {data.map((item,index) => {
                    return (
                        <CardItem key={index} dataItem={item} />
                    )
                })}
            </ul>
            <button type="button" className={s.btn_add}><IconPlus /></button>
        </div>
    )
}