function birinci(callback) {
    setTimeout(function () {
        console.log("birinci")
        callback(ucuncu);
    },500);
}
function ikinci(callback) {
    setTimeout(function () {
        console.log("ikinci")
        callback();
    },500)
}
function ucuncu() {
    setTimeout(function () {
        console.log("ucuncu")
    },500)
}



//scope çok önemli


birinci(ikinci);
