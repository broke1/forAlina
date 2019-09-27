
'use strict'

window.addEventListener('load', function() {


 new Vue({
    el: ".table-price",
    data: {
      rows: [
        {name:"Лаш мейкер", price: "1200 руб"},
        {name:"Лаш мейкер", price: "1200 руб"},
        {name:"Лаш мейкер", price: "1200 руб"},
        {name:"Лаш мейкер", price: "1200 руб"},
      ]
    },
    mounted: function() {
        document.querySelector('.preloader').style.height = "0vh";
    }
  })

});