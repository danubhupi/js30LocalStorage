const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  let items = [];

window.onload=function(){
    items= JSON.parse(localStorage.getItem('items')) || [];
    // console.l    og(items);
    populateList(items,itemsList);

}


updateList=(event)=>{
    event.preventDefault();
    // console.log(event.target.children[0].value);
    // console.log(this["name=item"].value);
    let item={
        text:event.target.children[0].value,
        done:false
    };
    
    items.push(item);
    // console.table(items);
    localStorage.setItem('items',JSON.stringify(items));

    populateList(items,itemsList);
    event.target.reset();
    
}  

populateList=(listItems,listOfItems)=>{
    // console.log(listOfItems);
    listOfItems.innerHTML=listItems.map((item,i)=>{
        return `<li>
      <input type="checkbox" data-index="${i}"    id="item${i}" ${item.done?"checked":""} >
      <label for="item${i}">${item.text}</label>
      </li>`
    }).join('');

}

checkBox=(event)=>{
    // console.log(event.target);
    if(event.target.matches("input")){
    console.log(event.target.dataset.index);
    console.log(items);
    
    items[event.target.dataset.index].done=!items[event.target.dataset.index].done;
    
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
    }

}

addItems.addEventListener('submit',updateList);  
itemsList.addEventListener('click',checkBox);