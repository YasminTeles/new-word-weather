export default function scrollTo(elementID: string) {
  const node = document.getElementById(elementID)
  if (node) {
    node.scrollIntoView({
      behavior: "smooth"
    })
  }
}
