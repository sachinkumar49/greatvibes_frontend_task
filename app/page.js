"use client"
import { useState } from "react";
import Button from "./components/button";
import LoadData from "./components/loaddata";
import FormOpen from "./components/openForm";
import { defaultData } from './components/constant'
export default function Home() {
  const [open, setOpenPopup] = useState(false)
  const click = () => {
    setOpenPopup(true)
    console.log(defaultData)
  }
  const onClose = () => {
    setOpenPopup(false)
  }


  return (
    <div className="p-2">
      <div className="pl-3 pb-3">
        <Button onclick={click} className="text-white bg-primary">Create Job</Button>
      </div>
      <FormOpen formdata={defaultData} isopen={open} onClose={onClose} />
      <LoadData refreshdata={open} />
    </div>
  )
}
