const menu = document.querySelector('#menu-items')
const openMenu = document.querySelectorAll('.menu-open')

const closeMenu = document.querySelector('.menu-close > .btn-close')
for (let i = 0; i < openMenu.length; i++) {
    openMenu[i].addEventListener('click',(e) => {
  
    
        menu.classList.add('active-menu')
        checkMenu =true
       
        
    })
    
}

closeMenu.addEventListener('click',(e) => {
    
    menu.classList.remove('active-menu')
})

const getWidth = window.innerWidth
const getFootImage = document.querySelector('.foot-image-last')

if (getWidth < 610 && getFootImage) {
   const letitsecond = document.querySelector('.letitsecond')
   getFootImage.classList.add('order-first')
   if (letitsecond != null) {
    letitsecond.classList.remove('order-first')
       
   }
    const indexPage = document.querySelector('.i-left')
    
    if (indexPage != null) {
        
        indexPage.classList.add('order-first')
        
    }
}

const right = document.querySelector('.right')
if (right && getWidth > 610) {
    const circled = document.querySelectorAll('.circled')
    
    for (let d = 0; d < circled.length; d++) {
        circled[d].addEventListener('click',(e) => {
            
            const getDiv = e.currentTarget.querySelector('div')
            const checkActive = document.querySelector('.check-active')
           
            if (!e.currentTarget.children[0].classList.contains('check-active')) {
                getDiv.classList.add('check-active')
                checkActive.classList.remove('check-active')
                const videos = document.querySelector('.videos')
                const photos = document.querySelector('.photos')
                if (e.currentTarget.parentElement.classList.contains('r-video')) {
                    videos.classList.add('slide-active')
                    photos.classList.remove('slide-active')
                }else {
                    videos.classList.remove('slide-active')
                    photos.classList.add('slide-active')
                }
            }else {
                console.log('xcc');
            }
        })
        
    }
    let srcImages = []
    let index = 0

    let mainImg = document.querySelector('.photos > .main-img > img')

    let otherImages = document.querySelectorAll('.photos > .other-images > div > img')
            
    srcImages.push(mainImg.src)
    for (let f = 0; f < otherImages.length; f++) {
        srcImages.push(otherImages[f].src)
        
    }
    const left = document.querySelector('.left')
   
        right.addEventListener('click',(e) => {
           
           
            if (index < srcImages.length - 1) {
                index++
            mainImg.src = srcImages[index] 
            
            }else {
                index =0
                mainImg.src = srcImages[index] 
                
            }
            
        })
        
        left.addEventListener('click',() => {
        
             if (index <= 0) {
              index = srcImages.length - 1
              mainImg.src = srcImages[index] 
                 
             }else {
              
              index--
              mainImg.src = srcImages[index] 
          
             }
            
          })

        


    let srcImages2 = []
    let index2 = 0

    let mainImg2 = document.querySelector('.videos > .main-img > img')

    let otherImages2 = document.querySelectorAll('.videos > .other-images > div > img')
   
            
    srcImages2.push(mainImg2.src)
    for (let f = 0; f < otherImages2.length; f++) {
        srcImages2.push(otherImages2[f].src)
        
    }
    const left2 = document.querySelector('.l-v')
   const right2 = document.querySelector('.r-v')
        right2.addEventListener('click',(e) => {
         
           
            if (index2 < srcImages2.length - 1) {
                index2++
                 mainImg2.src = srcImages2[index2] 
                 
            
            }else {
                index2 =0
                mainImg2.src = srcImages2[index2] 
                
            }
            
        })
        
        left2.addEventListener('click',() => {
       
             if (index2 <= 0) {
              index2 = srcImages2.length - 1
              mainImg2.src = srcImages2[index2] 
                 
             }else {
              
              index2--
              mainImg2.src = srcImages2[index2] 
          
             }
            
          })

    
}

