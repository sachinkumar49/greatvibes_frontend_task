"use client"
import { Dialog } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Card from './card'

export default function Popup({ children, open, onClose }) {
    let [isOpen, setIsOpen] = useState(open)
    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const onCloseTest = (e) => {
        onClose(e)
    }
    return (
        <Dialog
            open={isOpen}
            onClose={onCloseTest}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <div className="shadow-lg">
                    <Card>
                        {children}
                    </Card>
                </div>
            </div>
        </Dialog>
    )
}
