'use strict'

window.addEventListener('load', function() {


    new Vue({
        el: '.menu-itself',
        data: {
            menu: [
                { name: 'О нас', url: "#offer"},
                { name: 'Галерея', url: "#galery"},
                { name: 'Видео', url: "#video"},
                { name: 'Отзывы', url: "#otzivi"},
                { name: 'Наша команда', url: "#team"},
                { name: 'Контакты', url: "#contacts"},
                { name: 'Вакансии', url: "#vacansy"},
                { name: 'Прайс-лист', url: "price-list.html"},
            ],
        }
    })

    // Jquery
    $('.slider-itself').slick({
        dots: true,
    });

  

    $(".phone-form").mask("+7 (999) 999-99-99");

    // let timer = setInterval(function(){
    //   console.log('stop');
    //     if (document.querySelector('.phone-form-modal') != 'null') {
    //       clearInterval(timer);
    //       $(".phone-form-modal").mask("+7 (999) 999-99-99");
    //     }
    // }, 100);

    // setTimeout(function(){
    //   clearInterval(timer);
    // }, 5000);
   
   

   

  


    // End Jquery
  


      
    Vue.component('offer-items', {
        props: ['offers'],
        template: `
            <div class="offer-item">   
                <h3>{{offers.zagolovok}}</h3>
                <p>{{offers.text}}</p>
                <img :src="offers.img" v-if="offers.seen_img">
            </div>
        `
      })

      new Vue({
          el: '.offer',
          data: {
            offers: [
                { seen_img: true, img: "img/offer/hair.png",zagolovok: 'Hair Art Zone', text: 'Сложное окрашивание, шатуш/балаяж/омбре, брондирование, блондирование, тонирование, мелирование. Стрижки, укладки, прически, косы и многое другое. Также у нас есть потрясающие процедуры, которые помогут достичь невероятных эффектов, не просто покоряя внешним видом волос, но и с восстановительным эффектом.'},
                { seen_img: true,img: "img/offer/nail.png",zagolovok: 'Nail мастера', text: 'Маникюр, педикюр, покрытие, дизайн, наращивание — легко! Так же мы можем  предложить преображение и релаксацию вашим ручкам и ножкам при помощи разнообразных процедур и  массажа.'},
                { seen_img: true,img: "img/offer/eye.png",zagolovok: 'Лашмейкер', text: 'Специалист по наращиванию ресничек. Хотите взгляд кошки, просто немного увеличить объем или длинну, тогда Вам к нам! Вы получите эффектный и натуральный результат.'},
                { seen_img: false,img: "img/offer/hair.png",zagolovok: 'Прочие услуги', text: 'Архитектура, ламинирование, окрашивание бровей и ресниц, вечерние и свадебные образы (прическа и макияж), мужские стрижки.'},
            ],
          }
      })

      new Vue({
        el: ".footer",
        data: {
          socials: [
            {url : "https://vk.com/kravchenko_gaisina",img: "img/footer/vk.png"},
            {url : "https://instagram.com/art_me_master?r=nametag",img: "img/footer/instagram.png"},
            {url : "https://www.facebook.com/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD-%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B-Art-Me-Master-1014899832179169/",img: "img/footer/facebook.png"},
          ]
        }
      })

//    {url : "#",img: "img/footer/twitter.png"},


    


      let all_offers = document.querySelectorAll('.offer-item');
      let last_scroll = window.pageYOffset;
      let array_bottom_offer = [];

      setTimeout(() => {
        array_bottom_offer.push(all_offers[0].getBoundingClientRect().bottom + 100);
        array_bottom_offer.push(all_offers[1].getBoundingClientRect().bottom + 100);
        array_bottom_offer.push(all_offers[2].getBoundingClientRect().bottom + 100);
        array_bottom_offer.push(all_offers[3].getBoundingClientRect().bottom + 100);
      }, 500);

      
     let vacansy_links = [];
     let vacansy_array = [];

     let teams = [];

     let menu = document.querySelector('.menu');
     let header = document.querySelector('.header'); 

     let magic_number_team = 200;
     let magic_number_offers = 100;

     if (screen.width < 500) {
      magic_number_team = 0;
      magic_number_offers = 200;
     }
     if (screen.width < 500) {
      magic_number_offers = 150;
     }




    // team-show-block
     


      window.onscroll = () => {


       let current_scroll = window.pageYOffset;

        if (current_scroll > last_scroll) {
               
             all_offers.forEach(function(item,i) {
                if ((current_scroll+ screen.height) > array_bottom_offer[i]-magic_number_offers) {
                    item.classList.add('show-offer');  
                }
            });  

            vacansy_links.forEach(function(item,i) {
              if ((current_scroll+ screen.height) > vacansy_array[i]) {
                  item.classList.add('show-up');  
              }
            });  

        
            

            teams = document.querySelectorAll('.team-itself');



            teams.forEach(function(item,i) {
              if ((item.getBoundingClientRect().bottom - screen.height + magic_number_team) < 0) {
                  item.classList.add('team-show-block'); 
              }
           });

           if (header.getBoundingClientRect().bottom < 0) {
              menu.classList.add('fixed-menu');
              }
           

        } else { 


            all_offers.forEach(function(item,i) {
                if ((current_scroll+ screen.height) < array_bottom_offer[i]-magic_number_offers) {
                    item.classList.remove('show-offer');  
                }
            });   

            vacansy_links.forEach(function(item,i) {
              if ((current_scroll+ screen.height) < vacansy_array[i]) {
                  item.classList.remove('show-up');  
              }
            });  

            teams = document.querySelectorAll('.team-itself');

            teams.forEach(function(item,i) {
              if ((item.getBoundingClientRect().bottom - screen.height + magic_number_team) > 0) {
                  item.classList.remove('team-show-block'); 
              }
           }); 

           if (header.getBoundingClientRect().bottom > 0) {
            menu.classList.remove('fixed-menu');
              }

          
        }
     
        last_scroll = current_scroll;

      }


      
      document.querySelector('.button-send').addEventListener('click', (event) => {

        let parrent = event.target.parentElement;

       let accept = parrent.querySelector('input[type="checkbox"]');
       let description = parrent.parentElement.querySelector('.description-accept');
        if (accept.checked) {
              var formData = new FormData(document.forms.common);

              
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "/send/send.php");
                xhr.send(formData);

                xhr.onreadystatechange = function() {
                  if (this.readyState != 4) return;
                
                  if (this.status != 200) {
                    console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                    return;
                  } else {
                        console.log( xhr.responseText ); 
                      document.querySelector('.common-form form').classList.add('hide');
                      setTimeout(() =>{
                        document.querySelector('.common-form .description').classList.remove('hide');
                      }, 300);

                  }

                }
        } else {
          description.classList.remove('hide');
          setTimeout(() =>{
            description.classList.add('hide');
                }, 2000);
        }
            

      });

      document.querySelector('.button-send-common-two').addEventListener('click', () => {


        let parrent = event.target.parentElement;

        let accept = parrent.querySelector('input[type="checkbox"]');
        let description = parrent.parentElement.querySelector('.description-accept');
         if (accept.checked) { 
                
            var formData = new FormData(document.forms.common_two);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/send/send.php");
            xhr.send(formData);

            xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;

            if (this.status != 200) {
            console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
            return;
            } else {
              document.querySelector('.common-form-two form').classList.add('hide');
              setTimeout(() =>{
                document.querySelector('.common-form-two .description').classList.remove('hide');
              }, 300);

            }

            }
      } else {
            description.classList.remove('hide');
            setTimeout(() =>{
              description.classList.add('hide');
                  }, 2000);
          }
            });

      
        

         
      new Vue({
          el: '.galery',
          data: {
              name: "Фотогалерея",
              gallerys: [
                {url: "img/gallery/img-1-min.jpeg"},{url: "img/gallery/img-2-min.jpeg"},{url: "img/gallery/img-3-min.jpeg"},
                {url: "img/gallery/img-4-min.jpeg"},{url: "img/gallery/img-5-min.jpeg"},{url: "img/gallery/img-6-min.jpeg"},
                {url: "img/gallery/img-7-min.jpeg"},{url: "img/gallery/img-8-min.jpeg"},{url: "img/gallery/img-9-min.jpeg"},
                {url: "img/gallery/img-10-min.jpeg"},{url: "img/gallery/img-11-min.jpeg"},{url: "img/gallery/img-12-min.jpeg"},
                {url: "img/gallery/img-13-min.jpeg"},{url: "img/gallery/img-14-min.jpeg"},{url: "img/gallery/img-15-min.jpeg"},
                {url: "img/gallery/img-16-min.jpeg"},{url: "img/gallery/img-17-min.jpeg"},{url: "img/gallery/img-18-min.jpeg"},
                {url: "img/gallery/img-19-min.jpeg"},{url: "img/gallery/img-20-min.jpeg"},{url: "img/gallery/img-21-min.jpeg"},
                {url: "img/gallery/img-22-min.jpeg"},{url: "img/gallery/img-23-min.jpeg"},{url: "img/gallery/img-24-min.jpeg"},
                {url: "img/gallery/img-25-min.jpeg"},{url: "img/gallery/img-26-min.jpeg"},{url: "img/gallery/img-27-min.jpeg"},
                {url: "img/gallery/img-28-min.jpeg"},{url: "img/gallery/img-29-min.jpeg"},{url: "img/gallery/img-30-min.jpeg"},
                {url: "img/gallery/img-31-min.jpeg"},{url: "img/gallery/img-32-min.jpeg"},{url: "img/gallery/img-33-min.jpeg"},
                {url: "img/gallery/img-34-min.jpeg"},{url: "img/gallery/img-35-min.jpeg"},{url: "img/gallery/img-36-min.jpeg"},
                {url: "img/gallery/img-37-min.jpeg"},{url: "img/gallery/img-38-min.jpeg"},{url: "img/gallery/img-39-min.jpeg"},
                {url: "img/gallery/img-40-min.jpeg"},{url: "img/gallery/img-41-min.jpeg"},{url: "img/gallery/img-42-min.jpeg"},
                {url: "img/gallery/img-43-min.jpeg"},{url: "img/gallery/img-44-min.jpeg"},{url: "img/gallery/img-45-min.jpeg"},
                {url: "img/gallery/img-46-min.jpeg"},{url: "img/gallery/img-47-min.jpeg"},

              ]
          },
          mounted: function() {
            lightbox.option({
              'wrapAround': true,
              'positionFromTop' : 200,
              'disableScrolling' : true,
              
            });
          }
      })

      new Vue({
        el: '.video',
        data: {
            name: "Видео"
        }
    })

      new Vue({
        el: '.otzivi',
        data: {
            name: "Отзывы"
        }
    })



  Vue.component('our-team', {
    props: ['teams'],
    template: `
        <div class="our-teams">   
            <p v-if="teams.seen_zagolovok" class="team-zagolovok" :class="teams.pos_zagolovok">{{teams.zagolovok}}</p>
            <div  class="team-block">
                <div v-if="teams.team_block1" class="team-itself">
                    <div class="team-img">
                        <img :src="teams.img1">
                    </div>
                    <p class="team-name">{{teams.name1}}</p>
                    <p class="team-text">{{teams.text1}}</p>
                </div>
                <div v-if="teams.team_block2" class="team-itself">
                    <div class="team-img">
                        <img :src="teams.img2">
                    </div>
                    <p class="team-name">{{teams.name2}}</p>
                    <p class="team-text">{{teams.text2}}</p>
                </div>
                <div v-if="teams.team_block3" class="team-itself">
                    <div class="team-img">
                        <img :src="teams.img3">
                    </div>
                    <p class="team-name">{{teams.name3}}</p>
                    <p class="team-text">{{teams.text3}}</p>
                </div>
            </div>
        </div>
    `
  })

  new Vue({
    el: '.team',
    data: {
        name: "Наша команда",
        teams: [
          {
            "seen_zagolovok": true,
            "zagolovok": "Hair Art стилисты",
            "team_block1": true,
            "team_block2": true,
            "team_block3": true,
            "img1": "img/team/img1.png",
            "img2": "img/team/img1.png",
            "img3": "img/team/img1.png",
            "name1": "Александра",
            "name2": "Александра",
            "name3": "Александра",
            "text1": "Описание, опыт, курсы по повышению квалификации.",
            "text2": "Описание, опыт, курсы по повышению квалификации.",
            "text3": "Описание, опыт, курсы по повышению квалификации.",
            "pos_zagolovok" : "center"
          },
          {
            "seen_zagolovok": true,
            "zagolovok": "Nail Art мастера",
            "team_block1": true,
            "team_block2": true,
            "team_block3": true,
            "img1": "img/team/img1.png",
            "img2": "img/team/img1.png",
            "img3": "img/team/img1.png",
            "name1": "Александра",
            "name2": "Александра",
            "name3": "Александра",
            "text1": "Описание, опыт, курсы по повышению квалификации.",
            "text2": "Описание, опыт, курсы по повышению квалификации.",
            "text3": "Описание, опыт, курсы по повышению квалификации.",
            "pos_zagolovok" : "center"
          },
          {
            "seen_zagolovok": true,
            "zagolovok": "Администраторы",
            "team_block1": true,
            "team_block2": true,
            "team_block3": true,
            "img1": "img/team/img1.png",
            "img2": "img/team/img2.jpg",
            "img3": "img/team/img1.png",
            "name1": "Александра",
            "name2": "Алёна",
            "name3": "Александра",
            "text1": "Описание, опыт, курсы по повышению квалификации.",
            "text2": "Описание, опыт, курсы по повышению квалификации.",
            "text3": "Описание, опыт, курсы по повышению квалификации.",
            "pos_zagolovok" : "right_with_before"
          },
          {
            "seen_zagolovok": false,
            "zagolovok": "Nail Art мастера",
            "team_block1": true,
            "team_block2": true,
            "team_block3": true,
            "img1": "img/team/img1.png",
            "img2": "img/team/img1.png",
            "img3": "img/team/img3.jpg",
            "name1": "Александра",
            "name2": "Александра",
            "name3": "Алина Друговейко",
            "text1": "Описание, опыт, курсы по повышению квалификации.",
            "text2": "Описание, опыт, курсы по повышению квалификации.",
            "text3": "Заместитель директора студии красоты Art Me Master.",
            "pos_zagolovok" : "center"
          },
        ]
    },
    mounted: function() {
      document.querySelector('.preloader').style.height = "0vh";
    }
})



