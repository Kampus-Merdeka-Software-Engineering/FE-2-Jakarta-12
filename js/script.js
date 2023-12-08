// script.js
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-menu li a');

  hamburger.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navItems.forEach(navItem => {
        navItem.classList.remove('active-nav');
      });
      this.classList.add('active-nav');
    });
  });

  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
});

// fath api beckend
const baseUrl = "https://be-2-jakarta-12-production.up.railway.app"
const apiRoutes = {
    roomList: `${baseUrl}/room`,
    booking: `${baseUrl}/booking`
} 
const loadRoomList = () => {
    fetch(apiRoutes.roomList)
    .then((res) => res.json())
    .then((res) => {
        const {data} = res
        data.forEach(({description, price, room_image, type_room}) => {
            document.getElementById("room-list").innerHTML += `
            <div class="box flex">
            <div class="left image-container">
              <img src="${room_image}" alt="" />
            </div>
            <div class="right">
              <h4>${type_room}</h4>
              <div class="rate flex">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>
                ${description}
              </p>
              <h5>From Rp. ${price.toLocaleString()}/night</h5>
              <a href="booking.html">
                <button id="bookingButton" class="flexbtn">
                  <span>Booking Now</span>
                  <i class="fas fa-arrow-circle-right"></i>
                </button>
              </a>
            </div>
          </div>
          `
        });
        console.log({res})
    })
}
loadRoomList()