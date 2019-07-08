'use strict'

window.addEventListener('DOMContentLoaded', function() {


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

      
     


      window.onscroll = () => {


       let current_scroll = window.pageYOffset;

        if (current_scroll > last_scroll) {
               
             all_offers.forEach(function(item,i) {
                if ((current_scroll+ screen.height) > array_bottom_offer[i]) {
                    item.classList.add('show-offer');  
                }
            });  

        } else { 
            all_offers.forEach(function(item,i) {
                if ((current_scroll+ screen.height) < array_bottom_offer[i]) {
                    item.classList.remove('show-offer');  
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
                        <textarea rows="7" cols="42" v-if="settings.textarea"   name="otziv" class="form-item" placeholder="Ваш отзыв"></textarea>
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
                    file: true
                  },
            },
              mounted: function () {
                $(".phone-form-modal").mask("+7 (999) 999-99-99");
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

