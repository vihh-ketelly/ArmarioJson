function alterarStatusArmario(idArmario, novoStatus) {
    const armario = document.querySelector(`#${idArmario}`);
    armario.dataset.status = novoStatus;
  
    const cardFront = armario.querySelector('.card-front');
    const img = armario.querySelector('img');
  
    if (novoStatus === 'livre') {
      cardFront.style.background = 'linear-gradient(317.48deg, green 20.49%, rgb(37, 37, 37) 102.33%)';
      img.src = 'Livre.png';
    } else if (novoStatus === 'manutencao') {
      cardFront.style.background = 'linear-gradient(317.48deg, yellow 20.49%, rgb(37, 37, 37) 102.33%)';
      img.src = '20230416_004150_0000.png';
    } else if (novoStatus === 'ocupado') {
      cardFront.style.background = 'linear-gradient(317.48deg, red 20.49%, rgb(37, 37, 37) 102.33%)';
      img.src = 'Ocupado.png';
    }
  }
  
  function adicionarEventoBotao(id, novoStatus) {
    const btn = document.querySelector(`#btn-${id}-${novoStatus}`);
    btn.addEventListener('click', () => {
      alterarStatusArmario(id, novoStatus);
    });
  }
  
  
  adicionarEventoBotao('ar-1', 'livre');
  adicionarEventoBotao('ar-1', 'manutencao');
  adicionarEventoBotao('ar-1', 'ocupado');
  
  adicionarEventoBotao('ar-2', 'livre');
  adicionarEventoBotao('ar-2', 'manutencao');
  adicionarEventoBotao('ar-2', 'ocupado');
 
  adicionarEventoBotao('ar-3', 'livre');
  adicionarEventoBotao('ar-3', 'manutencao');
  adicionarEventoBotao('ar-3', 'ocupado');

  adicionarEventoBotao('ar-4', 'livre');
  adicionarEventoBotao('ar-4', 'manutencao');
  adicionarEventoBotao('ar-4', 'ocupado');

  adicionarEventoBotao('ar-5', 'livre');
  adicionarEventoBotao('ar-5', 'manutencao');
  adicionarEventoBotao('ar-5', 'ocupado');
  

  adicionarEventoBotao('ar-6', 'livre');
  adicionarEventoBotao('ar-6', 'manutencao');
  adicionarEventoBotao('ar-6', 'ocupado');

  adicionarEventoBotao('ar-7', 'livre');
  adicionarEventoBotao('ar-7', 'manutencao');
  adicionarEventoBotao('ar-7', 'ocupado');

  adicionarEventoBotao('ar-8', 'livre');
  adicionarEventoBotao('ar-8', 'manutencao');
  adicionarEventoBotao('ar-8', 'ocupado');

  adicionarEventoBotao('ar-9', 'livre');
  adicionarEventoBotao('ar-9', 'manutencao');
  adicionarEventoBotao('ar-9', 'ocupado');

  adicionarEventoBotao('ar-10', 'livre');
  adicionarEventoBotao('ar-10', 'manutencao');
  adicionarEventoBotao('ar-10', 'ocupado');

  adicionarEventoBotao('ar-11', 'livre');
  adicionarEventoBotao('ar-11', 'manutencao');
  adicionarEventoBotao('ar-11', 'ocupado');

  adicionarEventoBotao('ar-12', 'livre');
  adicionarEventoBotao('ar-12', 'manutencao');
  adicionarEventoBotao('ar-12', 'ocupado');

  adicionarEventoBotao('ar-13', 'livre');
  adicionarEventoBotao('ar-13', 'manutencao');
  adicionarEventoBotao('ar-13', 'ocupado');

  adicionarEventoBotao('ar-14', 'livre');
  adicionarEventoBotao('ar-14', 'manutencao');
  adicionarEventoBotao('ar-14', 'ocupado');

  adicionarEventoBotao('ar-15', 'livre');
  adicionarEventoBotao('ar-15', 'manutencao');
  adicionarEventoBotao('ar-15', 'ocupado');

  
  // Lendo o arquivo JSON
fetch('armarios.json')
.then(response => response.json())
.then(data => {
  // Atualiza as cores e imagens dos armários com base nos dados do JSON
  for (var i = 0; i < data.length; i++) {
    var cardFront = document.querySelectorAll(".card-front")[i];
    var cor = data[i].cor;
    var imagem = data[i].imagem;
    cardFront.style.background = "linear-gradient(317.48deg, " + cor + " 20.49%, rgb(37, 37, 37) 102.33%)";
    cardFront.querySelector("img").src = imagem;
  }
});
