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
        .then(orderObject => { 
            orderObject.sort((a, b) => a.price - b.price).forEach(
                order => 
                {
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

    static formBuyData(event){
        event.preventDefault();
        console.log("4. Submit Buy button clicked posting data")
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
        OrderController.fetchPostBuyOrders(data);
        
    }

    static formSellData(event){
        event.preventDefault();
        console.log("4. Submit Sell button clicked posting data")
        event.preventDefault();
        let price = document.getElementById('price-sell').value;
        let amount = document.getElementById('amount-sell').value;
        let total = (price * amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        //Needs some type of calculations, may need to be refactored to market buys instead of limit
        let data = {
            "user_id": 6,
            "typeBuy": false,
            "orderbook_id": 5,
            "price": price,
            "quantity": amount
        };
        OrderController.fetchPostSellOrders(data);
        
    }

    static fetchPostSellOrders(data){
        console.log("5. Showing Orders on the DOM");
        let option = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data), 
        }

        Adapter.postOrder(option)
        .then( () => {
            let table = document.getElementById("SellTable")
            let htmlCollectionSell = document.getElementsByClassName("sellArray")
            for(let i =0; i < htmlCollectionSell.length; i++){ 
                htmlCollectionSell[i].innerText = " "
            }
            OrderController.deleteSellOrder();
        })
    }

    static fetchPostBuyOrders(data){
        console.log("5. Showing Buy Orders on the DOM");
        let option = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data), 
        }

        Adapter.postOrder(option)
        .then( () => {
            let table = document.getElementById("BuyTable")
            let htmlCollectionBuy = document.getElementsByClassName("buyArray")
            for(let i =0; i < htmlCollectionBuy.length; i++){ 
                htmlCollectionBuy[i].innerText = " "
            }
            OrderController.deleteBuyOrder();
        })
    }

    static deleteBuyOrder(){
        let zeroElement = document.getElementsByClassName("buyArray")[0]
        let zeroId = zeroElement.id
        Adapter.fetchDeleteOrder(zeroId)
        let lastOrder = document.getElementsByClassName("buyArray")[0]
        lastOrder.innerText = " "
        OrderController.fetchGetOrders();
    }

    static deleteSellOrder(){
        let zeroElement = document.getElementsByClassName("sellArray")[0]
        let zeroId = zeroElement.id
        Adapter.fetchDeleteOrder(zeroId)
        let lastOrder = document.getElementsByClassName("sellArray")[0]
        lastOrder.innerText = " "
        OrderController.fetchGetOrders();
    }
}


