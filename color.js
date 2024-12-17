    let show = document.querySelector('.show');
    let color = document.querySelector('.color');
    let color_code = document.querySelector('.color_code');
    color.addEventListener('change',()=>{
        show.style.backgroundColor = color.value;
        console.log(color.value);
        color_code.innerText = color.value;
    });
    window.addEventListener('load',()=>{
        show.style.backgroundColor = color.value;
        console.log(color.value);
        color_code.innerText = color.value;
    });
    let textToCopy = document.querySelector('.color_code');
    let copy = document.querySelector('.copy');
    copy.addEventListener('click',()=>{
        //textToCopy.select();
        //textToCopy.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textToCopy.innerText);
    });