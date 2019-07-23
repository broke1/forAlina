
'use strict'

window.addEventListener('load', function() {



  Vue.component('table-item', {
    props: ['items'],
    template: `
        <div class="table-item">
            <h2 class="zagolovok"><span></span>{{items.zagolovok}}</h2>
            <div class="table-row zaglavie" >
              <p>Название услуги</p>
              <p>Стоимость услуги</p>
            </div>
            <div class="table-item-urself" v-for="under_item in items.under_item">
                <div class="table-row" >
                        <p class="big_row"><span>{{under_item.big_row}}</span></p>
                </div>
                <div class="table-row" v-for="item_itself in under_item.item_itself">
                        <p>{{item_itself.name}} </p>
                        <p>{{item_itself.price}}</p>
                </div>
            </div>
        </div>
    `
  })


 new Vue({
    el: ".table-price",
    data: {
      items: [
        {
          zagolovok:"Женские стрижки/укладки",
          under_item: [
            {
              big_row: "Женские стрижки",
              item_itself: [
                {name:"1 длина",price:"1000"},
                {name:"2 длина",price:"1200"},
                {name:"3 длина",price:"1500"},
                {name:"Коррекция длины волос (стрижка - на сухие без мытья)",price:"600"},
                {name:"Полировка волос (любая длина)",price:"1500"},
                {name:"Стрижка челки",price:"300"},
              ]
            }
          ]
        }
      ]
    },
    mounted: function() {
        document.querySelector('.preloader').style.height = "0vh";
    }
  })

});