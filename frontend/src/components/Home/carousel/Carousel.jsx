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
        "/Carousel/procom24.1.png",
        "/Carousel/procom24.1.png",
        "/Carousel/procom24.1.png",
        "/Carousel/procom24.1.png",
        "/Carousel/procom24.1.png",
        "/Carousel/procom24.1.png",
    ];

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
                {Array.from({ length: 7 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex h-[300px] items-center justify-center p-6">
                                    <img src={`/Carousel/procom24.${index + 1}.png`} alt={`Procom '24 (${index + 1})`} className="w-full h-full rounded-xl" />
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
