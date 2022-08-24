//Para iniciar eu crio uma const com um array contendo algumas transações na forma de objetos.

const dummyTransactions = [
  { id: 1, name: 'Bolo de brigadeiro', amount: -20},
  { id: 2, name: 'Salário', amount: 300},
  { id: 3, name: 'Torta de frango', amount: -10},
  { id: 4, name: 'Violão', amount: 150}
]

//Uma vez que eu tenha as transações, eu posso adicioná-las no DOM pra começar a preencher a ul vazia. Dá pra fazer isso com uma função que adiciona as transações no DOM.

//Dentro dessa função, com o parâmetro transaction, é gerada uma li com os dados da transação.
const addTransactionIntoDom = transaction => {
  const operator = transaction.amount < 0 ? '-' : '+'
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
  const li = document.createElement('li')

  li.classList.add(CSSClass)
  li.innerHTML = `${transaction.name} <span>-$400</span>
  //   <button class="delete-btn">x</button>` 

} 
//É preciso notar que na Li existe uma classe minus e um sinal de menos dentro do span, logo, quando for inserir a transação na despesa é necessário incluir uma classe 'minus' e um sinal de subtração na Li.
//O primeiro passo dentro dessa função é obter o operador matemático que essa operação vai ter.

//Pra testar se tá funcionando eu faço uma invocação da função e, dentro dela, uso um log contendo a const operator para ver o que está saindo no console. 
// addTransactionIntoDom(dummyTransactions[1]) / o que vai sair no console será '+' pois ele é o segundo elemento desse array de objetos.

//Funcionando eu posso criar uma const li que usa o método de document createElement() que cria um novo elemento HTML. ele recebe como argumento o nome da tag que eu quero criar.

//Pra setar a marcação do HTML eu uso o innerHTML, logo, assim que que for gerado o HTML, a marcação interna do innerHTML vai ser atribuída com o texto interno inserido.