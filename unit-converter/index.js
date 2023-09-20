const numEl = document.getElementById("num-el")

const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")

numEl.addEventListener("keyup", calculateValuesAndRender)

function calculateValuesAndRender() {   
    let num_el_val = numEl.value
    if (num_el_val) {
        let number = Number(numEl.value)

        let meter_feet_string = `${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters`
        let liters_gallons_string = `${number} liters = ${(number / 3.785).toFixed(3)} gallons | ${number} gallons = ${(number * 3.785).toFixed(3)} liters`
        let kilos_pounds_string = `${number} kilos = ${(number * 2.205).toFixed(3)} pounds | ${number} pounds = ${(number / 2.205).toFixed(3)} kilos`

        lenEl.textContent = meter_feet_string
        volEl.textContent = liters_gallons_string
        massEl.textContent = kilos_pounds_string
    }
}