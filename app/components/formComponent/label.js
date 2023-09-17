export default function Label(props) {
    const { required, children, label, className } = props
    let customClass = required ? `requiredast` : ""
        customClass = className ? `${className} ${customClass} ` : customClass
    return (
        <label htmlFor={label} className={`${customClass}`}>{children || label}</label>
    )
}
