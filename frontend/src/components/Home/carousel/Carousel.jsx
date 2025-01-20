import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-[80%] max-w-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {[
                    
                    "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394692/3_pyk9bz.png",
                    "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394692/4_rfpid1.png",
      "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394712/5_cgap9a.png",
      "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394692/1_ysokj4.png",
      "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394967/2_kmcc60.png"
    ].map((src, index) => (
                        
                    
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex h-[300px] items-center justify-center p-6">
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-[100%] rounded-md"
                                />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
