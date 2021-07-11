const menuButton = document.querySelector('.menu-button')
const menuIcon = document.querySelector('.menu-icon')
const closeNav = document.querySelector('.close-nav')
let checkNavStatus = true
menuButton.addEventListener('click',(e) => {
  const navMenu = document.querySelector('.nav-menu')
    const childMenu = document.querySelector('.menu')
  if (checkNavStatus) {
   
    navMenu.classList.add('nav-active')
    childMenu.style.display = "block"
    menuIcon.style.display = "none"
    closeNav.style.display = "block"
    checkNavStatus = false
  }else {
    navMenu.classList.remove('nav-active')
    childMenu.style.display = "none"
    menuIcon.style.display = "block"
    closeNav.style.display = "none"
    checkNavStatus = true
  }


})


const menuItems = document.querySelectorAll('.menu-items')

for (let i = 0; i < menuItems.length; i++) {
 
    menuItems[i].addEventListener('click',(e) => {
     
        if (menuItems[i].classList.contains('active')) {
            // menuItems[i].nextElementSibling.style.margin = "36px 0px !important"
            menuItems[i].classList.remove('active')
            menuItems[i].children[0].children[1].classList.remove('arrow-up')
            menuItems[i].children[0].children[1].classList.add('arrow-down')

            for (let d = 1; d < menuItems[i].children.length; d++) {
                menuItems[i].children[d].style.display = "none"
                
            }
        }else {
            
            menuItems[i].classList.add('active')
            for (let d = 1; d < menuItems[i].children.length; d++) {
                menuItems[i].children[d].style.display = "block"
                
            }
            menuItems[i].children[0].children[1].classList.add('arrow-up')
            menuItems[i].children[0].children[1].classList.remove('arrow-down')
        }
    })
    
}

const uploadImage = document.querySelector('#upload-image')
if (uploadImage) {
    
    uploadImage.addEventListener('click',(e) => {
        e.preventDefault()
        const inputOpen = document.querySelector('#inputOpen')
        inputOpen.click()
       
    })
}

const btnClose = document.querySelectorAll('.delete')

function close() {
   
    for (let i = 0; i < btnClose.length; i++) {
        btnClose[i].addEventListener('click',(e) => {
            e.currentTarget.parentElement.remove()
        })
        
    }
}
close()

const docs = document.querySelector('#docs')
if (docs) {
    
    Dropzone.options.myDropzone = {
        url: "/Account/Create",
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        // acceptedFiles: "image/*",
        previewTemplate : document.querySelector('#docs').innerHTML,
      // Specifing an event as an configuration option overwrites the default
      // `addedfile` event handler.
      addedfile: function(file) {
        file.previewElement = Dropzone.createElement(this.options.previewTemplate);
        // Now attach this new element some where in your page
      },
      thumbnail: function(file, dataUrl) {
        // Display the image in your file.previewElement
      },
      uploadprogress: function(file, progress, bytesSent) {
        // Display the progress
      },
      
    
        init: function () {
    
            var submitButton = document.querySelector("#submit-all");
            var wrapperThis = this;
    
            submitButton.addEventListener("click", function () {
                wrapperThis.processQueue();
            });
    
            this.on("addedfile", function (file) {
    
                // Create the remove button
                // var removeButton = Dropzone.createElement("<button class='btn btn-lg dark'>Remove File</button>");
    
                // // Listen to the click event
                // removeButton.addEventListener("click", function (e) {
                //     // Make sure the button click doesn't submit the form:
                //     e.preventDefault();
                //     e.stopPropagation();
    
                //     // Remove the file preview.
                //     wrapperThis.removeFile(file);
                //     // If you want to the delete the file on the server as well,
                //     // you can do the AJAX request here.
                // });
    
                // // Add the button to the file preview element.
                // file.previewElement.appendChild(removeButton);
                const docs = document.querySelector('#docs')
                let ditem = document.createElement('div')
                let dh5 = document.createElement('h5')
                let cButton = document.createElement('button');
                ditem.classList.add('document-item')
                ditem.classList.add('d-flex')
                ditem.classList.add('justify-content-between')
               
                dh5.classList.add('d-flex')
                dh5.classList.add('align-self-center')
                dh5.innerText = file.name
                
                cButton.classList.add('btn-close')
                cButton.onclick = function name(e) {
                    e.preventDefault()
                    e.currentTarget.parentElement.remove()
                }
                ditem.append(dh5)
                ditem.append(cButton)
                docs.append(ditem)
              
            });
    
           
            this.on('sendingmultiple', function (data, xhr, formData) {
                formData.append("Username", $("#Username").val());
            });
        }
    };
    
    var myDropzone = new Dropzone("div#secondzone", { 
    
        url: "/Account/Create",
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 100,
        maxFiles: 100,
        acceptedFiles: "image/*",
        previewTemplate : document.querySelector('#images').innerHTML,
        
      // Specifing an event as an configuration option overwrites the default
      // `addedfile` event handler.
      addedfile: function(file) {
        file.previewElement = Dropzone.createElement(this.options.previewTemplate);
        // Now attach this new element some where in your page
      },
      thumbnail: function(file, dataUrl) {
        // Display the image in your file.previewElement
      },
      uploadprogress: function(file, progress, bytesSent) {
        // Display the progress
      },
      
    
        init: function () {
    
            var submitButton = document.querySelector("#submit-all");
            var wrapperThis = this;
    
            submitButton.addEventListener("click", function () {
                wrapperThis.processQueue();
            });
    
            this.on("addedfile", function (file) {
    
                const docs = document.querySelector('#images')
                let ditem = document.createElement('div')
               
                let cButton = document.createElement('i');
                ditem.classList.add('col-md-4')
                ditem.classList.add('py-0')
                ditem.classList.add('img-holder')
               
                // img.setAttribute('src',file.dataUrl)
                var reader = new FileReader();
    
            reader.addEventListener("load", function () {
                var image = new Image();
               
                image.title = file.name;
                image.src = this.result;
                image.classList.add('img-fluid')
                ditem.appendChild( image );
            }, false);
           
    
            reader.readAsDataURL(file);
            
    
              
                cButton.classList.add('bi')
                cButton.classList.add('bi-x')
                cButton.classList.add('closeitem')
                cButton.classList.add('delete')
                cButton.onclick = function name(e) {
                    e.preventDefault()
                    e.currentTarget.parentElement.remove()
                }
                
                ditem.append(cButton)
                docs.append(ditem)
              
            });
    
           
            this.on('sendingmultiple', function (data, xhr, formData) {
                formData.append("Username", $("#Username").val());
            });
        }
    
    
    });
}


