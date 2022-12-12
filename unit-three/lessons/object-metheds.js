let dog = {
    name: "sparky",
    color: "brown",
    speek: function() {
        console.log(this.name, "just barked");
    }
}

dog.speek();


let jiffyLoop = {
    tireRotation: 45,
    oilChange: 35,
    wiperBlades: 15,
    order: function(orderPlaced) {
        let sum = null;
        orderPlaced.split(",").forEach((i) => {
            sum += this[i.trim()];
        })
        console.log(sum);
    }
}
jiffyLoop.order("tireRotation, oilChange, wiperBlades");

let jiffyLoop2 = {
    tireRotation: 45,
    oilChange: 35,
    wiperBlades: 15,
    order: function(orderPlaced) {
        let sum = null;
        for(i of orderPlaced.split(",")){
            sum += this[i.trim()];
        }
        this.companyOrders.push(sum);
        return sum;
    },
    companyOrders: [],
}



console.log(jiffyLoop2.order("tireRotation, oilChange, wiperBlades"));

console.log(jiffyLoop2.order("oilChange, wiperBlades"));
console.log(jiffyLoop2.companyOrders);



