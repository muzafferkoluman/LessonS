// const asenkronFonksiyon = function (sayi, callback) {
//     const sonuc = sayi * 2;
//     callback(sonuc);
// };
// asenkronFonksiyon(2,function (sonuc) {
//     console.log(sonuc);
//     asenkronFonksiyon(5,function (sonuc) {
//         console.log(sonuc)
//         asenkronFonksiyon(8,function (sonuc) {
//             console.log(sonuc)
//             asenkronFonksiyon(11,function (sonuc) {
//                 console.log(sonuc)
//             });
//         });
//     });
// });

const asenkronFonksiyon = (sayi) => {
    return new Promise((resolve, reject) =>{
        if(sayi ===4)
            resolve("Her şey yolunda!");
        else
            reject("Bir sorun var abey!");
    });
};

asenkronFonksiyon(4)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
        return 2;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })