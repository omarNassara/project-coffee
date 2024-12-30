let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart-items-container');
let searchForm = document.querySelector('.search-from');


document.querySelector('#menu-btn').onclick = () => 
{
    navbar.classList.toggle('active'); 
    cartItem.classList.remove('active'); 
    searchForm.classList.remove('active'); 
};

document.querySelector('#cart-btn').onclick = () =>
{
    cartItem.classList.toggle('active');   
    navbar.classList.remove('active');   
    searchForm.classList.remove('active');  
};

document.querySelector('#search-btn').onclick = () => 
{
    searchForm.classList.toggle('active'); 
    navbar.classList.remove('active'); 
    cartItem.classList.remove('active');
};

