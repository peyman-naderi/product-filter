const indicator = document.querySelector('.indicator').children;
const main = document.querySelector('.items').children;


for(let i=0; i<indicator.length;i++){
    indicator[i].onclick = function(){
        for(let x = 0; x < indicator.length;x++){
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItem = this.getAttribute('data-filter');
        for(let z =0; z<main.length;z++){
            main[z].style.transform = 'scale(0)';
            setTimeout(()=>{
                main[z].style.display = 'none';
            },500)

            if(main[z].getAttribute('data-category') == displayItem || displayItem == 'all'){
                main[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    main[z].style.display = 'block';
                },500)
            }
        }
    }
}