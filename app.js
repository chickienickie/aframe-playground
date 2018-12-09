
  const box = document.querySelector('#box')
  

  document.querySelector('#color-picker').addEventListener('change', (e) => {
    const color = e.target.value
    box.setAttribute('material', `color:${color}`)
  })


