
let input_rows = document.querySelector(".input_rows")
let input_columns = document.querySelector(".input_columns")
let button_create = document.querySelector(".create")
let table = document.querySelector("table")

button_create.addEventListener("click", createTable)

function createTable(){
    let rows = input_rows.value
    let cols = input_columns.value

    for (let i = 0; i < rows; i++){
        let tr = document.createElement("tr")
        table.appendChild(tr)
        
        for (let a = 0; a < cols; a++){
            let td = document.createElement("td")
            td.textContent = "a"
            tr.appendChild(td)
        }
    }
    document.body.appendChild(table)
}