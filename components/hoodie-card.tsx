"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HoodieCardProps {
  title: string
  price: number
  image: string
  description: string
}

export const HoodieCard = ({ title, price, image, description }: HoodieCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}