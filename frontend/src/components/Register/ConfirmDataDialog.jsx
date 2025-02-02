import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";


const ConfirmDialog = ({ handleSubmit, isOpen, onClose, props, members }) => {
    const { toast } = useToast();
    const [currentMember, setCurrentMember] = useState(0);

    // Filter out empty members
    const validMembers = members.filter(member => 
        member && member.name && member.cnicNo && member.emailAddress && member.whatsapp
    );

    const handleNext = () => {
        setCurrentMember((prev) => (prev + 1) % (validMembers.length + 1));
    };

    const handlePrev = () => {
        setCurrentMember((prev) => (prev - 1 + validMembers.length + 1) % (validMembers.length + 1));
    };

    const getCurrentMemberData = () => {
        if (currentMember === 0) {
            return {
                name: props.name,
                cnicNo: props.cnicNo,
                emailAddress: props.emailAddress,
                whatsapp: props.whatsapp
            };
        } else if (currentMember <= validMembers.length) {
            const member = validMembers[currentMember - 1];
            return {
                name: member.name,
                cnicNo: member.cnicNo,
                emailAddress: member.emailAddress,
                whatsapp: member.whatsapp
            };
        }
        // Fallback to first member if something goes wrong
        return {
            name: props.name,
            cnicNo: props.cnicNo,
            emailAddress: props.emailAddress,
            whatsapp: props.whatsapp
        };
    };

    const currentMemberData = getCurrentMemberData();

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className="grid gap-6 bg-[linear-gradient(90deg,_#FFFFFF_0%,_#AACFF3_100%)] font-lemonmilk max-w-[95vw] sm:max-w-[800px] w-full">
                <DialogHeader className="relative flex flex-col sm:block">
                    <DialogTitle className="italic text-xl sm:text-2xl bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] w-full bg-clip-text text-transparent font-bold">
                        Confirm your registration
                    </DialogTitle>
                    {validMembers.length > 0 && (
                        <div className="flex justify-center sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
                            <button 
                                onClick={handlePrev}
                                className="p-1 sm:p-2 hover:bg-blue-100 rounded-full transition-colors"
                                type="button"
                            >
                                ←
                            </button>
                            <span className="text-xs sm:text-sm text-blue-600">
                                {currentMember + 1}/{validMembers.length + 1}
                            </span>
                            <button 
                                onClick={handleNext}
                                className="p-1 sm:p-2 hover:bg-blue-100 rounded-full transition-colors"
                                type="button"
                            >
                                →
                            </button>
                        </div>
                    )}
                </DialogHeader>
                <form>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col text-sm sm:text-[22px] gap-2 italic bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] w-full bg-clip-text text-transparent font-bold">
                            <div className="flex gap-2 flex-wrap">
                                <label>University:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{props.university}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Department:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{props.department}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Competition:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{props.competitions}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Team Name:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{props.teamName}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Name:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{currentMemberData.name}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Cnic Number:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{currentMemberData.cnicNo}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Email:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{currentMemberData.emailAddress}</label>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <label>Whatsapp:</label>
                                <label className="font-medium text-black opacity-70 not-italic break-words">{currentMemberData.whatsapp}</label>
                            </div>
                            {/* <div className="flex gap-2">
                                <label>Reference Code:</label>
                                <label className="font-medium text-black opacity-70 not-italic">{props.referenceCode}</label>
                            </div> */}
                            <div className="flex gap-2 flex-wrap">
                                <label>Payment Receipt: </label>
                                <a
                                    href={props.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-black opacity-70 not-italic underline break-words"
                                >
                                    Click here
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <DialogFooter className="flex-row">
                    <button
                        className='mr-auto ml-3 text-[13px] sm:text-[22px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'
                        onClick={onClose}
                    >Cancel</button>
                    <button disabled={props.Semaphore} className={`ml-3 text-[13px] sm:text-[22px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full ${props.Semaphore ? "opacity-50 cursor-not-allowed":""}`}
                        onClick={(e) => {
                            e.preventDefault()
                            if(!props.semaphore){
                                props.setsemaphore(true)
                                handleSubmit()
                            }
                        }
                        }>Confirm</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmDialog;