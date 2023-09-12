function generarConstancia() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');


  // Dibuja el fondo de la constancia (Suponemos que ya tienes una imagen)
  const img = new Image();
  img.src = 'imagenprueba.png';
  img.onload = function() {
        ctx.drawImage(img, 0, 0, 1000, 707);


        // Añade el nombre
        const nombre = document.getElementById('nombre').value;
        ctx.font = '40px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(nombre, 400, 400);
  };
}


function descargarConstancia() {
  const canvas = document.getElementById('canvas');
  const link = document.createElement('a');
  link.download = 'constancia.png';
  link.href = canvas.toDataURL();
  link.click();
}