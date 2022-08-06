import { StaticImageData } from 'next/image'

type ItemType = {
  element: StaticImageData
  alt: string
  width: string
  heigth: string
}

export type CollectionType = {
  title: string
  items: ItemType[]
}

type CardContentProps = {
  collection: CollectionType
}

export default CardContentProps
