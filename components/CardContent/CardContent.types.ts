import { StaticImageData } from 'next/image'

type ItemType = {
  element: StaticImageData
  alt: string
  width: string
  heigth: string
}

export type CollectionType = {
  title: string
  keyDescription: string
  items: ItemType[]
}

type CardContentProps = {
  collection: CollectionType
  variant: 'right' | 'left'
}

export default CardContentProps
