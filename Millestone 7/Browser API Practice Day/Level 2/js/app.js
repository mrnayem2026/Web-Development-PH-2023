document.getElementById('incressNumber').addEventListener('click',function(){
    let countNumber =  parseInt(document.getElementById('countNumber').innerText);
    let incressNumber = document.getElementById('countNumber').innerText = ++countNumber
    let convertStringify = JSON.stringify(incressNumber)
    setDataInlocalStorage(convertStringify)
})


const setDataInlocalStorage = (convertStringify)  =>{
 localStorage.setItem('Number',convertStringify);
}

const displayNumberFromStorage = () => {
    const number = localStorage.getItem('Number')
    document.getElementById('countNumber').innerText = number;  
}
displayNumberFromStorage()