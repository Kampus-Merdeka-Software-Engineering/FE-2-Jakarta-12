document.addEventListener('DOMContentLoaded', function() {
  var bookingForm = document.getElementById('myForm');
  var bookingDetailsContainer = document.getElementById('bookingDetails');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      var name = document.getElementById('name').value;
      var eamil = document.getElementById('email').value;
      var check_in = document.getElementById('check_in').value;
      var check_out = document.getElementById('check_out').value;
      var adults = document.getElementById('adults').value;
      var childern = document.getElementById('childern').value;
      var rooms = document.getElementById('rooms').value;
      var type_room = document.getElementById('type_room').value;


      // Prepare data for API request
      var formData = {
        name: name,
        email: eamil,
        check_in: check_in,
        check_out: check_out,
        adults: adults,
        childern: childern,
        rooms: rooms,
        type_room: type_room
      };

      // URL api backend
      var apiUrl = 'https://be-2-jakarta-12-production.up.railway.app';
      var apiRoutes = {
        roomList: `${apiUrl}/booking`,
        booking: `${apiUrl}/booking/addbooking`}
      // Fetch data from the API
      fetch(apiRoutes.booking, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process the API response 
        var bookingDetails = `
          <h2>Booking Details</h2>
          <p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Adults: ${data.adults}</p>
          <p>Children: ${data.childern}</p>
          <p>Room: ${data.rooms}</p>
          <p>Type Room: ${data.type_room}</p>
          <p>Check In: ${data.check_in}</p>
          <p>Check Out: ${data.check_out}</p>
        `;

        // Display the booking details in the container
        bookingDetailsContainer.innerHTML = bookingDetails;

        // window.location.href = 'detail.html';
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    });
  } else {
    console.error('Booking form not found');
  }
});