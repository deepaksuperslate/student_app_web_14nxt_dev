import {
    Table,
    TableBody,
   
    TableCell,
    
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import Link from "next/link"

const assignments = [
    {
        index: 1,
        subject: "/images/pdf.svg",
        topic: "Physics",
        activity: "Friction",
        time: "Lecture Notes",
        status: "In Progress",
        date: "02-11-2024",
        links: "/student/physics/assignments/2"
    },
    {
        index: 2,
        subject: "/images/pdf.svg",
        topic: "Physics",
        activity: "Friction",
        time: "Lecture Notes",
        status: "In Progress",
        date: "02-11-2024",
        links: "/student/physics/assignments/2"
    },
    {
        index: 3,
        subject: "/images/pdf.svg",
        topic: "Physics",
        activity: "Friction",
        time: "Lecture Notes",
        status: "In Progress",
        date: "02-11-2024",
        links: "/student/physics/assignments/2"
    },

]


export default function AssignmentsTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-black">Type</TableHead>
                    <TableHead className="text-black">Topic</TableHead>
                    <TableHead className="text-black">Activity Type</TableHead>
                    <TableHead className="text-black">Time</TableHead>
                    <TableHead className="text-black">Status</TableHead>
                    <TableHead className="text-black">Review Date</TableHead>
                    <TableHead className="text-black">Links</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {assignments.map((assigment) => (
                    <TableRow key={assigment.index}>
                        <TableCell >
                            <Image
                                src="/images/pdf.svg"
                                alt="Picture of the author"
                                width={24}
                                height={24}
                            />
                            
                        </TableCell>
                        <TableCell className="font-medium">{assigment.topic}</TableCell>
                        <TableCell className="font-medium">{assigment.activity}</TableCell>
                        <TableCell className="font-medium">{assigment.time}</TableCell>
                        <TableCell className="font-medium">{assigment.status}</TableCell>
                        <TableCell className="font-medium">{assigment.date}</TableCell>
                        <TableCell className="font-medium">
                            <Link href="/student/subjects/physics/assignments/2">
                            <Image
                                src="/images/LinkButton.svg"
                                alt="Picture of the author"
                                width={36}
                                height={36}
                            />
                            </Link>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}