document.addEventListener('DOMContentLoaded', function () {
  var bookingForm = document.getElementById('myForm')
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault()

      var name = document.getElementById('name').value
      var email = document.getElementById('email').value
      var check_in = document.getElementById('check_in').value
      var check_out = document.getElementById('check_out').value
      var adults = document.getElementById('adults').value
      var children = document.getElementById('children').value
      var rooms = document.getElementById('rooms').value
      var type_room = document.getElementById('type_room').value

      var formData = {
        name: name,
        email: email,
        check_in: check_in,
        check_out: check_out,
        adults: adults,
        children: children,
        rooms: rooms,
        type_room: type_room,
      }

      var apiUrl = ('https://be-2-jakarta-12-production.up.railway.app')
      var apiRoutes = {
        roomList: `${apiUrl}/booking`,
        booking: `${apiUrl}/booking/addbooking`
      }

      fetch(apiRoutes.booking, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        localStorage.setItem('bookingDetails', JSON.stringify(data))

        window.location.href = 'detail-booking.html'
      })
      .catch(error => {
        console.error('there was a problem with the fetch operation:', error)
      })
    })
  } else {
    console.error('Booking form not found')
  }
})