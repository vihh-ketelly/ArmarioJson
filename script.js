
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


function carregarJSON() {
  fetch('armarios.json')
    .then(response => response.json())
    .then(data => {
      
      data.forEach((armario) => {
        const { id, status } = armario;
        status.forEach((status) => {
          adicionarEventoBotao(id, status);
        });
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}


carregarJSON();
