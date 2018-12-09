
  const box = document.querySelector('#box')
  

  document.querySelector('#color-picker').addEventListener('change', (e) => {
    const color = e.target.value
    box.setAttribute('material', `color:${color}`)
  })


  document.querySelector('#shape-picker').addEventListener('change', (e) => {
    const shape = e.target.value
    box.setAttribute('geometry', `primitive:${shape}`)
    console.log(shape);

  })
