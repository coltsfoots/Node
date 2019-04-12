const fs = require('fs')
// 文件夹名字，可根据不同需求更改
const src = 'icons'

fs.readdir(src, (err, files) => {
  files.forEach(fileName => {
    let oldPath = src + '/' + fileName
    let newPath = src + '/' + fileName.replace(/_/g, '-')
    
    fs.rename(oldPath, newPath, (err) => {
      if(!err) {
        console.log(fileName + '下划线替换成功！')
      }
    })
  })
})
