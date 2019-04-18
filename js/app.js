window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}




// Vue.component('todo-item', {

//     props: ['todo'],
//     template: '<li>{{todo.text}}</li>'

// })

// var app = new Vue({
//   el: '#front-inf',
//   data: {
//     front: [
//       {id: 0, text: 'JavaScript'},
//       {id: 1, text: 'HTML-5'},
//       {id: 2, text: 'CSS 3'}
//     ]
//   }
// });


$(document).ready(function(){




$('.multiple-items').slick({
    centerMode: true,
    centerPadding: '30px',
    speed: 300,
    dots: true,
    arrows: true,
    // infinite: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});
});