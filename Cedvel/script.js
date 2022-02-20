const month = document.querySelector(".month")
const day = document.querySelector(".day")
const monthDayUstF = document.querySelector(".monthDayUstF")
const monthDayUstS = document.querySelector(".monthDayUstS")
const monthDayUstFo = document.querySelector(".monthDayUstFo")
const monthDayUstFi = document.querySelector(".monthDayUstFi")
const monthDayAltF = document.querySelector(".monthDayAltF")
const monthDayAltS = document.querySelector(".monthDayAltS")
const monthDayAltFo = document.querySelector(".monthDayAltFo")
const monthDayAltFi = document.querySelector(".monthDayAltFi")
const falser = document.querySelector(".falser")
const bax = document.querySelector(".bax")

const mo = document.querySelectorAll(".mo")
mo.forEach(item => {
   item.style.display = "none"
   
})




bax.addEventListener("click", () => {
   if((month.value == "novenber" && day.value == 3) || (month.value == "novenber" && day.value == 6) || (month.value == "novenber" && day.value == 7) || (month.value == "novenber" && day.value == 10) || (month.value == "novenber" && day.value == 13) || (month.value == "novenber" && day.value == 14) || (month.value == "novenber" && day.value == 17) || (month.value == "novenber" && day.value == 20) || (month.value == "novenber" && day.value == 21) || (month.value == "novenber" && day.value == 24) || (month.value == "novenber" && day.value == 27) || (month.value == "novenber" && day.value == 28) || (month.value == "december" && day.value == 1) || (month.value == "december" && day.value == 4) || (month.value == "december" && day.value == 5) || (month.value == "december" && day.value == 11) || (month.value == "december" && day.value == 12) || (month.value == "december" && day.value == 15) || (month.value == "december" && day.value == 18) || (month.value == "december" && day.value == 19) || (month.value == "december" && day.value == 22) || (month.value == "december" && day.value == 25) || (month.value == "december" && day.value == 26) || (month.value == "december" && day.value == 29)) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      falser.style.display = "block"
   }
   if(month.value == "novenber" && day.value == 1) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 2) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltS.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 4) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFo.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 5) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFi.style.display = "block"
   } 




   if(month.value == "novenber" && day.value == 8) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 9) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstS.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 11) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFo.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 12) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFi.style.display = "block"
   } 





   if(month.value == "novenber" && day.value == 15) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 16) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltS.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 18) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFo.style.display = "block"
   }
   if(month.value == "novenber" && day.value == 19) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFi.style.display = "block"
   }






   if(month.value == "novenber" && day.value == 22) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 23) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstS.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 25) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFo.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 26) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFi.style.display = "block"
   }






   if(month.value == "novenber" && day.value == 29) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 30) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltS.style.display = "block"
   }
   if(month.value == "december" && day.value == 2) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFo.style.display = "block"
   }
   if(month.value == "december" && day.value == 3) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFi.style.display = "block"
   }







   if(month.value == "december" && day.value == 6) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstF.style.display = "block"
   } 
   if(month.value == "december" && day.value == 7) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstS.style.display = "block"
   } 
   if(month.value == "december" && day.value == 9) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFo.style.display = "block"
   } 
   if(month.value == "december" && day.value == 10) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFi.style.display = "block"
   }






   if(month.value == "december" && day.value == 13) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 14) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltS.style.display = "block"
   }
   if(month.value == "december" && day.value == 16) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFo.style.display = "block"
   }
   if(month.value == "december" && day.value == 17) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFi.style.display = "block"
   }





   if(month.value == "december" && day.value == 20) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstF.style.display = "block"
   } 
   if(month.value == "december" && day.value == 21) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstS.style.display = "block"
   } 
   if(month.value == "december" && day.value == 23) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFo.style.display = "block"
   } 
   if(month.value == "december" && day.value == 24) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayUstFi.style.display = "block"
   }





   if(month.value == "december" && day.value == 27) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltF.style.display = "block"
   } 
   if(month.value == "novenber" && day.value == 28) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltS.style.display = "block"
   }
   if(month.value == "december" && day.value == 30) {
      mo.forEach(item => {
         item.style.display = "none"
         
      })
      monthDayAltFo.style.display = "block"
   }
})
