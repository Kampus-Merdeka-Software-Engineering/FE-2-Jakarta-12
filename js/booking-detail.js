document.addEventListener('DOMContentLoaded', function() {
    // mengambil data pemesanan dari localstorage
    var bookingDetailsData = localStorage.getItem('bookingDetails')
    if (bookingDetailsData) {
        // parse data booking dari localstorage
        var bookingDetails = JSON.parse(bookingDetailsData)
        // menampilkan data booking pada halaman HTML
        var bookingDetailsContainer = document.getElementById('bookingDetails')
        if (bookingDetailsContainer) {

            function formatDateTime(dateTimeString) {
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                    timeZone: 'Asia/Jakarta'
                }
                return new Date(dateTimeString).toLocaleDateString('en-US', options)
            }

            var bookingDetailsHTML = `
            <div>
                <h1>Booking Details</h1>
            </div> 
            <table>
                <tr>
                    <td style="font-weight: bold; padding-top: 20px;">Guest Information</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>: ${bookingDetails.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>: ${bookingDetails.email}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding-top: 20px;">Reservation Details</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Adults</td>
                    <td>: ${bookingDetails.adults} Adults</td>
                </tr>
                <tr>
                    <td>Children</td>
                    <td>: ${bookingDetails.children} Children</td>
                </tr>
                <tr>
                    <td>Rooms</td>
                    <td>: ${bookingDetails.rooms} Rooms</td>
                </tr>
                <tr>
                    <td>Room Type</td>
                    <td>: ${bookingDetails.type_room}</td>
                </tr>
                <tr>
                    <td>Check-in</td>
                    <td>: ${formatDateTime(bookingDetails.check_in)}</td>
                </tr>
                <tr>
                    <td>Check-out</td>
                    <td>: ${formatDateTime(bookingDetails.check_out)}</td>
                </tr>
            </table>
            <a href="index.html" class="btn"><strong>Back to Main Page</strong></a>
            `

        // menampilkan detail booking di dalam container
        bookingDetailsContainer.innerHTML = bookingDetailsHTML
        } else {
            console.error('booking details container not found')
        }
    } else {
        console.error('booking details data not found in localstorage')
    }
})