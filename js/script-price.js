
'use strict'

window.addEventListener('load', function() {



  Vue.component('table-item', {
    props: ['items'],
    template: `
        <div class="table-item">
            <h2 class="zagolovok"><span></span>{{items.zagolovok}}</h2>
            <div class="table-row zaglavie">
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
            },
            {
              big_row: "Укладка феном/ сушка по форме",
              item_itself: [
                {name:"1 длина",price:"800"},
                {name:"2 длина",price:"900"},
                {name:"3 длина",price:"1100"},
              ]
            },
            {
              big_row: "Плетение кос",
              item_itself: [
                {name:"2 колоска",price:"400"},
                {name:"Плетение кос ( от сложности )",price:"от 500 до 1000"},
              ]
            },
            {
              big_row: "Коктельная укладка/Вечерняя прическа/Свадебная",
              item_itself: [
                {name:"1 длина",price:"2000"},
                {name:"2 длина",price:"2500"},
                {name:"3 длина",price:"3000"},
                {name:"Свадебная прическа",price:"4000"},
                {name:"Экспресс локоны любая длинна (без мытья)",price:"1000"},
              ]
            },
          ]
        },
        {
          zagolovok:"Мужской зал",
          under_item: [
            {
              big_row: "Мужская стрижка",
              item_itself: [
                {name:"Модельная",price:"800"},
                {name:"1 насадка, наголо",price:"500"},
                {name:"2 насадки",price:"600"},
                {name:"Длинных волос",price:"1000"},
                {name:"Окантовка бороды",price:"300"},
                {name:"Стрижка усов",price:"200"},
                {name:"Оформление бровей",price:"100"},
                {name:"Массаж головы (7 мин)",price:"200"},
              ]
            },
          ]
        },
        {
          zagolovok:"Стрижка детская",
          under_item: [
            {
              big_row: "Стрижка детская",
              item_itself: [
                {name:"до 7 лет",price:"600"},
                {name:"от 8 до 13 лет",price:"700"},
                {name:"от 14 до 16 лет",price:"800"},
                {name:"под 1 насадку",price:"400"},
                {name:"под 2 насадки",price:"500"},
              ]
            },
          ]
        },
        {
          zagolovok:"Окрашивание",
          under_item: [
            {
              big_row: "Глазирование волос 5+ Protopak",
              item_itself: [
                {name:"1 длина",price:"3500"},
                {name:"2 длина",price:"4200"},
                {name:"3 длина",price:"5200"},
              ]
            },
            {
              big_row: "Окрашивание сложное",
              item_itself: [
                {name:"1 длина",price:"3500"},
                {name:"2 длина",price:"4500"},
                {name:"3 длина",price:"5500"},
              ]
            },
            {
              big_row: "ОКРАШИВАНИЕ в 1 тон/ ТОНИРОВАНИЕ",
              item_itself: [
                {name:"1 длина",price:"3200"},
                {name:"2 длина",price:"4000"},
                {name:"3 длина",price:"5000"},
              ]
            },
            {
              big_row: "ОКРАШИВАНИЕ в 1 тон/ ТОНИРОВАНИЕ корни",
              item_itself: [
                {name:"от 0,5 до 2 см",price:"2300"},
                {name:"от 2  до 6 см",price:"2800"},
              ]
            },
            {
              big_row: "Окрашивание своей краской",
              item_itself: [
                {name:"1 длина",price:"1300"},
                {name:"2 длина",price:"1450"},
                {name:"3 длина",price:"1650"},
              ]
            },
            {
              big_row: "Окрашивание корней своей краской",
              item_itself: [
                {name:"Любая длина",price:"1100"},
              ]
            },
            {
              big_row: "Фитоламинирование",
              item_itself: [
                {name:"1 длина",price:"2000"},
                {name:"2 длина",price:"3000"},
                {name:"3 длина",price:"4000"},
              ]
            },
            {
              big_row: "Экспресс тонирование красителем или маской",
              item_itself: [
                {name:"1 длина",price:"1000"},
                {name:"2 длина",price:"1500"},
                {name:"3 длина",price:"1800"},
              ]
            },
          ]
        },
        {
          zagolovok:"Осветление",
          under_item: [
            {
              big_row: "Shatush, Balayage, Ombre, Airtoch",
              item_itself: [
                {name:"1 длина",price:"4500"},
                {name:"2 длина",price:"6500"},
                {name:"3 длина",price:"7500"},
                {name:"Коррекция или зональное осветление",price:"5000"},
              ]
            },
            {
              big_row: "Блондирование/осветление",
              item_itself: [
                {name:"1 длина",price:"4000"},
                {name:"2 длина",price:"5500"},
                {name:"3 длина",price:"6500"},
                {name:"корни от 0,5 до 2 см",price:"2300"},
                {name:"корни от 2 до 6 см",price:"2800"},
              ]
            },
            {
              big_row: "Декапирование",
              item_itself: [
                {name:"1 длина",price:"2200"},
                {name:"2 длина",price:"2700"},
                {name:"3 длина",price:"3200"},
              ]
            },
            {
              big_row: "Мелирование",
              item_itself: [
                {name:"1 длина/корни ",price:"2500"},
                {name:"2 длина",price:"3800"},
                {name:"3 длина",price:"4800"},
              ]
            },
          ]
        },
        {
          zagolovok:"Уход за волосами",
          under_item: [
            {
              big_row: "Уход за волосами",
              item_itself: [
                {name:"Экспресс маска Biolage",price:"500"},
              ]
            },
            {
              big_row: "1 мусс клеточный увлажняющий IAU CELL CARE",
              item_itself: [
                {name:"IAU CELL CARE мусс клеточный увлажняющий",price:"800"},
              ]
            },
            {
              big_row: "Spa уход “Абсолютное счастье для волос”",
              item_itself: [
                {name:"1 длина",price:"3000"},
                {name:"2 длина",price:"4500"},
                {name:"3 длина",price:"5000"},
                {name:"4 длина (от лопаток и ниже)",price:"7000"},
              ]
            },
            {
              big_row: "Интенсив OLAPLEX",
              item_itself: [
                {name:"1 длина",price:"2500"},
                {name:"2 длина",price:"3500"},
                {name:"3 длина",price:"4500"},
              ]
            },
            {
              big_row: "Программа “Жизненная сила”",
              item_itself: [
                {name:"1 длина",price:"1500"},
                {name:"2 длина",price:"2000"},
                {name:"3 длина",price:"2500"},
              ]
            },
            {
              big_row: "Экспресс - уход  “Блеск и сила”",
              item_itself: [
                {name:"1 длина",price:"1500"},
                {name:"2 длина",price:"2000"},
                {name:"3 длина",price:"2500"},
              ]
            },
            {
              big_row: "Экспресс маска Detox biolage",
              item_itself: [
                {name:"Восстанавливающая",price:"800"},
                {name:"Увлажняющая",price:"800"},
                {name:"Для объема",price:"800"},
              ]
            },
          ]
        },
        {
          zagolovok:"Химическая завивка Lebel",
          under_item: [
            {
              big_row: "Химическая завивка Lebel",
              item_itself: [
                {name:"1 длина",price:"3000"},
                {name:"2 длина",price:"4000"},
                {name:"3 длина",price:"5000"},
              ]
            },
          ]
        },
      ],
      items2: [
        {
          zagolovok:"Маникюр/педикюр",
          under_item: [
            {
              big_row: "Маникюр",
              item_itself: [
                {name:"Маникюр+покрытие Гель лак/шеллак",price:"1600"},
                {name:"Маникюр детский",price:"400"},
                {name:"Маникюр Европейский не обрезной",price:"400"},
                {name:"Маникюр женский/мужской комбинированный, классический",price:"800"},
                {name:"Парафинотерапия для рук",price:"800"},
                {name:"Придание формы ногтям без маникюра",price:"200"},
                {name:"Ремонт 1 ногтя шелком",price:"200"},
                {name:"Шлифовка/полировка ногтей",price:"200"},
              ]
            },
            {
              big_row: "Наращивание ногтей",
              item_itself: [
                {name:"Коррекция нарощенных ногтей",price:"1500"},
                {name:"Механическая чистка нарощенных ногтей",price:"200"},
                {name:"Наращивание 1 ноготь",price:"300"},
                {name:"Наращивание ногтей гелем + френч",price:"3300"},
                {name:"Наращивание ногтей гелем",price:"2500"},
                {name:"Снятие нарощенных ногтей",price:"1200"},
              ]
            },
            {
              big_row: "Педикюр",
              item_itself: [
                {name:"Коррекция вросшего ногтя",price:"200"},
                {name:"Массаж стоп",price:"200"},
                {name:"Обработка натоптышей",price:"200"},
                {name:"Парафинотерапия для ног",price:"1000"},
                {name:"Педикюр аппаратный, комбинированный, классический",price:"1700"},
                {name:"Педикюр частичный (пальцы ног)",price:"1000"},
                {name:"Педикюр + снятие + покрытие",price:"2500"},
              ]
            },
            {
              big_row: "Покрытие дизайн",
              item_itself: [
                {name:"Swarovski полное стразирование",price:"500"},
                {name:"Swarovski страза 1 шт.",price:"50"},
                {name:"Swarovski страза 1 шт. крупная",price:"100"},
                {name:"Swarovski стразы до 10 шт.",price:"150"},
                {name:"Swarovski стразы свыше 10 шт",price:"300"},
                {name:"Акварель 1 ноготь",price:"150"},
                {name:"Битое стекло",price:"100"},
                {name:"Бульонки + мелкие стразы",price:"200"},
                {name:"Втирка",price:"50"},
                {name:"Дизайн простой",price:"100"},
                {name:"Дизайн сложный",price:"200"},
                {name:"Дизайн средней сложности",price:"150"},
                {name:"Кошачий глаз 1 ноготь",price:"50"},
                {name:"Кошачий глаз все ногти",price:"200"},
                {name:"Лента декоративная",price:"20"},
                {name:"Мрамор 1 ноготь ",price:"100"},
                {name:"Наклейки переводные",price:"50"},
                {name:"Паутинка",price:"50"},
                {name:"Песок/снег 1 ноготь",price:"50"},
                {name:"Стемпинг 1 ноготь",price:"75"},
                {name:"Фольга переводная",price:"50"},
                {name:"Художественная роспись 1 ногтя",price:"150"},
              ]
            },
            {
              big_row: "Покрытие ногтей",
              item_itself: [
                {name:"Гель лак Kodi/Milano/CosmoLac ",price:"800"},
                {name:"Гель лак Френч",price:"1300"},
                {name:"Гель лак Френч выкладной",price:"1800"},
                {name:"Лак, база, закрепитель",price:"200"},
                {name:"Лечебное покрытие IBX",price:"600"},
                {name:"Снятие биогеля при коррекции",price:"300"},
                {name:"Снятие гель лака без дальнейшего покрытия",price:"500"},
                {name:"Снятие гель лака",price:"200"},
                {name:"Снятие обычного лака",price:"100"},
              ]
            },
            {
              big_row: "Укрепление ногтей",
              item_itself: [
                {name:"Smart Система Укрепления ногтевой пластины",price:"1000"},
                {name:"Выравнивание базой",price:"200"},
                {name:"Укрепление 1 ногтя",price:"100"},
                {name:"Укрепление акриловой пудрой",price:"500"},
                {name:"Укрепление Каучук",price:"500"},
                {name:"Укрепление полигелем, гелем",price:"700"},
              ]
            },
          ],
        },
      ],
      items3: [
        {
          zagolovok:"Brow art bar",
          under_item: [
            {
              big_row: "Brow art bar",
              item_itself: [
                {name:"Архитектура бровей",price:"1400"},
                {name:"Долговременная укладка бровей (ламинирование + коррекция + окрашивание)",price:"2500"},
                {name:"Коррекция бровей (воск/пинцет)",price:"500"},
                {name:"Ламинирование ресниц (+окрашивание ресниц)",price:"2500"},
                {name:"Моделирование бровей (новая форма без окрашивания (воск/пинцет))",price:"800"},
                {name:"Окрашивание бровей (хной/краской)",price:"800"},
                {name:"Окрашивание ресниц",price:"500"},
                {name:"Ботокс бровей",price:"300"},
                {name:"Эпиляция любой зоны на лице (воск)",price:"500"},
              ]
            },
          ],
        },
      ],
      items4: [
        {
          zagolovok:"Наращивание ресниц",
          under_item: [
            {
              big_row: "Наращивание ресниц",
              item_itself: [
                {name:"1 Классика",price:"2300"},
                {name:"1,5 d",price:"2500"},
                {name:"2 d",price:"2600"},
                {name:"2,5 d",price:"2800"},
                {name:"3 d",price:"3000"},
                {name:"Коррекция",price:"1000"},
                {name:"Снятие ресниц",price:"300"},
              ]
            },
          ],
        },
      ],
      items5: [
        {
          zagolovok:"Make up ART",
          under_item: [
            {
              big_row: "Make up ART",
              item_itself: [
                {name:"Вечерний/праздничный макияж",price:"3000"},
                {name:"Дневной/лёгкий макияж",price:"2000"},
                {name:"Добавление ресничек",price:"500"},
                {name:"Макияж глаз",price:"1000"},
                {name:"Свадебный макияж",price:"4000"},
              ]
            },
          ],
        },
      ],

    },
    mounted: function() {
        document.querySelector('.preloader').style.height = "0vh";
    }
  })

});