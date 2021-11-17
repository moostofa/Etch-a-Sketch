document.addEventListener("DOMContentLoaded", () => {
    generateGrid()
})

function generateGrid() {
    // default: generate a 4x4 grid
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div")
        row.classList = "row"
        for (let j = 0; j < 10; j++) {
            const col = document.createElement("div")
            col.innerHTML = "?"
            col.classList = "col"
    
            // if a mouse is hovered over a square box, change its background color to a random RGB value
            col.addEventListener("mouseover", () => {
                col.style.backgroundColor = `rgba(${Array.from({length:3}, () =>
                    Math.floor(Math.random() * 256)).join(",")}, ${0.3})`
            })
            row.append(col)
        }
        document.querySelector(".container").append(row)
    }

}