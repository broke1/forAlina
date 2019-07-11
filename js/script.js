'use strict'

window.addEventListener('load', function() {


    new Vue({
        el: '.menu-itself',
        data: {
            menu: [
                { name: 'О нас'},
                { name: 'Галерея'},
                { name: 'Видео'},
                { name: 'Отзывы'},
                { name: 'Наша команда'},
                { name: 'Контакты'},
                { name: 'Вакансии'},
                { name: 'Прайс-лист'},
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
   
   

    lightbox.option({
        'wrapAround': true,
        'positionFromTop' : 200,
      });

  


    // End Jquery
  


      
    Vue.component('offer-items', {
        props: ['offers'],
        template: `
            <div class="offer-item">   
                <h3>{{offers.zagolovok}}</h3>
                <p>{{offers.text}}</p>
            </div>
        `
      })

      new Vue({
          el: '.offer',
          data: {
            offers: [
                { zagolovok: 'Hair Art Zone', text: 'Сложное окрашивание, шатуш/балаяж/омбре, брондирование, блондирование, тонирование, мелирование. Стрижки, укладки, прически, косы и многое другое. Также у нас есть потрясающие процедуры, которые помогут достичь невероятных эффектов, не просто покоряя внешним видом волос, но и с восстановительным эффектом.'},
                { zagolovok: 'Nail мастера', text: 'Маникюр, педикюр, покрытие, дизайн, наращивание — легко! Так же мы можем  предложить преображение и релаксацию вашим ручкам и ножкам при помощи разнообразных процедур и  массажа.'},
                { zagolovok: 'Лашмейкер', text: 'Специалист по наращиванию ресничек. Хотите взгляд кошки, просто немного увеличить объем или длинну, тогда Вам к нам! Вы получите эффектный и натуральный результат.'},
                { zagolovok: 'Прочие услуги', text: 'Архитектура, ламинирование, окрашивание бровей и ресниц, вечерние и свадебные образы (прическа и макияж), мужские стрижки.'},
            ],
          }
      })



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
     


      window.onscroll = () => {


       let current_scroll = window.pageYOffset;

        if (current_scroll > last_scroll) {
               
             all_offers.forEach(function(item,i) {
                if ((current_scroll+ screen.height) > array_bottom_offer[i]) {
                    item.classList.add('show-offer');  
                }
            });  

            vacansy_links.forEach(function(item,i) {
              if ((current_scroll+ screen.height) > vacansy_array[i]) {
                  item.classList.add('show-up');  
              }
            });  

        } else { 


            all_offers.forEach(function(item,i) {
                if ((current_scroll+ screen.height) < array_bottom_offer[i]) {
                    item.classList.remove('show-offer');  
                }
            });   

            vacansy_links.forEach(function(item,i) {
              if ((current_scroll+ screen.height) < vacansy_array[i]) {
                  item.classList.remove('show-up');  
              }
            });  


          
        }
     
        last_scroll = current_scroll;

      }


      
      document.querySelector('.button-send').addEventListener('click', () => {
           
             // создать объект для формы
  var formData = new FormData(document.forms.common);

  // добавить к пересылке ещё пару ключ - значение
  //formData.append("name", "Fred");


  // отослать
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/send/send.php");
  xhr.send(formData);

  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;
  
    if (this.status != 200) {
      console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
      return;
    } else {
        document.querySelector('.common-form form').classList.add('hide');
        setTimeout(() =>{
          document.querySelector('.common-form .description').classList.remove('hide');
        }, 300);

    }

  }

      });

      document.querySelector('.button-send-common-two').addEventListener('click', () => {
           
                    // создать объект для формы
            var formData = new FormData(document.forms.common_two);

            // добавить к пересылке ещё пару ключ - значение
            //formData.append("name", "Fred");


            // отослать
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/send/send.php");
            xhr.send(formData);

            xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;

            if (this.status != 200) {
            console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
            return;
            } else {
              document.querySelector('.common-form form').classList.add('hide');
              setTimeout(() =>{
                document.querySelector('.description').classList.remove('hide');
              }, 300);

            }

            }

            });

      
        

         
      new Vue({
          el: '.galery',
          data: {
              name: "Фотогалерея"
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
        {"img": "img/socials/vk.png", "link":"https://vk.com/"},
        {"img": "img/socials/instagram.png", "link":"https://vk.com/"},
        {"img": "img/socials/twitter.png", "link":"https://vk.com/"},
        {"img": "img/socials/facebook.png", "link":"https://vk.com/"},
      ]
  },
})




    $('.otzivi-slider').slick({

    });

      

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });

      $('.slider-nav').slick({
        slidesToShow: 4,
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
                        <div class="form-group modal-file form-item" v-if="settings.file"  >
                            <label for="modal__file" class="textover">Файл не загружен</label>
                            <input type="file" id="modal__file" name="file"   value=""></input>
                        </div>
                        
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
                    file: true
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
          file: true
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
          file: false
        };
        showModalForm(new_form);
       });

       document.querySelector('.btn-send_vacansy').addEventListener('click', () => {

        let new_form  = {
         zagolovok: "Оставьте свои контактные данные и мы Вам перезвоним",
         description: 'Контакты отправлена',
         hidden : 'vacansy',
         textarea_placeholder: "Название вакансии",
         textarea: true,
         file: false
       };
       showModalForm(new_form);
      });

       function showModalForm(new_form){
        modal_form.settings = new_form;
        document.querySelector('.modal-form form').reset();
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
           
                  let form_modal = document.querySelector('.modal-form form');
                  let form_height = form_modal.getBoundingClientRect().height;
                  form_modal.style.height = form_height + 'px';
                  sendModal(document.forms.modal);

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

                    
                    


                    document.querySelector('.modal-form .description').classList.remove('hide');
                    document.querySelector('.modal-form form').classList.add('hide');
                    setTimeout(()=>{
                        document.querySelector('.modal-form').style.opacity = "0";
                        document.querySelector('.modal-form').style.visibility = "hidden";
                    }, 800);


                    return;
                    } else {
                      console.log(this.responseText);

                      document.querySelector('.modal-form .description').classList.remove('hide');
                      document.querySelector('.modal-form form').classList.add('hide');
                      setTimeout(()=>{
                          document.querySelector('.modal-form').style.opacity = "0";
                          document.querySelector('.modal-form').style.visibility = "hidden";
                      }, 800);

                    }

                    }
              }
      
 
            

});

