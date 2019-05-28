const user = {id: 10, name: 'mehmet'};
const friends = [{id: 11, name: 'kenan'}, {id: 12, name: 'murat'}];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
        }, 500)
    })
};

const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends)
        }, 500)
    })
};

//callback hell
let userId;
getUser()
    .then(function (user) {
        userId = user.id;
        getFriends().then(function (friends) {
            console.log(user)
            console.log(friends)
        })
    })


// Promise zinciri
const zincirES6 = () => {
    return asenkronIslem1()
        .then(asenkronIslem2)
        .then(asenkronIslem3)
}

zincirES6()
    .then(cevap => console.log(cevap))
    .catch(hata => console.log(hata))


// Async/await
const zincirES7 = async () => {
    const sonuc1 = await asenkronIslem1();
    const sonuc2 = await asenkronIslem2(sonuc1);
    return asenkronIslem3(sonuc2);
}

try {
    const cevap = await zincirES7();
    console.log(cevap);
}catch(hata){
    console.log(hata);
}