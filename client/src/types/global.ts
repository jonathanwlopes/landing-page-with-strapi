/* GLOBAL TYPES */
export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type IconProps = {
  name: string
  url: string
  alternativeText: string
}

export type TechIconsProps = {
  title: string
  icon: IconProps
}

export type AuthorsProps = {
  photo: ImageProps
  name: string
  description: string
  role: string
  socialLinks: Array<{
    title: string
    url: string
  }>
}