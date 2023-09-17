"use client"
const Button = ({ children, onclick, className = '', disabled }) => {
    return (
        <button onClick={onclick} disabled={disabled} className={`py-2 px-3 rounded-lg ${className}`}  >{children}</button>
    )
}
export default Button 
