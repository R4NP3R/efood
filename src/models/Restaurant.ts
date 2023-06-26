export class RestaurantClass {
  image: string
  title: string
  description: string
  note: number
  infos: string[]

  constructor(
    image: string,
    title: string,
    description: string,
    note: number,
    infos: string[]
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.note = note
    this.infos = infos
  }
}
