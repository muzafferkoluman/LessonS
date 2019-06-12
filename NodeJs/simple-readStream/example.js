const fs = require('fs');
const file = 'video.mp4';
const readStream = fs.createReadStream(file);
let progress=0;
readStream.on('data',(chunk) =>{
    progress +=chunk.length;
})

readStream.on('end',() =>{
    console.log(progress)
})