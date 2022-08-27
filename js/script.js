class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }
  salvar() {
    let produto = this.lerDados();
    if (this.validaCampos(produto)) {
      this.adicionar(produto);
    }
    this.listaTabela();
    this.cancelar();
  }
  listaTabela() {
    let tbody = document.querySelector("#tbody");
    tbody.innerText = "";
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].preco;

      td_id.classList.add("center");
      td_produto.classList.add("center");
      td_valor.classList.add("center");
      td_acoes.classList.add("center");

      let imgDelete = document.createElement("img");
      imgDelete.src = "./img/edit-svgrepo-com.svg";
      imgDelete.setAttribute(
        "onclick",
        "produto.deletar(" + this.arrayProdutos[i].id + ")"
      );

      td_acoes.appendChild(imgDelete);
    }
  }
  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados() {
    let produto = {};
    produto.id = this.id;
    produto.nomeProduto = document.querySelector("#produto").value;
    produto.preco1 = document.querySelector("#preco").value;
    produto.preco = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(produto.preco1);
    return produto;
  }

  validaCampos(produto) {
    let msg = "";
    if (produto.nomeProduto == "") {
      msg += "Informa o nome do Produto \n";
    }
    if (produto.preco == "") {
      msg += "Informa o Preço do Produto \n";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }

  cancelar() {
    document.querySelector("#produto").value = "";
    document.querySelector("#preco").value = "";
  }
  fechar() {
        let soma = 0;
        for (let i = 0; i < produto.arrayProdutos.length; i++) {
          soma += parseInt(produto.arrayProdutos[i].preco1);
          txtf.innerHTML = "Produtos consumidos :";
          // totalPagar.innerText = `Valor Total: ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma)} + 10% (taxa serviço) = ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma + (soma * 10 / 100))} `;
          let tr = tbo.insertRow();
          let td_produto = tr.insertCell();
          let td_valor = tr.insertCell();
          td_produto.innerText = produto.arrayProdutos[i].nomeProduto;
          td_valor.innerText = " - " + produto.arrayProdutos[i].preco;
        }
    if (this.id == 1) {
      alert("Não possui item para cobrança");
    } else if (this.id != 1) {
      let simOuNao = prompt(
        "Vai querer dividi-la em mais pessoas da mesa? \n [S]im / [N]ão");
      if (simOuNao == 'S' || simOuNao == 's') {
        let qntPessoas = parseInt(prompt("Para quantas pessoas ?"));
        let nomePessoas = [];
        for(let i = 0; i < qntPessoas;i++){
          nomePessoas.push(prompt('Qual nome delas ?' )) 
        }
        alert("Obrigado pela preferencia...");
        alert(`O Valor Total ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma)} dividido em ${nomePessoas.length} pessoas é : ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma / nomePessoas.length)} + 10% (taxa serviço) = ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma / nomePessoas.length + (soma / nomePessoas.length) * 10 / 100)}`)

        totalPagar.innerText = `Valor Total: ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma)}`
      } 
      
      else if (simOuNao == 'N' || simOuNao == 'n') {
        prompt("Dinheiro ou Cartão:");
        totalPagar.innerText = `Valor Total: ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma)} + 10% (taxa serviço) = ${new Intl.NumberFormat("pt-BR",{style: "currency",currency: "BRL",}).format(soma + (soma * 10 / 100))} `;
        
      } else {
        alert("Opção Invalida!");
      }
    }
  }
  deletar(id) {
    if (confirm("Deseja realmente deletar o produto? Item " + id)) {
      let tbody = document.querySelector("#tbody");
      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].id == id) {
          this.arrayProdutos.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
    }
  }
}
var produto = new Produto();
