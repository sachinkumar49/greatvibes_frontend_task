import Form from "./form"
import InputText from "./formComponent/inputText"
import Button from "./button"
import Radio from "./formComponent/radio"
import Label from "./formComponent/label"
import { useState } from "react"
import { defaultData } from "./constant"
import ErrorText from "./formComponent/errorText"
export default function Step2({ data = defaultData, onsave, loading, error = '' }) {
    const [secondPage, setSecondPage] = useState(data)
    const click = (name, val) => {
        const obj = { ...secondPage };
        obj[name] = val
        setSecondPage(obj)
    }
    return (
        <Form>
            <div className="flex justify-between">
                <p className="text-xl">Create a Job</p>
                <p className="text-xl">step 2</p>
            </div>
            <div className="flex flex-col gap-y-6">
                <div className="flex justify-between gap-6 items-end">
                    <InputText type="number" min="0" label="Experience" value={secondPage.expmin} placeholder="Minimum" handleClick={(e) => click("expmin", e.target.value)}></InputText>
                    <InputText type="number" min={secondPage.expmin || "0"} value={secondPage.expmax} label="" placeholder="Maximum" handleClick={(e) => click("expmax", e.target.value)}></InputText>
                </div>
                <div className="flex justify-between gap-6 items-end">
                    <InputText type="number" label="Salary" placeholder="Minimum" value={secondPage.salarymin} handleClick={(e) => click("salarymin", e.target.value)}></InputText>
                    <InputText type="number" label="" placeholder="Maximum" value={secondPage.salarymax} handleClick={(e) => click("salarymax", e.target.value)}></InputText>
                </div>
                <InputText type="text" label="Total employee" value={secondPage.totalemp} placeholder="ex. 100" handleClick={(e) => click("totalemp", e.target.value)}></InputText>
                <div className="flex flex-col gap-y-1 h-15 w-full">
                    <Label className="text-sm">Apply type</Label>
                    <div className="flex gap-4 items-center h-9" >
                        <Radio label="Quick apply" checked={secondPage.applytype === "Quick apply"} handleClick={(e) => click("applytype", e.target.value)} ></Radio>
                        <Radio label="External apply" checked={secondPage.applytype === "External apply"} handleClick={(e) => click("applytype", e.target.value)} ></Radio>
                    </div>
                </div>
            </div>
            <div className="flex mt-16 justify-between">
                <div>
                    {error && <ErrorText label={`Data is not saved ${error}`} />}
                </div>
                <Button className="bg-primary text-white disabled:cursor-default disabled:opacity-70" disabled={loading} onclick={(e) => onsave(secondPage)}>Save {loading ? '...' : ''}</Button>
            </div>
        </Form>
    )
}
