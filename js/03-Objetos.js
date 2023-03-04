//Objetos

const mouse = {
  marca: 'logitech',
  color: 'negro',
  modelo: 'pro-hero',
  encendido: false,
  clickIzq: function () {
    console.log('click izquierdo');
  },
  power: function () {
    this.encendido = !this.encendido;
  },
};

mouse.power();

console.log(mouse);
