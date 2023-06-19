const fs = require('fs')
const path = require('path')
const { of } = require('rxjs')

function readFiles (dirname, onFileContent, onError) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      console.log('err', err)
      return
    }
    filenames.forEach(function (filename) {
      const extension = path.extname(filename)
      if (extension === '.html') {
        console.log('esse e um html', filename)
      }
    })
  })
}

readFiles('public/')

const arrayArquivos = [
  'public/jeanswear.pdf',
  'public/jeanswear-spain.pdf',
  'public/qualidade.pdf',
  'public/qualidade-spain.pdf',
  'public/qualidade-workwear.pdf'
]
/*
for (let i = 0; i < arrayArquivos.length; i++) {
  console.log(path.basename(arrayArquivos[i]))
  console.log(path.extname(arrayArquivos[i]))
}
*/

// for
for (const file in arrayArquivos) {
  console.log('for', path.basename(file))
}

// map
arrayArquivos.map((file) => {
  return console.log('map', path.basename(file))
})

// forEach
arrayArquivos.forEach((file) => {
  console.log('map', path.basename(file))
})
