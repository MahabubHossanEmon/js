/*
1.if ticket numbers is less than 100,per ticket price:100
2.if ticket numbers is more than 100,but less than 200.First 100 tickets will be 100/ticket rest tickets will be 90 taka per piece
3.if you purchase more than 200 tickets
first 100....> 100tk
101-200...>90tk
200+....>70tk
*/


function ticketPrice(quantity){
   const first100Rate=100;
   const second100Rate=90;
   const restTicketsRate=70;
   
   

    if(quantity<=100){
        const price=quantity * first100Rate;
     return price;
    }
    else if(quantity<=200){
        const first100Price=100*first100Rate;
        const restTicketQuantity=quantity-100;
        const restTicketPrice=restTicketQuantity * second100Rate;
        const price=first100Price+restTicketPrice;
        return price;

    }
    else{
        const first100Price=100 * first100Rate;
        const second100Price=100 * second100Rate;
        const restTicketQuantity=quantity - 200;
        const restTicketPrice=restTicketQuantity * restTicketsRate;
        const price=first100Price+second100Price+restTicketPrice;
        return price;

    }
   
}
const price=ticketPrice(201);
console.log('total',price);