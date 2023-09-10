import base from "../utils/base"


export default async function sitemap() {
 

  const routes = ['', '/about', '/contact','support','login','register'].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  )

  return [...routes]
}