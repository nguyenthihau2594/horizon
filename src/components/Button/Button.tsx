
import cx from "classnames";
import s from "./Button.module.scss";

type ButtonProps = {
	children: string,
	className?: string,
	isfullWidth?:boolean
}

export function Button({children, className, isfullWidth = false} : ButtonProps) {
	return (
		<button type="button" className={cx(`${className && className}`, s.btn, { [s.full_size]: isfullWidth })}>{children}</button>
	);
}
