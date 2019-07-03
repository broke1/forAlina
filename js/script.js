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
                        <input type="hidden" name="name_form" value="" class="form-item">
                        <input type="text" name="name" placeholder="Ваше имя" class="form-item">
                        <input type="text" name="phone" class="phone-form"  placeholder="+7 (___) ___-__-__ " class="form-item">
                        <textarea rows="7" cols="42" name="otziv" class="form-item" placeholder="Ваш отзыв"></textarea>
                        <div class="form-group modal-file form-item">
                            <label for="modal__file" class="textover">Файл не загружен</label>
                            <input type="file" id="modal__file" name="file"  placeholder="Файл " value="">
                        </div>
                        <div class="description hide form-item">{{settings.description}}</div>
                        <div class="button-send-modal form-item">Отправить</div>
                    </form>
                    
                </div>
            </div>
          `
        })

        new Vue({
            el: '.otzivi-form',
            data: {
              settings: [
                  { description: 'Ваш отзыв отправлен',},
                 
              ],
            }
        })




});

