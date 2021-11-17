document.addEventListener("DOMContentLoaded", () => {
    // default: generate a 10x10 grid
    generateGrid(10)
    document.getElementById("change").addEventListener("click", () => changeGrid())
    document.getElementById("reset").addEventListener("click", () => resetGrid())
})

// generate a square grid and add a mouseover eventListener to all grid cells to change cell colour
function generateGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement("div")
        row.classList = "row"

        for (let j = 0; j < dimensions; j++) {
            const col = document.createElement("div")
            col.innerHTML = "🎯"
            col.classList = "col"
    
            // if a mouse is hovered over a square box, change its background color to a random RGB value,
            // and display a random letter in the box
            col.addEventListener("mouseover", () => {
                col.style.backgroundColor = `rgba(${Array.from({length:3}, () => 
                    Math.floor(Math.random() * 256)).join(",")}, ${0.3})`
                col.innerHTML = String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)) // utilising ASCII mapping
            })
            row.append(col)
        }
        document.querySelector(".container").append(row)
    }
}

// delete the current grid and create a new grid based on user's dimension choice
function changeGrid() {
    let dimensions
    do {
        dimensions = parseInt(prompt("Please enter the number of rows and columns you want the grid to have (Max: 10x10)"))
    } while (dimensions < 0 || dimensions > 10)
    
    // if user cancels, or does not input an integer
    if (isNaN(dimensions)) {
        alert("Invalid dimensions, please enter a number")
        return
    }

    for (const row of document.querySelectorAll(".row"))
        row.remove()
    generateGrid(dimensions)
}

// reset grid: i.e., reset colors and text in cells
function resetGrid() {
    for (const cell of document.querySelectorAll(".col")) {
        cell.style.backgroundColor = "white"
        cell.innerHTML = "👻"
    }
}