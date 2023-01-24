// let data = [20,40,60,5,70,21,3,5,80,99,10]
// let search = 80;
// let index = undefined;

// for(let i=0;i<data.length-1;i++){
//     if(data[i]===search){
//         index=i;
//         break;
//     }
// }
// console.log(index);
// console.warn(data.indexOf(search));
// data.splice(2,1)
// console.warn(data);


function searchElement()
{
    let data = [20,40,60,5,70,21,3,5,80,99,10]
    let search = document.getElementById('searchEl').value;
    let index;
    
    for(let i=0;i<data.length-1;i++){
        if(data[i]===parseInt(search)){
            index=i;
            break;
        }
    }
    console.log(index);
}