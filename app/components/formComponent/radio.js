import Label from "./label";

export default function Radio(props) {
    const { label, handleClick, value, ...rest } = props
    return (
        <div className="flex items-center gap-x-1">
            <input type="radio" id={label} className="w-5 h-5" {...rest} name="radio" value={value || label} onChange={handleClick} />
            <Label className="text-gray" label={label} />
        </div>
    )
}
