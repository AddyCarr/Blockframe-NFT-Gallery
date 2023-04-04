export const scrollIntoView = (id: string) => {
    const element = document.getElementById(id)
    const yOffset = -50
    if (element) {
        const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
    }
}
