document.addEventListener('DOMContentLoaded', ()=> {
    console.log("1. DOM is Loaded")
    let buyBtn = document.querySelector('#submit-buy');
    let sellBtn = document.querySelector('#submit-sell');
    OrderController.init();
    buyBtn.addEventListener('click' , () => {OrderController.formBuyData(event)} );
    sellBtn.addEventListener('click' , () => {OrderController.formSellData(event)} );
})