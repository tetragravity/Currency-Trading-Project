document.addEventListener('DOMContentLoaded', ()=> {
    console.log("1. DOM is Loaded")
    let buyBtn = document.querySelector('#submit-buy');
    OrderController.init();
    buyBtn.addEventListener('click' , () => {OrderController.formBuyData(event)} );
})