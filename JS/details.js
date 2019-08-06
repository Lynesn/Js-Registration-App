//referencing elements using a query selector
const firstName = document.querySelector('#firstName');
//const secondName = document.querySelector('#secondName');

const ourContent = document.querySelector(".content")
//const ourPara = document.createElement('span');


const ourList = []            // create an array list

firstName.onchange = function(){        // us the onchange method, evenrtime you type something and click else where, change the function
    if (firstName.value.length<3||
        firstName.value ==='')
    {
        alert('please enter your name:It sholld be at least three characters long');
    }else{

   

    ourList.push(firstName.value)  // push or add first name to the list
    console.log(ourList)        // print out the list

        const ourPara = document.createElement('span');
        ourPara.className = "ourPara";                  // give a class name to the para.
    ourList.forEach(function (item, index) {   //foreach method, for each in the array loop thru the item and index
        console.log(index, item);                // now break it down, index and item
        //const ourContent = document.querySelector(".content")
        
        //let num = index + 1; //initiate a variable num and store a new index, index+1
        ourPara.innerHTML = `${index+1} + ${item}` // print a numbered list in order
        ourContent.appendChild(ourPara)  
        
    });
};

};
