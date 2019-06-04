//fs.appendFile() oncekini etkilemeden devamını getirir.
//fs.writeFile() oncekini siler istenilen neyse o yazılır

const fs = require('fs');
fs.appendFile('file.txt','Merhaba dünya \n',(err)=>{
    if(err)
        throw err;
    console.log('dosyaya ekleme yapıldı.')
});
