document.addEventListener('DOMContentLoaded', function(){
  const playBtn = document.getElementById('playBtn');
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('closeModal');
  const frame = document.getElementById('videoFrame');

  // Reemplaza VIDEO_ID por el id real de YouTube o por la URL del video
  const videoURL = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0";

  playBtn.addEventListener('click', function(){
    frame.src = videoURL;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){
    if(e.target === modal) closeModal();
  });

  function closeModal(){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
    frame.src = "";
  }

  // El botón de WhatsApp ya usa enlace directo. Este handler queda para trazas o cambios futuros.
  const whatsappBtn = document.getElementById('whatsappBtn');
  if(whatsappBtn){
    whatsappBtn.addEventListener('click', function(){
      // comportamiento adicional opcional
    });
  }
});