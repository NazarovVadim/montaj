//SWIPER HOMEPAGE
let mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 2000,
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 100
        }
    },
    autoplay:{
        delay: 3000
    },
    fadeEffect: {
        crossFade: true
    },
});

const swiperWrapper = document.querySelector('.swiper-wrapper');

const reviewsData = [
    {
        assessment: 'Отрицательный',
        imagePath: './images/person_3.jpg',
        personName: 'Круассан Игорь Дмитриевич',
        countReviews: 6,
        textReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo. Deserunt, nemo ipsam esse rerum hic quasi, enim, nihil qui reprehenderit temporibus animi laborum sint?',
        dateReview: '19 июня 2020 года'
        
    },
    {
        assessment: 'Положительный',
        imagePath: './images/person_2.jpg',
        personName: 'Круассан Игорь Дмитриевич',
        countReviews: 6,
        textReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo. Deserunt',
        dateReview: '20 июня 2020 года'
    },
    {
        assessment: 'Положительный',
        imagePath: './images/person_2.jpg',
        personName: 'Круассан Игорь Дмитриевич',
        countReviews: 6,
        textReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo. Deserunt',
        dateReview: '20 июня 2020 года'
    },
    {
        assessment: 'Положительный',
        imagePath: './images/person_2.jpg',
        personName: 'Круассан Игорь Дмитриевич',
        countReviews: 6,
        textReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo. Deserunt',
        dateReview: '20 июня 2020 года'
    },
    {
        assessment: 'Отрицательный',
        imagePath: './images/person_4.jpg',
        personName: 'Круассан Игорь Дмитриевич',
        countReviews: 6,
        textReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo. Deserunt',
        dateReview: '20 июня 2020 года'
    },
    {
        assessment: 'Положительный',
        imagePath: './images/person_3.jpg',
        personName: 'Lorem ipsum dolor',
        countReviews: 6,
        textReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo. Deserunt',
        dateReview: '20 июня 2020 года'
    }
];

const render = function(){
    reviewsData.forEach(function(item){
        const card = document.createElement('div');
        card.classList.add('swiper-slide');
        card.innerHTML = `
            <div class="review__card">
                <div class="review__card__header">
                    ${item.assessment} отзыв
                </div>
                <div class="review__card__profile">
                    <div class="review__card__profile-img">
                        <img src="${item.imagePath}" alt="" class="review__photo__profile">
                    </div>
                    <div class="review__card__profile-name">
                        <h3 class="review__name__profile">${item.personName}</h3>
                        <h3 class="count__of__reviews__profile">${item.countReviews} отзывов</h3>
                    </div>
                </div>
                <div class="review__card__body">
                    <div class="review__card__text">
                        ${item.textReview}
                    </div>
                    <div class="review__card__date">
                        ${item.dateReview}
                    </div>
                </div>
            </div>
        `;
        swiperWrapper.insertAdjacentElement('afterbegin', card);        
    });

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(item => {
        if(item.querySelector('.review__card__header').textContent.trim() == 'Положительный отзыв'){
            item.querySelector('.review__card__header').style = 'background: #00CA77';
        } else if(item.querySelector('.review__card__header').textContent.trim() == 'Отрицательный отзыв'){
            item.querySelector('.review__card__header').style = 'background: #FF4000';
        } else{
            item.querySelector('.review__card__header').style = 'background: #BFBFBF';
        }
    });
};
// render();

//Прокрутка с хедером
const header = document.querySelector('.header');

$(window).scroll(function(){
	if ($(window).scrollTop() > 70){
		header.style = " box-shadow: 0 10px 35px rgba(0,0,0,.15); background-color: #5555FF; opacity: .99; padding: 1% 0;";
	}
	else{
		header.style = "";
	}
});