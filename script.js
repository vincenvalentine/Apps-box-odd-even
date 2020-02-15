function displayBoxes() {
    let inputNumber = document.getElementById('fname');
    let boxParent = document.getElementById('box');
    let boxChild = document.getElementsByClassName('box-child');

    inputNumber = inputNumber.value;
    number = inputNumber * inputNumber;

    console.log(number);
    
    let boxPush = [];

    for (let i = 0; i < number; i++) {
        boxPush.push(`
        <div class="box-child" style ="width:${100/inputNumber}%; height:${100/inputNumber}%">
            <span>${inputNumber}</span>
        </div>
        `)
    }

    join = boxPush.join('');
    boxParent.innerHTML = join;

    console.log(boxChild.length);
    
    for(let y = 0; y < boxChild.length; y++){
        console.log(y);
        if (y % 2 == 1) {
            boxChild[y].style.backgroundColor = "lightblue";
        } else if(y % 2 == 0) {
            boxChild[y].style.backgroundColor = "lightgreen";
        }else{

        }
    }
    
}

