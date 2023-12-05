const baseUrl = "http://localhost:4000"
const apiRoutes = {
    roomList: `${baseUrl}/room/list`,
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
                ${description}.
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