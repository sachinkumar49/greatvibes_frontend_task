import { useEffect, useState } from "react";
import Popup from "./popup";
import Step1 from "./step1";
import Step2 from "./step2";
import { saveRecord, updateRecord } from "./service";
export default function FormOpen({ formData, onClose, isopen, id }) {
    const [saveFirst, setSaveFirst] = useState(false)
    const [jobDetails, setJobDetails] = useState(formData)
    const [open, setOpenPopup] = useState(isopen)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const onClosed = () => {
        if (onClose) {
            onClose()
            setSaveFirst(false)
            setJobDetails(formData)
        } else {
            setOpenPopup(false)
        }
    }
    useEffect(() => {
        setOpenPopup(isopen)
    }, [isopen])
    useEffect(() => {
        setJobDetails(formData)
    }, [formData])
    const onNext = (obj) => {
        const newObj = { ...jobDetails, ...obj }
        setJobDetails(newObj)
        setSaveFirst(true)
    }
    const onSave = (data) => {
        saveData(data)
    }
    const saveData = (obj) => {
        const func = id ? updateRecord : saveRecord
        setLoading(true)
        setError('')
        func(obj, id).then(res => {
            console.log("saved")
            setLoading(false)
            onClosed()
        }).catch(err => {
            setLoading(false)
            setError(err)
            console.log("failed to save")
        })
    }
    return (
        <Popup open={open} onClose={onClosed}>
            {saveFirst ? <Step2 data={jobDetails} loading={loading} error={error} onsave={onSave} /> : <Step1 data={jobDetails} onnext={onNext} />}
        </Popup>
    )
}
