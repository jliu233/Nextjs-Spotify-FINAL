import classnames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classnames.bind(styles)

const Button = ({ 
    label = "Default label", 
    size,
    type
}) => {
    const btnClasses = cx({
        btn: true,
        secondary: type === "secondary",
        [`size-${size}`]: size,
    });
    return <button className={btnClasses}>{label}</button>
}
export default Button