const data=[1,2,3,4,5];
const newData=[0,0.5,...data];
console.log(newData);


const data2={
    name:'Muzaffer',
    surname:'Koluman'
};
const newData2={
    age:'25',
    ...data2
};
console.log(newData2);