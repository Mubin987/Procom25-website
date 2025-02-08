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
        "slider2/3_pyk9bz.png",
        "slider2/2_kmcc60.png",
        "slider2/4_rfpid1.png",
        "slider2/1_gusl7g.png",
        "slider2/2_wxcvvp.png",
        "slider2/5_cgap9a.png",
        "slider2/3_m8ey8p.png"
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
