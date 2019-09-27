'use strict'

window.addEventListener('load', function() {




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
            el: '.vacansy-html',
            data: {
              settings: 
                  { 
                    zagolovok: "Оставьте свой отзыв и скоро он появится на сайте",
                    description: 'Ваш отзыв отправлен',
                    hidden : 'otzivi',
                    textarea: false,
                    textarea_placeholder: "Ваш отзыв",
                    file: true,
                    select: {
                         seen: false,
                     }
                  },
            },
            mounted: function() {
              document.querySelector('.preloader').style.height = "0vh";
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

  


  

      document.querySelector('.btn-send_vacansy_html').addEventListener('click', () => {

        let new_form  = {
         zagolovok: "Отправьте своё резюмэ",
         description: 'Резюмэ отправлено',
         hidden : 'vacansy-html',
         textarea_placeholder: "Название вакансии",
         textarea: false,
         file: true,
         select: {
              seen: false,
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


        




  

  
      
 

});




