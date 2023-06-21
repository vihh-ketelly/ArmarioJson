function carregarArmarios() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var armarios = JSON.parse(xhr.responseText);
      atualizarQuantidadeArmarios(armarios.quantidade_armarios, armarios.estados_iniciais);
      adicionarEventosBotoes(armarios.quantidade_armarios);
    }
  };
  xhr.open("GET", "armarios.json", true);
  xhr.send();
}

function atualizarQuantidadeArmarios(quantidade, estadosIniciais) {
  var totalArmariosElemento = document.getElementById("total-armarios");
  totalArmariosElemento.textContent = quantidade.toString();

  var armariosContainer = document.querySelector(".ares-1");
  var armariosExistentes = armariosContainer.querySelectorAll("[id^='ar-']");
  var quantidadeExistentes = armariosExistentes.length;

  if (quantidadeExistentes > quantidade) {
    for (var i = quantidadeExistentes - 1; i >= quantidade; i--) {
      armariosContainer.removeChild(armariosExistentes[i]);
    }
  } else if (quantidadeExistentes < quantidade) {
    for (var i = quantidadeExistentes + 1; i <= quantidade; i++) {
      var novoArmario = document.createElement("div");
      novoArmario.className = "ar-" + i;
      novoArmario.id = "ar-" + i;

      var estadoAleatorio = Math.floor(Math.random() * 3);
      var estadoTexto;
      var estadoBotao;
      var estadoCor;
      var estadoImagem;

      if (estadosIniciais && estadosIniciais[i - 1]) {
        estadoTexto = estadosIniciais[i - 1].texto;
        estadoBotao = estadosIniciais[i - 1].botao;
        estadoCor = estadosIniciais[i - 1].cor;
        estadoImagem = estadosIniciais[i - 1].imagem;
      } else {
        if (estadoAleatorio === 0) {
          estadoTexto = "Livre";
          estadoBotao = "button-livre";
          estadoCor = "linear-gradient(317.48deg, green 20.49%, rgb(37, 37, 37) 102.33%)";
          estadoImagem = "Livre.png";
        } else if (estadoAleatorio === 1) {
          estadoTexto = "Manutenção";
          estadoBotao = "button-manutencao";
          estadoCor = "linear-gradient(317.48deg, yellow 20.49%, rgb(37, 37, 37) 102.33%)";
          estadoImagem = "20230416_004150_0000.png";
        } else {
          estadoTexto = "Ocupado";
          estadoBotao = "button-ocupado";
          estadoCor = "linear-gradient(317.48deg, red 20.49%, rgb(37, 37, 37) 102.33%)";
          estadoImagem = "Ocupado.png";
        }
      }

      novoArmario.innerHTML = `
        <div class="card">
          <div class="card-inner">
            <h1>Armário ${i}</h1><br>
            <button id="btn-ar-${i}-livre" class="status-btn ${estadoBotao}">Livre</button>
            <button id="btn-ar-${i}-manutencao" class="status-btn ${estadoBotao}">Manutenção</button>
            <button id="btn-ar-${i}-ocupado" class="status-btn ${estadoBotao}">Ocupado</button>
            <div class="card-front" style="background: ${estadoCor};">
              <img src="${estadoImagem}" alt="">
            </div>
          </div>
        </div>
      `;
      armariosContainer.appendChild(novoArmario);
    }
  }
}

function adicionarEventoBotao(id, novoStatus) {
  const btn = document.querySelector(`#btn-ar-${id}-${novoStatus}`);
  btn.addEventListener("click", function () {
    alterarStatusArmario(`ar-${id}`, novoStatus);
  });
}

function adicionarEventosBotoes(quantidade) {
  for (var i=1; i <= quantidade; i++) {
    adicionarEventoBotao(i, "livre");
    adicionarEventoBotao(i, "manutencao");
    adicionarEventoBotao(i, "ocupado");
  }
}

function alterarStatusArmario(idArmario, novoStatus) {
  const armario = document.querySelector(`#${idArmario}`);
  armario.dataset.status = novoStatus;

  const cardFront = armario.querySelector(".card-front");
  const img = armario.querySelector("img");

  if (novoStatus === "livre") {
    cardFront.style.background = "linear-gradient(317.48deg, green 20.49%, rgb(37, 37, 37) 102.33%)";
    img.src = "Livre.png";
  } else if (novoStatus === "manutencao") {
    cardFront.style.background = "linear-gradient(317.48deg, yellow 20.49%, rgb(37, 37, 37) 102.33%)";
    img.src = "20230416_004150_0000.png";
  } else if (novoStatus === "ocupado") {
    cardFront.style.background = "linear-gradient(317.48deg, red 20.49%, rgb(37, 37, 37) 102.33%)";
    img.src = "Ocupado.png";
  }
}

window.onload = function () {
  carregarArmarios();
};


fetch('armarios.json')
  .then(response => response.json())
  .then(data => {
    // Atualizar estados dos armários com base nos dados do JSON
    data.armarios.forEach(armario => {
      var cardFront = document.getElementById(armario.id).querySelector(".card-front");

      // Definir a cor e a imagem com base no estado
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
