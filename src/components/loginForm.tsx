import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import Link from "next/link"

export function LoginFormTest({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Sign In</CardTitle>

                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="Name">Name</Label>
                                <Input
                                    id="Name"
                                    type="text"
                                    placeholder="Abhiram"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="RollNo">Roll No</Label>

                                </div>
                                <Input id="RollNo" type="number" placeholder="23" required />
                            </div>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <Label htmlFor="Grade">Grade</Label>
                                    <Select>
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue placeholder="I" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">I</SelectItem>
                                            <SelectItem value="dark">II</SelectItem>
                                            <SelectItem value="system">III</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mx-2">
                                    <Label htmlFor="Section">Section</Label>
                                    <Select>
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue placeholder="A" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">A</SelectItem>
                                            <SelectItem value="dark">B</SelectItem>
                                            <SelectItem value="system">C</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="School">School</Label>
                                <Input
                                    id="text"
                                    type="text"
                                    placeholder="SSPS"
                                    required
                                />
                            </div>
                            <Button asChild type="submit" className="w-full" style={{
                                backgroundColor: "#21C17C"
                            }}>
                                <Link href="/student/dashboard">Student Login</Link>
                            </Button>
                            {/* <Button asChild type="submit" className="w-full">
                                <Link href="/teacher/dashboard">Teacher Login</Link>
                            </Button> */}
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
