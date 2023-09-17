import axios from "axios"
const url = "https://6505266aef808d3c66efccae.mockapi.io/createjob"
const getAllRecords = async () => {
    try {
        const result = await axios.get(url)
        return result.data
    }
    catch (err) {
        console.log(err)
    }

}
const getRecord = async (id) => {
    try {
        const result = await axios.get(`${url}/${id}`)
        return result.data
    }
    catch (err) {
        console.log(err)
    }
}
const updateRecord = async (data, id) => {
    try {
        const result = await axios.put(`${url}/${id}`, data)
        return result.statusText
    }
    catch (err) {
        console.log(err)
    }
}
const deleteRecord = async (id) => {
    try {
        const result = await axios.delete(`${url}/${id}`)
        return result.statusText
    }
    catch (err) {
        console.log(err)
    }
}
const saveRecord = async (data) => {
    try {
        const info = await axios.post(url, data)
        return info.statustext
    }
    catch (err) {
        console.log(err)
    }
}
export {
    saveRecord,
    deleteRecord,
    getAllRecords,
    getRecord,
    updateRecord

}
