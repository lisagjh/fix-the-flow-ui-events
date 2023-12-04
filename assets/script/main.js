let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// ! mijn code

// button 1
// maakt object van de button 
const negativeBtn = document.querySelector('a:nth-of-type(1')
// dit zorgt dat er bij een click event de class negative getoggled word. toggle kan worden vervangen door add of remove voor het gewenste effect
negativeBtn.addEventListener('click', function() {
  negativeBtn.classList.toggle("negative")
})

//  button 2

const jelloBtn = document.querySelector('a:nth-of-type(2)')

jelloBtn.addEventListener('mouseover', function() {
  jelloBtn.classList.add('jelloHor')
})

jelloBtn.addEventListener('mouseout', function() {
  jelloBtn.classList.remove('jelloHor')
})

// button 4
const pulseBtn = document.querySelector('a:nth-of-type(4)')

pulseBtn.addEventListener('mouseover', function() {
  pulseBtn.classList.add('pulse')
})

pulseBtn.addEventListener('mouseout', function() {
  pulseBtn.classList.remove('pulse')
})