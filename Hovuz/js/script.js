window.addEventListener("DOMContentLoaded", () => {
  "use strict";


  let tabs = document.querySelectorAll(".goods__tab"),
  tabcontent = document.querySelectorAll(".tabcontent");
  
  function hideTabcontent()  {
    tabcontent.forEach(item => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("activer");
    });
  }
  function showTabContent(i=0) {
   
    
        tabcontent[i].style.display = "block";
        tabs[i].classList.add("activer");
    
  }
  
  hideTabcontent();
  showTabContent();
  tabs.forEach((item, i) => {
    item.addEventListener("click", () => {
      hideTabcontent();
      showTabContent(i);
    });
  });
  
  
  // forms
  

  
 


  
  let formes = (state) => {
    let forms = document.querySelectorAll("form"),
  inputs = document.querySelectorAll("input");
  
  const messages = {
    loading: "Xahiş edirik, bir neçə saniyə gözləyəsiniz..",
    success: "Əməliyyat uğrula bitmişdir. Sizinlə tezliklə əlaqə saxlayacaqlar",
    failure: "Hanısa bir xəta baş vermişdir"
  };
  

  const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};
checkNumInputs('input[name="phone"]');
  
function postArray() {
  let btns = document.querySelectorAll(".product__buy");
  let goodNames = document.querySelectorAll(".product__tittle");
  let modalForm = document.querySelector(".modal");
  let gg = document.querySelector(".modal-name");

  

  

  let closeBtn = document.querySelector(".modal_close");
  closeBtn.addEventListener("click", () => {
    modalForm.style.display = "none";
    document.body.style.overflow = "";
  });
  modalForm.classList.add("modal");
  document.body.appendChild(modalForm);


  


  btns.forEach((item, i) =>{
    item.addEventListener("click",(e) =>{
      gg.value = goodNames[i].value;
      modalForm.style.display = "block";
      document.body.style.overflow = "hidden";
    

    });
  });
  

}
postArray();


  const  postData = async (url, data) => {
    document.querySelector('.status').textContent = messages.loading;
    const res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };
  
  function clearInputs() {
   
      inputs.forEach(item => {
        if(!item.classList.contains("product__tittle")) {
          item.value = "";
        }
      });
    
  }
  
  forms.forEach(item =>{
    if(!item.classList.contains("navbar__input")) {
      item.addEventListener("submit", (e) => {
        e.preventDefault();
        let statusMessage = document.createElement("div");
        statusMessage.classList.add("status");
        item.appendChild(statusMessage);
    
        let formData = new FormData(item);
        if(item.getAttribute("data-id") === "end"){
          for(let key in state) {
            formData.append(key, state[key]);
          }
        }
        postData("mailer/smart.php", formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = messages.success;
        })
        .catch(() => {
          statusMessage.textContent = messages.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
        }, 5000);
        });
         
    
      });
    }
  });
  };
  formes();



  let products = document.querySelectorAll(".product"),
      buttons = document.querySelectorAll(".product__basket"),
      openBtn = document.querySelector(".openbasket");

      function createCard() {
        let card = document.createElement("div"),
            field = document.createElement("div"),
            heading = document.createElement("h2"),
            closeBtn = document.createElement("button");

           card.classList.add("cart"),
           field.classList.add("cart-list"),
           closeBtn.classList.add("close");
           heading.textContent = "Səbətin içindəkilər:";
           closeBtn.innerHTML = "<span>&#9985;</span>";
           closeBtn.style.fontSize = "65px";
           closeBtn.style.color = "red";
           document.body.appendChild(card);
           card.appendChild(heading);
           card.appendChild(field);
           card.appendChild(closeBtn);
           card.style.display = "none";

      }

      createCard();
      let field = document.querySelector(".cart-list"),
      card = document.querySelector(".cart"),
      closeBtn = document.querySelector(".close");

     


      function openCard() {
        card.style.display = "block";
        document.querySelector(".outbasket").style.display = "none";
      }
      function closeCard() {
        card.style.display = "none";
        document.querySelector(".outbasket").style.display = "block";
      }
      openBtn.addEventListener("click", ()=> {
        openCard();
      });
      closeBtn.addEventListener("click", () => {
        closeCard();
      });

      buttons.forEach((item, i) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          let item = products[i].cloneNode(true);
          let del = item.querySelector(".product__basket");
          let buy = item.querySelector(".product__buy");
          let price = item.querySelector(".product__price");
          let buttoner = item.querySelector(".product__buttons");
          let footer = item.querySelector(".product__footer");
          let desc = item.querySelector(".product__desc");
          buttoner.style.display = "none";
          del.remove();
          buy.remove();
          desc.style.display = "none";
          price.style.textAlign = "center";
          price.style.margin = "30px auto 0 auto";
          price.style.fontSize = "43px" ;
          footer.style.marginTop = "46px";
          field.appendChild(item);
          
          
        });
      });





let offset = 0;
const sliderLine = document.querySelector(".goods__tabs");

document.querySelector(".buttonnext").addEventListener("click", () => {
  offset = offset + 230;
  if(offset > 1150) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
document.querySelector(".buttonprev").addEventListener("click", () => {
  offset = offset - 230;
  if(offset < 0) {
    offset = 1150;
  }
  sliderLine.style.left = -offset + "px";
});


new WOW().init();




$(window).scroll(function(){
  if($(this).scrollTop() > 1000) {
    $(".page__up").fadeIn();
  } else {
    $(".page__up").fadeOut();
  }
});

$(function(){
  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});



// window.addEventListener("scroll", () => {
//   if(this.scrollTop() > 700) {
//     document.querySelector(".page__up").style.display="block";
//   } else {
//     document.querySelector(".page__up").style.display="none";
//   }
// });


// let searchInput = document.querySelector(".navbar__input");
// searchInput.addEventListener("input", () => {
//   let value = searchInput.value;
//   let list = document.querySelectorAll(".product__tittle");
//   if(value != " ") {
//     list.forEach(elem => {
//       if(elem.innerHTML.search(value) == -1) {
//         elem.style.display = "none";
//       }
//     });
//   }
// });













});

