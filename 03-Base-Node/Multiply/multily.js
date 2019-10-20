const fs = require('fs')


const listNumbers = (base, limit) => {
  for (let index = 0; index <= limit; index++) {
    console.log(`${base} * ${index} = ${base * index}\n`)
  }
}

const createFile = (base, limit) => {
 return new Promise((resolve, reject) => {
   let data = '';

   if (!Number(base)) reject('Not number')
   
   for (let index = 0; index <= limit; index++) {
     data += `${base} * ${index} = ${base * index}\n`
   }
   
   fs.writeFile(`Table-${base}.txt`, data, (err) => {
     if (err) {
       reject(err);
     } else {
       resolve('File created succesfully')
     }
   })
 })
}

module.exports = {
  listNumbers,
  createFile
}
