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

//////////////////////////////////////////////////////////////////////////////////


//JSON
fetch('armarios.json')
  .then(response => response.json())
  .then(data => {
    //cores e imagens dos armários com base nos dados do JSON
    data.forEach(armario => {
      var cardFront = document.getElementById(armario.id).querySelector(".card-front");

      //a cor e a imagem com base no estado
      var cor, imagem;

      if (armario.estado === "ocupado") {
        cor = "red";
        imagem = "Ocupado.png";
      } else if (armario.estado === "manutencao") {
        cor = "yellow";
        imagem = "20230416_004150_0000.png";
      } else {
        cor = "green";
        imagem = "Livre.png";
      }
      cardFront.style.background = "linear-gradient(317.48deg, " + cor + " 20.49%, rgb(37, 37, 37) 102.33%)";
      cardFront.querySelector("img").src = imagem;

      if (armario.estado === "ocupado") {
        // Fazer algo para o estado ocupado
      } else if (armario.estado === "manutencao") {
        // Fazer algo para o estado em manutenção
      } else {
        // Fazer algo para o estado livre
      }
    });
  });

