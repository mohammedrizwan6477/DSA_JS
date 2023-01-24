// console.log("Hello Rizwan");


let data = [9,45,2,8,45,23,7,78,0,11,41,77];

    // <--- Traversing ---> 
// for(let i=0; i<data.length; i++){
    // console.log(data[i]);
//     document.write(`Array ${i} is ${data[i]} <br/>`)
// }

        // <--- Accessing --->
        // let x = 3;
        // console.log(data[x])

        function getElement(){
            let el = document.getElementById("element").value
            // document.write(data[el])
            // alert(data[el])
            if(el<data.length){
                alert(data[el])
            }else{
                alert('Please Enter Valid Input')
            }
        }