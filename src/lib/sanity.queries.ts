export const navigationQuery = `*[_type == "navigation"][0]{
  heading,
  collection[]{
    _key,
    title,
    href
  }
}`

export const heroQuery = `*[_type == "hero"][0]{
  socials[]{
    _key,
     url,
    caption,
    alt
  },
  greeting{
    link,
    text
  },
  cover{
    asset
  }
}`

export const aboutQuery = `*[_type == "about"]{
  heading,
  contact,
  overview
}`

export const workQuery = `*[_type == "work"]{
  heading,
  collection[]{
    org{
      duration{
        start,
        end
      },
      image,
      link,
      description
    }
  }
}`

export const experimentsQuery = `*[_type == "experiments"][0]{
  heading,
  collection[]{
    _key,
    cover,
    heading,
    body
  }
}`

export const talksQuery = `*[_type == "talks"][0]{
  heading,
  collection[]{
    _key,
    cover,
    heading,
    body
  }
}`

export const writingsQuery = `*[_type == "writings"][0]{
  heading,
  collection[]{
    _key,
    image,
    heading,
    body,
    link
  }
}`

export const contactQuery = `*[_type == "contact"][0]{
  heading,
  text  
}`

export const footerQuery = `*[_type == "footer"][0]{
  heading
}`
