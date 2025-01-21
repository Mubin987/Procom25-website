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

    const imgs = [
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394692/3_pyk9bz.png",
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394967/2_kmcc60.png",
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394692/4_rfpid1.png",
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737413538/1_gusl7g.png",
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737413538/2_wxcvvp.png",
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737394712/5_cgap9a.png",
        "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737413538/3_m8ey8p.png"
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-[80%] max-w-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: imgs.length }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="border-4 border-themeBlue">
                                <img src={`${imgs[index]}`} alt={`Procom '24 (image: ${index})`} className="w-full h-full rounded-lg " />
                                {/* <CardContent className="flex h-[300px] items-center justify-center p-6">
                                </CardContent> */}
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
