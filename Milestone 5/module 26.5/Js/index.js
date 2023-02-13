// option 2 

function bgRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3 
const y = document.getElementById('yellow');
y.onclick = bgYellow;

function bgYellow(){
  document.body.style.backgroundColor = 'yellow';
}

// Option 4 

function green(){
    document.body.style.backgroundColor = 'green';
}

// Option 5 [Most use]

const pickColor = document.getElementById('pink');
pickColor.addEventListener('mouseout',pink);

function pink()
{
    document.body.style.backgroundColor = 'pink';
}