

document.getElementById('btn-post').addEventListener('click',function(){
    const postInnerText = document.getElementById('text');
    const post = postInnerText.value;
    
    const postContainer = document.getElementById('post-content');
    const newPTagCreate = document.createElement('p');
    newPTagCreate.innerText = post;
    postContainer.appendChild(newPTagCreate);

    postInnerText.value = '';
})