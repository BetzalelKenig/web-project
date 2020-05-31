

let i = 0;

const showItem = () => {
    document.querySelectorAll('li').forEach((j) =>{
         j.className = j.className.replace('hide', '')
         j.className = j.className.replace('show', 'hide')  
          
        })
        if(i == document.querySelectorAll('li').length -1 ) i = 0
        document.querySelectorAll('li')[++i].className = 'show'   
        
}

setInterval(showItem, 1000)