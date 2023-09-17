import Form from "./form"
import InputText from "./formComponent/inputText"
import Button from "./button"
import { useState } from "react"
import ErrorText from "./formComponent/errorText"
import { defaultData, requiredField } from './constant'
export default function Step1({ data = defaultData, onnext }) {
    const [firstPage, setFirstPage] = useState({
        ...data
    })
    const [disabledField, setDisabled] = useState(false)
    const click = (name, value) => {
        const obj = { ...firstPage }
        obj[name] = value
        setFirstPage(obj)
    }
    const checkDisabled = (e) => {
        const disable = requiredField.every(ele => firstPage[ele])
        setDisabled(!disable)
        if (disable) {
            onnext(firstPage)
        }

    }
    return (
        <Form>
            <div className="flex justify-between">
                <p className="text-xl">Create a job</p>
                <p className="text-xl">step 1</p>
            </div>
            <div className="flex flex-col gap-y-6">
                <InputText type={"text"} label="Job title" value={firstPage.jobtitle} placeholder="Ex. UX UI Designer" required handleClick={(e) => click("jobtitle", e.target.value)}></InputText>
                <InputText type={"text"} label="Company name" value={firstPage.companyname} placeholder="Ex. Google" required handleClick={(e) => click("companyname", e.target.value)}></InputText>
                <InputText type={"text"} label="Industry" value={firstPage.industry} placeholder="Ex. Information Technology" required handleClick={(e) => click("industry", e.target.value)}></InputText>
                <div className="flex justify-between gap-6">
                    <InputText type={"text"} label="Location" value={firstPage.location} placeholder="Ex. Chennai" handleClick={(e) => click("location", e.target.value)}></InputText>
                    <InputText type="text" label="Remote work" value={firstPage.worktype} placeholder="Ex. In-office" handleClick={(e) => click("worktype", e.target.value)}></InputText>
                </div>
            </div>
            <div className="flex mt-16 justify-between">
                <div>
                    {disabledField && <ErrorText label="Required Field is missing" />}
                </div>
                <Button className="bg-primary text-white" onclick={checkDisabled}>Next</Button>
            </div>
        </Form>
    )
}
