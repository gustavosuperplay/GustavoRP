// Dados dos produtos (simulando um banco de dados)
const produtos = [
    {
        id: 1,
        nome: 'bulbasaur',
        preco:100 ,
        imagem: 'https://via.placeholder.com/200x200'
    },
    {
        id: 2,
        nome: 'bulbasaur',
        preco: 100,
        imagem: 'https://via.placeholder.com/200x200'
    },
    {
        id: 3,
        nome: 'squirtle',
        preco: 100,
        imagem: 'image.png'
    }
];

// Estado do carrinho
let carrinho = [];

// Elementos do DOM
const produtosContainer = document.getElementById('produtos');
const carrinhoModal = document.getElementById('carrinho-modal');
const carrinhoItens = document.getElementById('carrinho-itens');
const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
const carrinhoTotal = document.getElementById('carrinho-total');
const carrinhoIcon = document.querySelector('.carrinho-icon');
const finalizarCompra = document.getElementById('finalizar-compra');

// Renderiza os produtos na página
function renderizarProdutos() {
    produtosContainer.innerHTML = produtos.map(produto => `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        </div>
    `).join('');
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    const itemNoCarrinho = carrinho.find(item => item.id === id);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}

// Remove produto do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
}

// Atualiza a exibição do carrinho
function atualizarCarrinho() {
    // Atualiza quantidade no ícone
    carrinhoQuantidade.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);

    // Atualiza itens no modal
    carrinhoItens.innerHTML = carrinho.map(item => `
        <div class="carrinho-item">
            <img src="${item.imagem}" alt="${item.nome}">
            <div>
                <h4>${item.nome}</h4>
                <p>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
        </div>
    `).join('');

    // Atualiza total
    const total = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    carrinhoTotal.textContent = total.toFixed(2);
}

// Event Listeners
carrinhoIcon.addEventListener('click', () => {
    carrinhoModal.classList.toggle('ativo');
});

carrinhoModal.addEventListener('click', (e) => {
    if (e.target === carrinhoModal) {
        carrinhoModal.classList.remove('ativo');
    }
});

finalizarCompra.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    atualizarCarrinho();
    carrinhoModal.classList.remove('ativo');
});

// Inicialização
renderizarProdutos(); 