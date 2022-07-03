type Estoque = {
  id: number;
  idProduto: number;
  produto: string;
  local: string;
  dataValidade?: Date;
  quantidade: number;
};

export default Estoque;
