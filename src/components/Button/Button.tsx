
import cx from "classnames";
import s from "./Button.module.scss";

type ButtonProps = {
	children: string,
	className?: string,
	isfullWidth?:boolean,
	onClick?: () => void,
}

export default function Button({children, className, isfullWidth = false, onClick} : ButtonProps) {
	return (
		<button type="button" className={cx(`${className && className}`, s.btn, { [s.full_size]: isfullWidth })} onClick={onClick}>{children}</button>
	);
}
