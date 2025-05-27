const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correct: 2
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        correct: 2
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"],
        correct: 1
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correct: 2
    },
    {
        question: "Em que ano o Brasil foi descoberto?",
        options: ["1500", "1492", "1502", "1498"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartButton = document.getElementById("restart-btn");
const questionBox = document.getElementById("question-box");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(index) {
    const options = optionsElement.children;
    const question = questions[currentQuestion];
    
    for (let option of options) {
        option.disabled = true;
    }
    
    if (index === question.correct) {
        options[index].classList.add("correct");
        score++;
    } else {
        options[index].classList.add("wrong");
        options[question.correct].classList.add("correct");
    }
    
    nextButton.style.display = "block";
}

function showResult() {
    questionBox.style.display = "none";
    nextButton.style.display = "none";
    resultElement.classList.remove("hide");
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    questionBox.style.display = "block";
    resultElement.classList.add("hide");
    showQuestion();
});

nextButton.style.display = "none";
showQuestion();

// Dados dos produtos (exemplo)
const produtos = [
    {
        id: 1,
        nome: 'Smartphone XYZ',
        preco: 1499.99,
        imagem: 'https://via.placeholder.com/200x200?text=Smartphone'
    },
    {
        id: 2,
        nome: 'Notebook ABC',
        preco: 3999.99,
        imagem: 'https://via.placeholder.com/200x200?text=Notebook'
    },
    {
        id: 3,
        nome: 'Fone de Ouvido',
        preco: 199.99,
        imagem: 'https://via.placeholder.com/200x200?text=Fone'
    }
];

// Estado do carrinho
let carrinho = [];

// Elementos do DOM
const listaProdutos = document.getElementById('lista-produtos');
const modalCarrinho = document.getElementById('modal-carrinho');
const botaoCarrinho = document.getElementById('botao-carrinho');
const fecharCarrinho = document.getElementById('fechar-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const quantidadeCarrinho = document.getElementById('quantidade-carrinho');
const finalizarCompra = document.getElementById('finalizar-compra');

// Renderiza os produtos na página
function renderizarProdutos() {
    listaProdutos.innerHTML = produtos.map(produto => `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
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
    // Atualiza quantidade no botão do carrinho
    const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);
    quantidadeCarrinho.textContent = quantidadeTotal;

    // Atualiza itens no modal do carrinho
    itensCarrinho.innerHTML = carrinho.map(item => `
        <div class="item-carrinho">
            <span>${item.nome} x${item.quantidade}</span>
            <span>
                R$ ${(item.preco * item.quantidade).toFixed(2)}
                <button onclick="removerDoCarrinho(${item.id})" style="margin-left: 10px; color: red;">X</button>
            </span>
        </div>
    `).join('');

    // Atualiza total
    const total = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    totalCarrinho.textContent = total.toFixed(2);
}

// Event Listeners
botaoCarrinho.addEventListener('click', () => {
    modalCarrinho.style.display = 'block';
});

fecharCarrinho.addEventListener('click', () => {
    modalCarrinho.style.display = 'none';
});

finalizarCompra.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    alert('Compra finalizada com sucesso! Total: R$ ' + totalCarrinho.textContent);
    carrinho = [];
    atualizarCarrinho();
    modalCarrinho.style.display = 'none';
});

// Inicialização
renderizarProdutos();  