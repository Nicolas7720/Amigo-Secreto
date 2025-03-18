let listaAmigos = [];
const adicionar = () => {
  const inputAmigo = document.querySelector("#nome-amigo").value;
  const inputTitle = inputAmigo.charAt(0).toUpperCase() + inputAmigo.slice(1);

  if (inputAmigo === "") {
    alert("O campo não pode estar vazio");
  } else {
    if (listaAmigos.includes(inputTitle)) {
      alert("O mesmo nome não pode ser adicionado");
      document.querySelector("#nome-amigo").value = "";
      return inputTitle;
    } else {
      listaAmigos.push(inputTitle);
      document.querySelector("#lista-amigos").textContent += `${inputTitle}, `;
    }
  }
  document.querySelector("#nome-amigo").value = "";
};
const sortear = () => {
  document.querySelector("#lista-sorteio").textContent = "";
  if (listaAmigos.length === 0 || listaAmigos.length === 1) {
    alert(
      "O campo 'Amigos incluídos' não pode estar vazia ou só com um participante"
    );
  } else {
    embaralha(listaAmigos);
    const listaSorteio = document.querySelector("#lista-sorteio");
    for (let i = 0; i < listaAmigos.length; i++) {
      if (i == listaAmigos.length - 1) {
        listaSorteio.innerHTML +=
          listaAmigos[i] + "-->" + listaAmigos[0] + "<br>";
      } else {
        listaSorteio.innerHTML +=
          listaAmigos[i] + "-->" + listaAmigos[i + 1] + "<br>";
      }
    }
  }
};

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

const reiniciar = () => {
  listaAmigos = [];
  document.querySelector("#nome-amigo").value = "";
  document.querySelector("#lista-amigos").innerHTML = "";
  document.querySelector("#lista-sorteio").innerHTML = "";
};
