// const clockEl = document.querySelector('.clock')
// const timeFormatEl = document.querySelector('#timeFormat')



// timeFormatEl.addEventListener('click', (e) => {
//     if (e.target.innerHTML === '12/24') {
//         e.target.innerHTML = 'AM/PM'
//         setInterval(() => {
//             clockEl.textContent = new Date().toLocaleTimeString()
//         })
//     } 
//     if (e.target.innerHTML === 'AM/PM') {
//         e.target.innerHTML = '12/24'
//         setInterval(() => {
//             clockEl.textContent = `
//             ${new Date().getHours()}:
//             ${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}:
//             ${new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()}`
//         }, 1000)
//     }
// })