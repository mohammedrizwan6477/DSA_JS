// let data = [60,30,10,67,40];

function insertEl()
{
    let data = [60,30,10,67,40];
    console.log(data);
    let newEl = document.getElementById('newEl').value;
    newEl = parseInt(newEl)
    let position = document.getElementById('position').value;
    for(let i = data.length-1;i>=0;i--){
        if(i>=position){
            data[i+1]=data[i]
            if(i == position){
                data[i]=newEl;
            }
        }
    }
    console.warn(data);
}
// <-----
let items = [20,40,50,6,2,9] //  just example of ES6 Method
items.splice(2,0,2000)
console.error(items);
// ----->

// let newEl = 70;
// let position = 2;
// console.log(data);

// for(let i=data.length-1;i>=0;i--){
//     if(i>=position){
//         data[i+1]=data[i];
//         if(i==position){
//             data[i]=newEl;
//         }
//     }
// }
// console.log(data);

// for(let i=data.length-1;i>=0;i--){
//     if(i>=addPn){
//         data[i+1]=data[i]
//         if(i==addPn){
//             data[i]=newEl
//         }
//     }
// }
// console.log(data);