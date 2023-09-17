import { useEffect, useState } from "react";
import EntryFile from "./entryCard";
import { deleteRecord, getAllRecords } from "./service";
import FormOpen from "./openForm";
import { defaultData } from "./constant";
export default function LoadData({ refreshdata }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [isedit, setedit] = useState(false)
    const [selectCardData, setSelectCardData] = useState({})
    useEffect(() => {
        loadRecords()
    }, [refreshdata])
    const loadRecords = () => {
        setLoading(true)
        getAllRecords().then(res => {
            setData(res)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    const deleteCard = (id) => {
        deleteRecord(id).then(res => {
            console.log("deleted successfully")
            loadRecords()
        }).catch(err => {
            console.log("not deleted ")
        })
    }
    const edit = (id, info) => {
        setedit(true)
        setSelectCardData({ id: id, formData: info })
    }
    const onClose = () => {
        setedit(false)
        loadRecords()
    }
    return (
        <>
            {loading ? <div className="flex justify-center items-center h-v-full w-full">
                <p>Loading ...</p>
            </div> :
                !!data.length && <div className="flex flex-row flex-wrap gap-6 p-4 bg-lightgray">
                    {data.map(entry => <EntryFile key={entry.id} data={entry} editCard={(id) => edit(id, entry)} deleteCard={deleteCard} />)}
                </div>
            }
            <FormOpen isopen={isedit} {...selectCardData} onClose={onClose} />
        </>

    )
}

