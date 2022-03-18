let collection = document.getElementsByClassName('accordion-btn');
let t =0;
for(let element of collection){
   element.onclick= event =>{
      if(element.nextElementSibling.classList.contains('active')){
                 element.nextElementSibling.classList.remove('active');
                 element.classList.remove('clicked');}
      else{
         for(let item of collection){
            if(item.nextElementSibling.classList.contains('active')){
            item.nextElementSibling.classList.remove('active');
            item.classList.remove('clicked');}
         };
         element.nextElementSibling.classList.add('active');
         element.classList.add('clicked');}
      };

      }

