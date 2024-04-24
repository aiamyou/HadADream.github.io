let submitButton = document.getElementById('submit-btn')
let alert = document.getElementById('alert')
let innerAlert = document.getElementById('inner-alert')
let dream = document.getElementById('dream')
let fade = 0
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// console.log(alert)
// submitButton.addEventListener("click",function(){
//     alert.style.opacity = 0
    
//     alert.style.display = 'block'
 
//     console.log(alert)
//     if (dream.value === "") {
//         innerAlert.textContent = "Please write anything :("
//         alert.style.background = 'red'
//         setTimeout(() => {
//             alert.style.display ='none'
//           }, 2000);
//     }
//     else{
//         innerAlert.textContent = "Published :)"
//         alert.style.background = 'rgba(6, 226, 61, 0.913)'
//         setTimeout(() => {
//             alert.style.display ='block'
//           }, 1500);

//     }
//     setInterval(() => {
//         fade = fade + 0.1
//         alert.style.opacity = fade 
//     }, 20);
// }
// )



commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const commentInput = commentForm.querySelector('#dream');
    const nameInput = commentForm.querySelector('#name');

    const commentText = commentInput.value.trim();
    const nameText = nameInput.value.trim();

    alert.style.opacity = 0
    alert.style.display = 'block'

    if (commentText) {
        const comment = document.createElement('li');
        comment.classList.add('comment');

        const commentContent = document.createElement('div');
        commentContent.classList.add('comment-content');

        const commentAuthor = document.createElement('span');
        commentAuthor.classList.add('comment-author');

        if (nameText) {
            commentAuthor.textContent = nameText;
        } else {
            commentAuthor.textContent = 'Anonymous';
        }

        const commentTextElement = document.createElement('p');
        commentTextElement.classList.add('comment-text');
        commentTextElement.textContent = commentText;

        commentContent.appendChild(commentAuthor);
        commentContent.appendChild(commentTextElement);

        comment.appendChild(commentContent);
        commentList.appendChild(comment);

        commentForm.reset();

        innerAlert.textContent = "Published :)"
        alert.style.background = 'rgba(6, 226, 61, 0.913)'
        setTimeout(() => {
            alert.style.display ='none'
          }, 1500);


    }else if(dream.value===""){
        innerAlert.textContent = "Please write anything :(";
        alert.style.background = 'red';
        setTimeout(() => {
            alert.style.display ='none';
          }, 2000);
    }
    setInterval(() => {
        fade = fade + 0.1
        alert.style.opacity = fade 
    }, 20);

});
