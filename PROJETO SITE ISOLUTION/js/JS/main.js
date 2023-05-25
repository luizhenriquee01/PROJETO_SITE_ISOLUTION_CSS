$(document).ready(function () {
  $('#carousel-imagem').slick({
    autoplay: true,
  });
  $('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
  });
  $('#telefone').mask('(00) 00000-0000');

  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
$('.lista-veiculos button').click(function () {
  const destino = $('#contato');

  const nomeVeiculo = $(this).parent().find('h3').text();

  $('#veiculo-interesse').val(nomeVeiculo);

  $('html').animate(
    {
      scrollTop: destino.offset().top,
    },
    1000
  );
});

// JavaScript
const indicators = document.querySelectorAll('.indicator');
const slides = document.querySelectorAll('.carousel .slide');

// Adicione um ouvinte de evento para cada indicador
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Remova a classe "active" de todos os indicadores
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });

    // Adicione a classe "active" ao indicador clicado
    indicator.classList.add('active');

    // Navegue para o slide correspondente ao indicador clicado
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  });
});
