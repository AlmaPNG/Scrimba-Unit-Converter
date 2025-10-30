let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const conversions = {
    length: { from: 1, to: 3.281, leftUnit: "meters", rightUnit: "feet" },
    volume: { from: 1, to: 0.264, leftUnit: "liters", rightUnit: "gallons" },
    mass:   { from: 1, to: 2.204, leftUnit: "kilos",  rightUnit: "pounds" }
}

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} ${conversions.length.leftUnit} = ${(baseValue * conversions.length.to).toFixed(3)} ${conversions.length.rightUnit} | ${baseValue} ${conversions.length.rightUnit} = ${(baseValue / conversions.length.to).toFixed(3)} ${conversions.length.leftUnit}`
    
    volumeEl.textContent = `${baseValue} ${conversions.volume.leftUnit} = ${(baseValue * conversions.volume.to).toFixed(3)} ${conversions.volume.rightUnit} | ${baseValue} ${conversions.volume.rightUnit} = ${(baseValue / conversions.volume.to).toFixed(3)} ${conversions.volume.leftUnit}`
    
    massEl.textContent = `${baseValue} ${conversions.mass.leftUnit} = ${(baseValue * conversions.mass.to).toFixed(3)} ${conversions.mass.rightUnit} | ${baseValue} ${conversions.mass.rightUnit} = ${(baseValue / conversions.mass.to).toFixed(3)} ${conversions.mass.leftUnit}`
})

inputEl.addEventListener("input", function() {
    if (this.value === "") return;
    if (isNaN(this.value) || this.value < 0 || Number(this.value) > 1000) {
        alert("Please enter a positive number less than or equal to 1000!");
        this.value = "";
    }
})

