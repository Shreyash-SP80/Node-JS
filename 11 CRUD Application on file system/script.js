

let select = document.querySelector("#one")
let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")

change = function() {
    value = select.value
    
    if (value == 'Delete') {
        input2.disabled = true
    } else if (value == 'Read'){
        input2.disabled = true
    } else {
        input2.disabled = false
    }
}