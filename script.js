// Pega o botão pelo id "btnTema" que está no HTML
const botao = document.getElementById('btnTema');

// Quando o botão for clicado, executa essa função
botao.addEventListener('click', function() {

  // Adiciona ou remove a classe "escuro" do body
  // classList.toggle = "se não tem, coloca; se já tem, tira"
  document.body.classList.toggle('Killer');

  // Muda o texto do botão dependendo do tema atual
  if (document.body.classList.contains('Killer')) {
    botao.textContent = '☀️ Modo claro';
  } else {
    botao.textContent = '🔪 Modo Killer';
  }

});

// Seleciona o botão e as imagens
const botao = document.getElementById('btnTroca');
const imagens = document.querySelectorAll('article img');

// Define as novas URLs que você deseja mostrar ao clicar
const novasImagens = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNb0w3gxxVGMNLuXaMY3qz6izYXTwvvwgdvZNECPymg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuS_LvtC4Wm7OYpCIa65yaOVXokz4plVNnoykiMNw2g&s=10"
];

botao.addEventListener('click', () => {
    imagens.forEach((img, index) => {
        if (novasImagens[index]) {
            img.src = novasImagens[index];
        }
    });
    
    // Opcional: mudar o texto do botão ou estilo para o "Modo Killar"
    botao.textContent = "🔪 Modo Killer";
    document.body.style.backgroundColor = "#ff000"; // Exemplo de clima sombrio
});
