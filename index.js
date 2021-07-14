const button = document.querySelector('.main');
const result = document.querySelector('.output');
let resultToDisplay=0;
let check=0;
let array = ["", "",""];
let k=0;

button.addEventListener('click',(event)=>{
    const target = event.target;
    if(target.tagName === "BUTTON")
    {
        if(target.innerText=='C')
        {
            result.innerText = 0;
            array =["","",""];
            check=0;
        }
        else if(target.innerText === "=")
        {
            if(array[1]=="+" )
            {
                resultToDisplay = parseInt(array[0]) + parseInt(array[2]);
                result.innerText = resultToDisplay;
            }
            else if(array[1]=="-" )
            {
                resultToDisplay = parseInt(array[0]) - parseInt(array[2]);
                result.innerText = resultToDisplay;
            }
            else if(array[1]=="×" )
            {
                resultToDisplay = parseInt(array[0]) * parseInt(array[2]);
                result.innerText = resultToDisplay;
            }
            else
            {
                resultToDisplay = parseInt(array[0]) / parseInt(array[2]);
                result.innerText = resultToDisplay;
                
            }
            array=[resultToDisplay,'',''];
            // k=1;

        }
        else{
            if((target.innerText === "+") || (target.innerText === "-") || (target.innerText === "×")|| (target.innerText === "÷")) 
            {
               array[1]=target.innerText;
               check++;
            }
            else if(target.innerText === "←"){
                if(check===0)
                {
                    let l = array[0].length;
                    let arrayDummy="";
                    for(let i=0; i<l-1 ;i++)
                    {
                       arrayDummy +=array[0][i];
                    }
                    result.innerText = arrayDummy;
                    array[0] = arrayDummy;
                }
                else{
                    let l = array[2].length;
                    let arrayDummy="";
                    for(let i=0; i<l-1 ;i++)
                    {
                       arrayDummy +=array[2][i];
                    }
                    result.innerText = arrayDummy;
                    array[2] = arrayDummy;
                }
            }

            else{
                if(check==0)
                {
                    array[0]+=target.innerText;
                    result.innerText = array[0];
                }
                else
                {
                    array[2]+=target.innerText;
                    result.innerText = array[2];
                }
                
            }
            // array[k++] = target.innerText;
        }
    }
})
