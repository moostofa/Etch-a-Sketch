document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div")
        row.classList = "row"
        for (let j = 0; j < 10; j++) {
            const col = document.createElement("div")
            col.innerHTML = "hello"
            col.classList = "col"
            row.append(col)
        }
        document.querySelector(".container").append(row)
    }
})