const mainImg = document.querySelector('.main-img > img')
if (mainImg) {
    
    let mainSrc = mainImg.src;
    const leftArrow = document.querySelector('#leftarr')
    const rigthArrow = document.querySelector('#rightarr')
    const otherImages = document.querySelectorAll('.oimage')
    const srcImages = [];
    srcImages.push(mainSrc)
    
    for (let i = 0; i < otherImages.length; i++) {
        
        srcImages.push(otherImages[i].src)
    }
    let index = 0;
    
    rigthArrow.addEventListener('click',() => {
        if (index < srcImages.length - 1) {
            index++
        mainImg.src = srcImages[index] 
            
        }else {
            index =0
            mainImg.src = srcImages[index] 
    
        }
    })
    
    
    leftArrow.addEventListener('click',() => {
      console.log(index);
       if (index <= 0) {
        index = srcImages.length - 1
        mainImg.src = srcImages[index] 
           
       }else {
        
        index--
        mainImg.src = srcImages[index] 
    
       }
      
    })
}

const dropdownItem = document.querySelectorAll('.dropdown-item')
if (dropdownItem) {
    const selectsearch = document.querySelector('#selectsearch')
    for (let i = 0; i < dropdownItem.length; i++) {
        dropdownItem[i].addEventListener('click',(e) => {
            
            const selectText = selectsearch.innerText
            const dropText = dropdownItem[i].innerText
            dropdownItem[i].innerText = selectText
            selectsearch.innerText = dropText
        })
        
    }
}
const swipperPuppy = document.querySelector('.swiper-puppy')
if (swipperPuppy) {
    const swiperP = new Swiper('.swiper-puppy', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:4,
       
      
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

const swiperMainExist = document.querySelector('.swiper-main')
if (swiperMainExist) {
  
  const swipermain = new Swiper('.swiper-main', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView:3,
      watchSlidesProgress:true,
  
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination-3',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },
      // Navigation arrows
      navigation: {
        nextEl: '.rs-3',
        prevEl: '.ls-3',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      
    });
    let numberOfSlide = swipermain.slides.length
    if (numberOfSlide > 0) {
      const activeProgress = document.querySelector('.active-progress')
      let progress = (100 * 3) / numberOfSlide 
      console.log(progress);
      activeProgress.style.width = `${progress}%`
      swipermain.on('activeIndexChange',(e) => {
        const swiperSlide = document.querySelectorAll('.swiper-slide')
        console.log(e.activeIndex);
        let progress = (100 * (3 + e.activeIndex)) / numberOfSlide 
      
        activeProgress.style.width = `${progress}%`
       
    
      
      })
    }
}

  const mobileSlider = document.querySelector('.mobile-slider')
  
  if (mobileSlider) {
    const swiperMobile = new Swiper('.mobile-swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView:1,
      watchSlidesProgress:true,
  
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination-3',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      },
      // Navigation arrows
      navigation: {
        nextEl: '.rs-3',
        prevEl: '.ls-3',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      
    });
  }

 

  const rs = document.querySelectorAll('.rs')

 if (rs.length > 0) {
   let index = 0;
  const ls = document.querySelectorAll('.ls')

  for (let d = 0; d < rs.length; d++) {
    rs[d].addEventListener('click',(e) => {
  
      let slides = e.currentTarget.parentElement.querySelectorAll('.swiper-slide');
 
      const pagination = e.currentTarget.parentElement.parentElement.querySelector('.pagination')
      pagination.innerHTML = ''
    
      index++
      if (index >= slides.length ) {
        index = 0;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        
      }
      for (let f = 0; f < slides.length; f++) {
        const pElement = document.createElement('div')
        pElement.classList.add('p-circle')
       
        if (index == f) {
          pElement.classList.add('p-active')
        }
        pagination.append(pElement)
      }
      slides[index].style.display = 'block'
    })

    ls[d].addEventListener('click',(e) => {
      let slides = e.currentTarget.parentElement.querySelectorAll('.swiper-slide');
      const pagination = e.currentTarget.parentElement.parentElement.querySelector('.pagination')
      pagination.innerHTML = ''
      index--
      if (index < 0) {
        index = slides.length - 1
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        
      }
      for (let f = 0; f < slides.length; f++) {
        const pElement = document.createElement('div')
        pElement.classList.add('p-circle')
       
        if (index == f) {
          pElement.classList.add('p-active')
        }
        pagination.append(pElement)
      }
      slides[index].style.display = 'block'
    })
    
  }



  let index2 = 0;
  const rs2 = document.querySelectorAll('.rs-2')

  const ls2 = document.querySelectorAll('.ls-2')

  for (let d = 0; d < rs.length; d++) {
    rs2[d].addEventListener('click',(e) => {
     
      let slides = e.currentTarget.parentElement.querySelectorAll('.swiper-slide');
      const pagination = e.currentTarget.parentElement.parentElement.querySelector('.pagination')
      pagination.innerHTML = ''
      index2++
      if (index2 >= slides.length) {
        index2 = 0;
      }
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        
      }
      for (let f = 0; f < slides.length; f++) {
        const pElement = document.createElement('div')
        pElement.classList.add('p-circle')
       
        if (index2 == f) {
          pElement.classList.add('p-active')
        }
        pagination.append(pElement)
      }
      slides[index2].style.display = 'block'
    })

    ls2[d].addEventListener('click',(e) => {
      let slides = e.currentTarget.parentElement.querySelectorAll('.swiper-slide');
      const pagination = e.currentTarget.parentElement.parentElement.querySelector('.pagination')
      pagination.innerHTML = ''
      index2--
      if (index2 < 0) {
        index2 = slides.length - 1
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        
      }
      for (let f = 0; f < slides.length; f++) {
        const pElement = document.createElement('div')
        pElement.classList.add('p-circle')
       
        if (index2 == f) {
          pElement.classList.add('p-active')
        }
        pagination.append(pElement)
      }
      
      slides[index2].style.display = 'block'
    })
    
  }


 }




  const ponly = document.querySelectorAll('.p-only')

  if (ponly) {

      
      for (let i = 0; i < ponly.length; i++) {
          ponly[i].addEventListener('click',(e) => {
              let getp = e.currentTarget.children[0].children[0]
              let getv = e.currentTarget.nextElementSibling.children[0].children[0]
              let photos = e.currentTarget.parentElement.parentElement.children[0]
              let videos = e.currentTarget.parentElement.parentElement.children[1]
            
                getv.classList.remove('check-active')
                getp.classList.add('check-active')
                photos.style.display = 'block'
                videos.style.display = 'none'
              
             
                
              
          })
          
      }
      const vonly = document.querySelectorAll('.v-only')   

      for (let i = 0; i < vonly.length; i++) {
        vonly[i].addEventListener('click',(e) => {
            let getp = e.currentTarget.children[0].children[0]
            let getv = e.currentTarget.previousElementSibling.children[0].children[0]
            let photos = e.currentTarget.parentElement.parentElement.children[0]
            let videos = e.currentTarget.parentElement.parentElement.children[1]
        
           
              getv.classList.remove('check-active')
              getp.classList.add('check-active')
              photos.style.display = 'none'
              videos.style.display = 'block'
              
             
                
              
        })
   
    
    }
  }

  const slidItem = document.querySelectorAll('.slid-item')

  if (slidItem.length > 0) {
    
      let start = 0;
      
      let loopLength = slidItem.length > 3 ? 4 : slidItem.length
      showSlide(loopLength,start)
      const rs4 = document.querySelector('.rs-4')
      rs4.addEventListener('click',(e) => {
        loopLength++,start++  
        if (loopLength >= slidItem.length) {
            loopLength = slidItem.length >= 4 ? 4 : slidItem.length
            start = 0
        }
        showSlide(loopLength,start)
      })

      const ls4 = document.querySelector('.ls-4')
      ls4.addEventListener('click',(e) => {
        if (start < 1) {
            loopLength = slidItem.length
        }
        
        start = loopLength - 5
        loopLength--  
        console.log(start,loopLength);
        showSlide(loopLength,start)
      })
  }

  function showSlide(number = 0,start = 0) {
    for (let d = 0; d < slidItem.length; d++) {
        slidItem[d].style.display = "none"
        
    }

    for (let i = start; i < number; i++) {
        slidItem[i].style.display = "block"
      }
  }