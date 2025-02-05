export const navigationQuery = `*[_type == "navigation"][0]{
  heading,
  collection[]{
    _key,
    title,
    slug
  }
}`;

export const heroQuery = `*[_type == "hero"][0]{
  socials[]{
    _key,
    cover,
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
}`;

export const aboutQuery = `*[_type == "about"][0]{
  heading,
  overview,
  cv
}`;

export const workQuery = `*[_type == "work"][0]{
  heading,
  collection[] {
    _key,
    title,
    designation,
    link,
    duration,
    description,
    cover
  }
}`;

export const experimentsQuery = `*[_type == "experiments"][0]{
  heading,
  collection[]{
    _key,
    heading,
    body,
    image,
    link,
  }
}`;

export const talksQuery = `*[_type == "talks"][0]{
  heading,
  collection[]{
    _key,
    heading,
    body,
    link,
    cover
  }
}`;

export const writingsQuery = `*[_type == "writings"][0]{
  heading,
  collection[]{
    _key,
    image,
    heading,
    body,
    link
  }
}`;

export const contactQuery = `*[_type == "contact"][0]{
  heading,
  text,
  link,  
}`;

export const footerQuery = `*[_type == "footer"][0]{
  heading,
  email,
  copyright,
  socials,
  collection,
}`;

export const combinedQuery = `{
  "navigation": ${navigationQuery},
  "hero": ${heroQuery},
  "about": ${aboutQuery},
  "work": ${workQuery},
  "experiments": ${experimentsQuery},
  "writings": ${writingsQuery},
  "talks": ${talksQuery},
  "contact": ${contactQuery},
  "footer": ${footerQuery}
}`;