if (right && getWidth < 610) {
    const circled = document.querySelectorAll('.circled')
    
    for (let d = 0; d < circled.length; d++) {
        circled[d].addEventListener('click',(e) => {
            const getDiv = e.currentTarget.querySelector('div')
            const checkActive = document.querySelector('.check-active')
            const photos = document.querySelector('.photo-mobile')
            const videos = document.querySelector('.video-mobile')

            getDiv.classList.add('check-active')
            checkActive.classList.remove('check-active')
            if (e.currentTarget.parentElement.children[1].textContent == 'Videos') {
                videos.style.display = "block"
                photos.style.display = "none"
               
                
            }else {
                photos.style.display = "block"
                videos.style.display = "none"

            }
        })
        
    }
}


const swipperPuppy = document.querySelector('.swiper-photo')
if (swipperPuppy) {
    const swiperP = new Swiper('.swiper-photo', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:1,
        

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-4',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.rs-4',
          prevEl: '.ls-4',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      const swiperV = new Swiper('.swiper-video', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:1,
       

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-4',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.rs-4',
          prevEl: '.ls-4',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}



ScrollReveal().reveal('.home-title', {
    delay: 575,
    duration: 500,
    distance: '100px',
    reset: true,
    origin: 'left'
    });

    ScrollReveal().reveal('.i-left', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });

  

    ScrollReveal().reveal('.i-1', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });


    ScrollReveal().reveal('.single-item', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });


    ScrollReveal().reveal('.head-area', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });
    ScrollReveal().reveal('.left-side', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });

    ScrollReveal().reveal('.right-side', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });

    ScrollReveal().reveal('.img-area', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });

    ScrollReveal().reveal('.foot-image-last', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });

    ScrollReveal().reveal('.f-1', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });

    ScrollReveal().reveal('.f-2', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });
    

    ScrollReveal().reveal('.email-side', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });

    ScrollReveal().reveal('.i-3', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });
    ScrollReveal().reveal('.main-title', {
        delay: 575,
        duration: 1250,
        distance: '100px',
        reset: true,
        origin: 'left'
        });
    ScrollReveal().reveal('.about', {
        delay: 575,
        duration: 1250,
        distance: '10px',
        reset: true,
        origin: 'top'
        });
    ScrollReveal().reveal('.title', {
        delay: 575,
        duration: 1050,
        distance: '10px',
        reset: true,
        origin: 'right'
        });

    ScrollReveal().reveal('.des', {
        delay: 575,
        duration: 1050,
        distance: '10px',
        reset: true,
        origin: 'left'
        });
    ScrollReveal().reveal('.item-1', {
        delay: 575,
        duration: 1250,
        distance: '100px',
        reset: true,
        origin: 'left'
        });
    ScrollReveal().reveal('.my-tit', {
        delay: 575,
        duration: 1250,
        distance: '100px',
        reset: true,
        origin: 'left'
        });

    ScrollReveal().reveal('.center-side', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });


    ScrollReveal().reveal('.image', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });




    ScrollReveal().reveal('.my-des', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });

    ScrollReveal().reveal('.docs', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });       

    ScrollReveal().reveal('.my-des', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'left'
    });
    ScrollReveal().reveal('.slider', {
    delay: 575,
    duration: 1250,
    distance: '100px',
    reset: true,
    origin: 'right'
    });    

    ScrollReveal().reveal('.text-bottom', {
        delay: 575,
        duration: 1250,
        distance: '125px',
        reset: true,
        origin: 'right'
        });    
    ScrollReveal().reveal('.c9', {
        delay: 775,
        duration: 1550,
        distance: '125px',
        reset: true,
        origin: 'left'
        });  
        
        ScrollReveal().reveal('.join', {
        delay: 775,
        duration: 1550,
        distance: '125px',
        reset: true,
        origin: 'right'
        });         

        ScrollReveal().reveal('.form-holder', {
        delay: 775,
        duration: 1550,
        distance: '125px',
        reset: true,
        origin: 'left'
        });         
        ScrollReveal().reveal('.check', {
            delay: 775,
            duration: 1550,
            distance: '125px',
            reset: true,
            origin: 'right'
            });              