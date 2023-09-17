
export default function Form({ children }) {
    return (
        <div className="p-8 w-popup">
            <div className="flex flex-col gap-y-6">
                {children}
           </div>
        </div>
    )
}
