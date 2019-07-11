class OrderController{

    //TO DO
    //Place a buy
    // Transact buy
    //Show portfolio
    //Deduct from portfolio
    //Flash images on sections
    //Refactor Bootstrap


    static init(){
        console.log("2. Initialized");
        OrderController.fetchGetOrders();

    }

    static fetchGetOrders(){
        console.log("3. Render Order")
        Adapter.getOrders()
        .then(orderObject => { orderObject.forEach(
            order => {
                let orderObj = new Order(order)
                OrderController.renderBuyOrders(orderObj)
                OrderController.renderSellOrders(orderObj)
            })   
        })
    }

    static renderBuyOrders(orderObject){
        let buyHead = document.getElementById("BuyTable")
        let tBodyBuy =  orderObject.getBuyCell()
        if(tBodyBuy != undefined)
        {
            buyHead.append(tBodyBuy)
        }
    }

    static renderSellOrders(orderObject){
        let sellHead = document.getElementById("SellTable")
        let tBodySell =  orderObject.getSellCell()
        if(tBodySell != undefined)
        {
            sellHead.append(tBodySell)
        }
    }

    static formBuyData(){
        //Needs user data with ID
        console.log("4. Submit button clicked posting data")
        event.preventDefault();
        let price = document.getElementById('price-buy').value;
        let amount = document.getElementById('amount-buy').value;
        let total = (price * amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        //Needs some type of calculations, may need to be refactored to market buys instead of limit
        let data = {
            "user_id": 6,
            "typeBuy": true,
            "orderbook_id": 5,
            "price": price,
            "quantity": amount
        };
        OrderController.fetchPostOrders(data);
        
    }

    static fetchPostOrders(data){
        debugger
        console.log("5. Showing Orders on the DOM");
        let option = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data), 
        }
        Adapter.postOrder(option)
        // Now post on the DOM
        
        
    }


    static fetchDeleteOrder(orderObject){
        Adapter.fetchDeleteOrder(orderObject)
        // Now delete on the DOM

    }


}