Vue.component('contacts-itself', {
  props: ['contacts'],
  template: `
      <div class="contacts-text">
          <img :src="contacts.img">
          <p>{{contacts.text}}</p>
      </div>   
  `
})

Vue.component('social-itself', {
  props: ['socials'],
  template: `
      <a :href="socials.link"><img :src="socials.img"></a>
  `
})

new Vue({
  el: '.contacts',
  data: {
      name: "Контакты",
      contacts: [
        {"img": "img/map.png", "text":"Москва, ул. Скобелевская д.12 (м. Скобелевская)"},
        {"img": "img/phone-icon.png", "text":"+7 (977) 678-08-83"},
        {"img": "img/email.png", "text":"artmemaster@yandex.ru"},
      ],
      socials: [
        {"img": "img/socials/vk.png", "link":"https://vk.com/kravchenko_gaisina"},
        {"img": "img/socials/instagram.png", "link":"https://instagram.com/art_me_master?r=nametag"},
        {"img": "img/socials/facebook.png", "link":"https://www.facebook.com/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD-%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B-Art-Me-Master-1014899832179169/"},
      ]
  }, 
})

//{"img": "img/socials/twitter.png", "link":"https://vk.com/"},


    $('.otzivi-slider').slick({

    });

      

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });


      let resolution = screen.width;
      let number_slides = 4;
      if (resolution < 780) {
        number_slides = 2;
      } 
      if(resolution < 500) {
        number_slides = 1;
      }
      
      $('.slider-nav').slick({
        slidesToShow: number_slides,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: true,
        focusOnSelect: true
      });

  
      document.querySelectorAll('.video-slider .slider-for .video-itself').forEach((item) => {
        
        item.addEventListener('click', () => {
            item.querySelector('.shadow-video').style.opacity = "0";
        });
        
        item.addEventListener('touchend', () => {
           item.querySelector('.shadow-video').style.opacity = "0";
        });
        
    });
   
    
     
    document.querySelector('.slider-nav').addEventListener('click', ()=>{
        document.querySelectorAll('.video-slider .slider-for .shadow-video').forEach((item) => {
              item.style.opacity = "1";
      });
    });



  Vue.component('modal-form', {
          props: ['settings'],
          template: `
            <div class="modal-form">
                <div class="shadow-back"></div>
                <div class="modal-form-itself">
                    <form action="/send/send.php" name="modal">
                        <div class="close-btn">X</div>
                        <p class="zagolovok-form">{{settings.zagolovok}}</p>
                        <input type="hidden" name="name_form" v-bind:value="settings.hidden" class="form-item">
                        <input type="text" name="name" placeholder="Ваше имя" class="form-item">
                        <input type="text" name="phone" class="phone-form-modal form-item"  placeholder="+7 (___) ___-__-__ " >
                        <textarea rows="7" cols="42" v-if="settings.textarea"   name="otziv" class="form-item" :placeholder="settings.textarea_placeholder"></textarea>
                        <select size="1"  name="select" class="form-item" v-if="settings.select.seen">
                            <option :value="option.name"  v-for="option in  settings.select.option">{{option.name}}</option>
                       </select>
                        <div class="form-group modal-file form-item" v-if="settings.file"  >
                            <label for="modal__file" class="textover">Файл не загружен</label>
                            <input type="file" id="modal__file" name="file"   value=""></input>
                        </div>
                        <div class="accept-block">
                            <input id="accept-modal" type="checkbox" name="accept" value="male">
                            <label for="accept-modal">Я разрешаю обработку моих персональных данных</label>
                        </div> 
                        <div class="description-accept hide">Согласитесь с обработкой данных</div>
                        <div  class="button-send-modal  form-item" >Отправить</div>
                    </form>
                    <div class="description hide">{{settings.description}}</div>
                </div>
            </div>
          `
        })

       let modal_form = new Vue({
            el: '.otzivi-form',
            data: {
              settings: 
                  { 
                    zagolovok: "Оставьте свой отзыв и скоро он появится на сайте",
                    description: 'Ваш отзыв отправлен',
                    hidden : 'otzivi',
                    textarea: true,
                    textarea_placeholder: "Ваш отзыв",
                    file: true,
                    select: {
                         seen: false,
                     }
                  },
            },
              mounted: function () {
                $(".phone-form-modal").mask("+7 (999) 999-99-99");
              }
        })





      new Vue({
          el: '.vacansy',
          data: {
            name: "Вакансии",
            vacansys: [
               {"url" : "#", "name": "Менеджер по подбору лака для ногтей"},
               {"url" : "#", "name": "Администратор"},
               {"url" : "#", "name": "Парикмахер-универсал"},
               {"url" : "#", "name": "Менеджер по подбору лака для ногтей"},
               {"url" : "#", "name": "Администратор"},
               {"url" : "#", "name": "Парикмахер-универсал"},
            ]
          },
          mounted: function () {
            vacansy_links = document.querySelectorAll('.vacansy-link');
           
            vacansy_links.forEach(function(item) {
              vacansy_array.push(item.getBoundingClientRect().bottom);
            });
           
          }
      })

        


       document.querySelector('input[type=file]').addEventListener('change', ()=>{
            let value = document.querySelector('input[type=file]').value.split ('/');
            if (value.length == 1){
              value = document.querySelector('input[type=file]').value.split ('\\').pop();
            };
              document.querySelector('.modal-file label').innerHTML = value;
       });

       document.querySelector('.btn-send_otziv').addEventListener('click', () => {
        let new_form  = {
          zagolovok: "Оставьте свой отзыв и скоро он появится на сайте",
          description: 'Ваш отзыв отправлен',
          hidden : 'otzivi',
          textarea: true,
          textarea_placeholder: "Ваш отзыв",
          file: true,
          select: {
              seen: false,
          }
         }; 
       
        showModalForm(new_form);
       });

       document.querySelector('.btn-send_consult').addEventListener('click', () => {

         let new_form  = {
          zagolovok: "Оставьте свои контактные данные и мы Вам перезвоним",
          description: 'Заявка отправлена',
          hidden : 'consult',
          textarea: false,
          textarea_placeholder: "Название вакансии",
          file: false,
          select: {
              seen: false,
          }
        };
        showModalForm(new_form);
       });

       document.querySelector('.btn-send_vacansy').addEventListener('click', () => {

        let new_form  = {
         zagolovok: "Оставьте свои контактные данные и мы Вам перезвоним",
         description: 'Контакты отправлены',
         hidden : 'vacansy',
         textarea_placeholder: "Название вакансии",
         textarea: false,
         file: true,
         select: {
              seen: true,
              option: [
                    {name: "Администратор"},
                    {name: "Менеджер по подбору лака для ногтей"},
                    {name: "Парикмахер-универсал"},
                    {name: "Администратор"},
                    {name: "Менеджер по подбору лака для ногтей"},
                    {name: "Парикмахер-универсал"},
                  ]
          }
       };
       showModalForm(new_form);
      });

       function showModalForm(new_form){
        modal_form.settings = new_form;
        document.querySelector('.modal-form form').reset();
        if(document.querySelector('.modal-file label')) {
           document.querySelector('.modal-file label').innerHTML = "Файл не выбран"; 
        }
        document.querySelector('.modal-form .description').classList.add('hide');
        document.querySelector('.modal-form form').classList.remove('hide');
        document.querySelector('.modal-form').style.visibility = "visible";
        document.querySelector('.modal-form').style.opacity = "1";
       }

       
       document.querySelector('.modal-form .close-btn').addEventListener('click', () => { 
                document.querySelector('.modal-form').style.opacity = "0";
                document.querySelector('.modal-form').style.visibility = "hidden";
       });
       
       document.querySelector('.modal-form .shadow-back').addEventListener('click', () => { 
              document.querySelector('.modal-form').style.opacity = "0";
              document.querySelector('.modal-form').style.visibility = "hidden";
        });


       document.querySelector('.modal-form .button-send-modal').addEventListener('click', () => {
           
                //   let form_modal = document.querySelector('.modal-form form');
                //   let form_height = form_modal.getBoundingClientRect().height;
                //   form_modal.style.height = form_height + 'px';
                let parrent = event.target.parentElement;

                let accept = parrent.querySelector('input[type="checkbox"]');
                let description = parrent.parentElement.querySelector('.description-accept');
                 if (accept.checked) { 
                     
                  sendModal(document.forms.modal);
                   }  else {
                    description.classList.remove('hide');
                    setTimeout(() =>{
                      description.classList.add('hide');
                          }, 2000);
                  }


              });


           //   document.forms.common 

              function sendModal(form) {


                   
                    var formData = new FormData(form);



                    // добавить к пересылке ещё пару ключ - значение
                    //formData.append("name", "Fred");


                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "/send/send.php");
                    xhr.send(formData);

                    xhr.onreadystatechange = function() {
                    if (this.readyState != 4) return;

                    if (this.status != 200) {
                    console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );

                    
                    


                    return;
                    } else {
                     // console.log(this.responseText);

                      document.querySelector('.modal-form .description').classList.remove('hide');
                      document.querySelector('.modal-form form').classList.add('hide');
                      setTimeout(()=>{
                          document.querySelector('.modal-form').style.opacity = "0";
                          document.querySelector('.modal-form').style.visibility = "hidden";
                      }, 800);

                    }

                    }
              }


              $('a[href^="#"]').on('click', function(event) {
                // отменяем стандартное действие
                event.preventDefault();
                
                let link = $(this).attr("href");
               // console.log($.attr(this, 'href').offset().top);
                let top = $(link).offset().top;
          
                
                $('html, body').animate({scrollTop: top}, 1000);
              
              });



              if (screen.width < 500) {
                document.querySelector('.menu-button').addEventListener('click', function(){
                  let menu = document.querySelector('.menu');
                    if (menu.getBoundingClientRect().height == 45) {
                        menu.style.height = '410px';
                        menu.querySelector('.menu-button').classList.add('menu-button-open');
                    } else {
                      menu.style.height = '45px';
                        menu.querySelector('.menu-button').classList.remove('menu-button-open');
                    }
                });
              }

  

   
      


});




