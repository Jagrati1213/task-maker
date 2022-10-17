// Tips :
//   1.use 'this' keyword as parameter when you want to target the only element.
//   2.Use 'event' keyword as pera. when you target the events & chaining with parents-child.
//   3.learn what type pera pass for function call.

let add_task = document.querySelector('.add_task');
let take_inpVal = document.querySelector('#inp_val');
let task_box = document.querySelector('.task_box ul');


// Add Task
add_task.addEventListener('click',()=>{

    if(take_inpVal.value!=""){

       task_box.innerHTML += 
         `<li class="d-flex justify-content-between w-100">
                <div class="tasktext">${take_inpVal.value}</div>
                <div class="dropstart">
                    <button type="button" class="dropdown-toggle" data-mdb-toggle="dropdown" aria-expanded="false">
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </button>
                    <ul class="dropdown-menu">
                    <li class="mb-0 edit_btn"onclick="edit_task(event)">Edit</li>
                    <li class="mb-0 del_btn" onclick="det_task(event)">Delete</li>
                     </ul>
                </div>
          </li>`; 
    }
    else{
        alert("Enter Task");
    }
    take_inpVal.value=""
});

// edit Task
 function edit_task(element){

    let button_name =element.target; //target button
    let task_box = element.target.parentNode.parentNode.parentNode; //target parent of task_list
    let task_text = task_box.firstElementChild; //target 1st child

    if(button_name.innerHTML==='Edit'){

        //input create
        let create_inp = document.createElement('input');
        create_inp.setAttribute('type','text');

        create_inp.value = task_text.innerHTML; //put the text as value 

        task_box.insertBefore(create_inp,task_text); //insert before the textbox
        task_box.removeChild(task_text);
        button_name.innerHTML='Save'; //change the name
    }
    else{
        //text create
        let create_text = document.createElement('div');
        create_text.setAttribute('class','tasktext');

        create_text.innerHTML = task_text.value; //put the value as text 

        task_box.insertBefore(create_text,task_text);
        task_box.removeChild(task_text);
        button_name.innerHTML='Edit';
    }
}

//Delete Task..
function det_task(element){
    element.target.parentNode.parentNode.parentNode.remove();
}