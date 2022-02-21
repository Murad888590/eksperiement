// filter

const btnAll = document.querySelector(".btnAll"),

btnFilter = document.querySelector(".btnFilter"),
btnMozaika = document.querySelector(".btnMozaika"),
btnIzolyasiya = document.querySelector(".btnIzolyasiya"),
btnDerman = document.querySelector(".btnDerman"),
btnAcsesuar = document.querySelector(".btnAcsesuar"),
btnSistem = document.querySelector(".btnSistem");
const markAll = document.querySelectorAll(".all"),
markFilter = document.querySelectorAll(".filter"),
markMozaika = document.querySelectorAll(".mozaika"),
markIzolyasiya = document.querySelectorAll(".izolyasiya"),
markDerman = document.querySelectorAll(".derman"),
markAccesuar= document.querySelectorAll(".acsesuar"),
markSistem = document.querySelectorAll(".sistems");




function filter(trigger, current, activeClass) {
   
   trigger.addEventListener("click", (e) => {
    
      e.preventDefault();
     
      markAll.forEach(mark => {
         
         mark.style.display = "none";
      });
      current.forEach(cur=> {
         cur.classList.add("animated", "fadeIn");
         cur.style.display = "block";
         
      });
   });
}







function addClass(btnAll) {
  let  allBtn = document.querySelectorAll(btnAll);

      allBtn.forEach((btn, i) => {
         btn.addEventListener("click", (e) => {
            e.preventDefault();
            allBtn.forEach(btn => {
               btn.classList.remove("activation");
            });
            allBtn[i].classList.add("activation");
         });
         
      });

}
addClass(".allBtn");
filter(btnAll, markAll);
filter(btnFilter, markFilter);
filter(btnMozaika, markMozaika);
filter(btnIzolyasiya, markIzolyasiya);
filter(btnDerman, markDerman);
filter(btnAcsesuar, markAccesuar);
filter(btnSistem, markSistem);







const buyBtn = document.querySelectorAll(".good__button"),
wrapper = document.querySelector(".shop__wrapper"),
right = document.querySelector('.shophtml__right'),
gootTittle = document.querySelectorAll('.good__tittle');
const buyModal = document.createElement("form");
buyModal.style.cssText =`
   margin-left: 30px;
   
   
`;

buyBtn.forEach((btn, i) => {
   btn.addEventListener("click", (e) => {
      e.preventDefault();
    
      const inputName = document.createElement("input");
      inputName.setAttribute("type", "text");
      inputName.setAttribute("placeholder", "Malın adı");
      inputName.classList.add("inputes");
      const inputMail = document.createElement("input");
      inputMail.setAttribute("type", "mail");
      inputMail.setAttribute("placeholder", "Mail adresiniz");
      inputMail.classList.add("inputes");
      const inputTel = document.createElement("input");
      inputTel.setAttribute("type", "tel");
      inputTel.setAttribute("placeholder", "Telefon nömrəniz");
      inputTel.classList.add("inputes");
      const inputCount = document.createElement("input");
      inputCount.classList.add("inputes");
      inputCount.setAttribute("type", "text");
      const inputGood = document.createElement("input");
      inputGood.setAttribute("type", "text");
      inputGood.classList.add("inputes");
      inputGood.value = gootTittle[i].value;
      const buyBtn = document.createElement("button");
      buyBtn.textContent = "Almaq üçün müraciət et";
      buyBtn.classList.add("buyBtn");
      buyModal.append(inputName, inputMail, inputTel, inputCount, inputGood, buyBtn);
      wrapper.style.display = "none";
      right.appendChild(buyModal);

      
   });
});
const postData = async(url, data) => {
   let res = await fetch(url, {
      method: "POST",
      body: data
   });
   return res.json();
};

const messages = {
   Loading: "loading",
   succes: "succes",
   error: "error"
};

buyModal.addEventListener("submit", (e) => {
   e.preventDefault();
   const statusMessage = document.createElement("div");
   statusMessage.textContent = messages.Loading;
   buyModal.appendChild(statusMessage);

   const formData = new FormData(buyModal);
   postData("../mailer.smart.php", formData)
   .then(res => {
      statusMessage.textContent = messages.succes;
      console.log("res");
   })
   .catch(() => {
      statusMessage.textContent = messages.error;
   })
   .finally(() => {
      buyModal.remove();
      setTimeout(() => {
         wrapper.style.display = "flex";
      }, 1000);
   });
});