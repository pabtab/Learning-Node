const fs = require('fs')

const createFile = (base) => {
 return new Promise((resolve, reject) => {
   let data = '';

   if (!Number(base)) reject('Not number')
   
   for (let index = 0; index < 10; index++) {
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
  createFile
}
