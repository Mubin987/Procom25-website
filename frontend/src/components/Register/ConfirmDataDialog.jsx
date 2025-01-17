import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";


const ConfirmDialog = ({ handleSubmit, isOpen, onClose, props }) => {
    const { toast } = useToast();

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="grid gap-6 bg-[linear-gradient(90deg,_#FFFFFF_0%,_#AACFF3_100%)] font-lemonmilk">
                <DialogHeader>
                    <DialogTitle className="italic text-2xl bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] w-full bg-clip-text text-transparent font-bold">Confirm your registration</DialogTitle>
                </DialogHeader>
                <form>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col text-base sm:text-[22px] gap-2 italic bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] w-full bg-clip-text text-transparent font-bold">
                            <div className="flex gap-2">
                                <label>Department:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.department}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Competition:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.competitions}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Team Name:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.teamName}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Name:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.name}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Cnic Number:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.cnicNo}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Email Address:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.emailAddress}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Whatsapp:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.whatsapp}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Reference Code:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.referenceCode}</label>
                            </div>
                            <div className="flex gap-2">
                                <label>Payment Receipt: </label>
                                <a
                                    href={props.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-black opacity-70 not-italic underline"
                                >
                                    Click here
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <DialogFooter className="flex-row">
                    <button
                        className='mr-auto w-[30%] ml-3 text-[13px] sm:text-[22px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'
                        onClick={onClose}
                    >Cancel</button>
                    <button
                        className='w-[30%] ml-3 text-[13px] sm:text-[22px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'
                        onClick={(e) => {
                            e.preventDefault()
                            handleSubmit()
                            toast({
                                variant: "success",
                                title: "Successfully submitted",
                            })
                        }
                        }>Confirm</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmDialog;