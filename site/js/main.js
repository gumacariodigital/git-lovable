const produtos = [
  { nome: "Whey Protein 900g", desc: "24g de proteína por dose, sabor chocolate.", preco: 149.9, icone: "🥛" },
  { nome: "Creatina 300g", desc: "Monohidratada pura, 100% micronizada.", preco: 89.9, icone: "💪" },
  { nome: "Pré-treino 300g", desc: "Energia e foco com cafeína e beta-alanina.", preco: 119.9, icone: "⚡" },
  { nome: "Multivitamínico 60 caps", desc: "23 vitaminas e minerais essenciais.", preco: 59.9, icone: "💊" },
  { nome: "Ômega 3 120 caps", desc: "Alta concentração de EPA e DHA.", preco: 69.9, icone: "🐟" },
  { nome: "BCAA 2:1:1 120 caps", desc: "Aminoácidos para recuperação muscular.", preco: 64.9, icone: "🧪" }
];
const grade = document.getElementById("grade");
const qtd = document.getElementById("qtd");
let total = 0;
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
produtos.forEach(p => {
  const el = document.createElement("article");
  el.className = "produto";
  el.innerHTML = `<span class="icone">${p.icone}</span><h3>${p.nome}</h3><p>${p.desc}</p><span class="preco">${brl(p.preco)}</span><button class="botao">Adicionar</button>`;
  el.querySelector("button").addEventListener("click", () => { qtd.textContent = ++total; });
  grade.appendChild(el);
});
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("msg").textContent = "Inscrição feita! (teste — nenhum e-mail foi enviado)";
  e.target.reset();
});
