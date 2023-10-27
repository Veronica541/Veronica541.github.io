let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: orange;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: blue;">Soy egresada de la ingeniera en Tecnologias de la información .</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
