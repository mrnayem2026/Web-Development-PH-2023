// for Name sends start
document.getElementById('sendName').addEventListener('click',function(){
    const nameInputField = document.getElementById('nameInputField').value;
    document.getElementById('nameInputField').value = ""
    let nameInputFieldString = JSON.stringify(nameInputField)
    localStorage.setItem('name',nameInputFieldString)
})
// for Name sends ends

// for Email sends start
document.getElementById('sendEmail').addEventListener('click',function(){
    const emailInputField = document.getElementById('emailInputField').value;
    document.getElementById('emailInputField').value = ""
    let emailInputFieldString = JSON.stringify(emailInputField)
    localStorage.setItem('email',emailInputFieldString)
})
// for Email sends ends

// for message sends start
document.getElementById('sendMessage').addEventListener('click',function(){
    const messageInputField = document.getElementById('messageInputField').value;
    document.getElementById('messageInputField').value = ''
    let messageInputFieldString = JSON.stringify(messageInputField)
    localStorage.setItem('message',messageInputFieldString)
})
// for message sends ends


// for localStorage item delete function starts
const localStoragedeleteItemByIdAndKey =(key)=>{
    localStorage.removeItem(key)
}
// for localStorage item delete function starts


// Reset localStorage Start 
document.getElementById('resetLocalStorage').addEventListener('click',function(){
    localStorage.clear()
})
// Reset localStorage ends