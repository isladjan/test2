<script>
   window.addEventListener('message', msgHandler, false);
   function msgHandler(e) {
	  document.getElementsByTagName('h1')[0].innerHTML = e.data;
   }
</script>
//ovo je prva izmena ovde
  
//ovo je izmena koja postoji samo u d2 branch