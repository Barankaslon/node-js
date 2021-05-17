document.querySelectorAll('.number__format').forEach(node => {
    node.textContent = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'CAD' 
        }).format(node.textContent)
    })

const dayNumber = new Date().getDate()
const year = new Date().getFullYear()
const dayName = new Date().toLocaleString("default", {weekday: "long"})
const monthName = new Date().toLocaleString("default", {month: "long"})

document.querySelector(".month__name").innerHTML = monthName
document.querySelector(".date__number").innerHTML = dayNumber
document.querySelector(".year").innerHTML = year

document.querySelector(".current__month").innerHTML = monthName