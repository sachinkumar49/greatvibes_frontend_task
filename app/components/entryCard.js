import Button from "./button";
import Card from "./card";
import Image from 'next/image'
import Label from "./formComponent/label";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { iconList } from "./constant";


export default function EntryFile({ data, editCard, deleteCard }) {
    const numFor = Intl.NumberFormat('en-US');
    const minSalary = numFor.format(data.salarymin);
    const maxSalary = numFor.format(data.salarymax)
    const rendompickSelector = data.id % 4;
    return (
        <div className="w-45" key={data.id}>
            <Card>
                <div className="py-4 px-6 flex flex-row gap-x-2">
                    <div>
                        <Image src={`/${iconList[rendompickSelector]}.png`} width={48} height={48} alt="netflix" />
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col">
                            <Label className="text-2xl"> {data.jobtitle}</Label>
                            <Label className="text-xm">{data.companyname} - {data.industry} </Label>
                            <Label className="text-xm text-secondarygray">{data.location}, ({data.worktype}) </Label>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label className="text-xm">Part Time (9:00 am - 5:00 pm IST)</Label>
                            <Label className="text-xm">Experience ({data.expmin} - {data.expmax} years)</Label>

                            <Label className="text-xm">INR (₹) {minSalary} - {maxSalary} /month</Label>

                            <Label className="text-xm"> {data.totalemp} employees</Label>

                        </div>
                        <div className="flex flex-row gap-x-6 h-10">
                            <Button className={`${data.applytype === "Quick apply" ? 'text-white box-content bg-primary' : 'border border-primary box-content text-primary'}`}>
                                {data.applytype === "Quick apply" ? "Apply Now" : "External Apply"}</Button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-3 justify-end grow">
                        <span onClick={(e) => editCard(data.id, data)} className="cursor-pointer h-6">
                            <PencilIcon className="h-6 w-6 text-primary" />
                        </span>
                        <span onClick={(e) => deleteCard(data.id)} className="cursor-pointer h-6">
                            <TrashIcon className="h-6 w-6 text-error" />
                        </span>

                    </div>
                </div>
            </Card>
        </div>
    )
}
