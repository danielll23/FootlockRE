function initMap() {
    var location = {lat: 40.712776, lng: -74.005974}; // Replace with your desired latitude and longitude

    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>

const page = window.location.pathname;
      const navbarlink = document.querySelectorAll('nav a').forEach(link =>{
        if(link.href.includes(`${page}`)){
          link.classList.add('active');
        }
      });
