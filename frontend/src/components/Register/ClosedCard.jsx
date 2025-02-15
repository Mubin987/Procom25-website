import { CalendarDays, AlertCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ClosedCard() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
      });
  return (
        <motion.div ref={ref} whileHover={{
            y: -10, // Moves the container upward on hover
            transition: { duration: 0.3, ease: "easeOut" }, // Smooth and responsive
          }} initial={{ opacity: 0, y: 20 }} // Hidden state (faded and below position)
          animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: 20 }} // Visible state (fully visible and in place)
          transition={{ duration: 1, ease: "easeOut" }} >
      <Card className="w-full max-w-2xl bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] border-0 [box-shadow:11px_15px_23px_0px_#00000040]">
        <CardHeader>
          <h1 className="bg-clip-text text-center font-lemonmilk m-[20px] sm:m-0 text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#A7E2FF_90%)] text-4xl font-bold">Registration Closed</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center text-amber-500">
            <AlertCircle size={24} className="mr-2" />
            <p className="text-lg font-semibold">We're no longer accepting registrations for this event.</p>
          </div>
          <p className="text-center text-white">
            Thank you for your interest in the Procom'25 Competitions. While registration is now closed, 
            you can still join Job Fare that is free for all.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white">
            <CalendarDays size={20} />
            <span>Event Date: February 18 & 19, 2025</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <a href="/about-us" className="text-lg font-semibold text-amber-500 hover:underline">
            Learn more about Procom'25
          </a>
        </CardFooter>
      </Card>
        </motion.div>
  )
}

