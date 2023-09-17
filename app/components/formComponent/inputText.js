
import Label from './label'
export default function InputText(props) {
    const { handleClick, label, required, ...rest } = props
   
    return (
        <div className="w-full h-15 flex flex-col gap-y-1">
            <Label required={required} label={label} className="text-sm"/>
            <input {...rest} onChange={handleClick} className="w-full h-9 rounded-md border-lightgray border focus:border-primary outline-none px-2 py-2.5 gap-2" />
        </div>


    )

}
