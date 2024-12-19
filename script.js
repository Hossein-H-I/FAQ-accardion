let items = document.querySelectorAll('.item');

items.forEach(function(item){

    item.addEventListener('click', function(){
        
        // Toggle the 'active' class

        const paragraph = item.querySelector('p');

        setTimeout(() => {
            paragraph.classList.toggle('active');
            
            
        // Check if the paragraph has the 'active' class

        if (paragraph.classList.contains('active')) {
            
            item.querySelector('.btn-icon').src = './assets/images/icon-minus.svg';
            
        } else {
            
            item.querySelector('.btn-icon').src = './assets/images/icon-plus.svg'; // Change back to the original icon
            
        }
    }, 200); // delay befor toggle the class
        
        
    })
})