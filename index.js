
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const feetToMeter = 0.3048
const literToGallon =  0.264
const gallonToLiter = 3.78541178
const kiloToPound =  2.204
const poundToKilo = 0.45359237

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)}` 
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} liters | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)}`
    massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)}`
})