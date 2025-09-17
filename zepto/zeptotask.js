document.querySelectorAll('.menu-item').forEach(item=>{
    item.addEventListener('mouseover',()=>{
        item.style.backgroundColor="lightpink";//highlight color
    });
    item.addEventListener('mouseout',()=>{
        item.style.backgroundColor ="whitesmoke";//back to normal
    });
});