const input = document.getElementById('input');
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')


let value = input.value
let lengthStr = ``
let volumeStr = ``
let massStr = ``

calculate()

function calculate(){
    value = input.value
    lengthStr = `${value} meters = ${(value * 3.28084).toFixed(3)} feet | ${value} feet = ${(value / 3.28084).toFixed(3)} meters`
    volumeStr = `${value} liters = ${(value * 0.264172).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264172).toFixed(3)} liters`
    massStr = `${value} kilos = ${(value * 2.20462).toFixed(3)} pounds | ${value} pounds = ${(value / 2.20462).toFixed(3)} kilos`
    render()
}

function render (){
lengthEl.innerText=lengthStr
volumeEl.innerText=volumeStr
massEl.innerText=massStr
}

convertBtn.addEventListener('click', function(){
    calculate();
})