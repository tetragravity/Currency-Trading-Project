class Order {
    constructor(orderObject) {
        this.id = orderObject.id;
        this.userId = orderObject.user_id;
        this.orderBookId = orderObject.orderbook_id;
        this.typeBuy = orderObject.typeBuy;
        this.price = orderObject.price.toFixed(1)
        this.quantity = orderObject.quantity.toFixed(1)
    }



    getBuyCell() {
        if (this.typeBuy){
            let tBodyBuy = document.createElement("tbody")
            tBodyBuy.setAttribute("class", "buyArray")
            let tr = document.createElement("tr")
            let priceTd = document.createElement("td")
            priceTd.innerText = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            let amountTd = document.createElement("td")
            amountTd.innerText = this.quantity;
            let totalTd = document.createElement("td")
            totalTd.innerText = (this.price * this.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let idTd = document.createElement("td")
            idTd.innerText = this.userId;

            tr.append(priceTd, amountTd, totalTd, idTd)
            tBodyBuy.append(tr)
            return tBodyBuy;
        }
    }

    getSellCell() {
        if (this.typeBuy != true){
            let tBodySell = document.createElement("tbody")
            let tr = document.createElement("tr")
            let priceTd = document.createElement("td")
            priceTd.innerText = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
            let amountTd = document.createElement("td")
            amountTd.innerText = this.quantity;
            let totalTd = document.createElement("td")
            totalTd.innerText = (this.price * this.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let idTd = document.createElement("td")
            idTd.innerText = this.userId;

            tr.append(priceTd, amountTd, totalTd, idTd)
            tBodySell.append(tr)
            return tBodySell;
        }
    }





}