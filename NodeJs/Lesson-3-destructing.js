const home={
    window:'4',
    door:'5',
    desk:'2',
    table:{
        count:'1',
        color:'white'
    }
};

const {window,door,desk,table:{color}} = home;

console.log( `Table - ${color}`);