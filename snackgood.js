// Adicionar evento de clique aos itens do menu
const itensDoMenu = document.querySelectorAll('.item');
itensDoMenu.forEach(item => {
  item.addEventListener('click', () => {
    alert('Você adicionou o item ' + item.querySelector('h2').textContent + '.');
  });
});
