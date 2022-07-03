import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import IconButton from "@mui/material/IconButton";

import SvgIcon from "@mui/material/SvgIcon";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";

import { Link } from "react-router-dom";
import PageContent, { PageBreadcrumbs } from "../../components/page-content";
import { useDebounce } from "../../hooks/useDebounce";
import Produto from "../../models/produto";

const Produtos: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const debouncedSearchTerm: string = useDebounce<string>(searchValue, 500);

  React.useEffect((): void => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    setProdutos(
      arr.map((num) => {
        return {
          id: 1 + num,
          nome: "Semente de milho precoce " + num,
          codigo: "ABC123" + num,
          fabricante: "Prideseed",
          fornecedor: "Cocamar",
        };
      })
    );
  }, [debouncedSearchTerm]);

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
  };

  const removerProduto = (id: number) => {};

  const pageBreadcrumbs: PageBreadcrumbs[] = [{ title: "Produtos" }];
  return (
    <PageContent pageBreadcrumbs={pageBreadcrumbs}>
      <Paper sx={{ p: 2 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="h4">Produtos</Typography>

            <Button
              component={Link}
              to="/produtos/novo"
              color="primary"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Novo Produto
            </Button>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <TextField
              required
              fullWidth
              variant="outlined"
              margin="normal"
              value={searchValue}
              onChange={handleChangeValue}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              label="Pesquisar Produtos"
            />
          </Stack>
          <TableContainer
            sx={{ minHeight: "250px", maxHeight: "calc(100vh - 380px)" }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Código</TableCell>
                  <TableCell>Fabricante</TableCell>
                  <TableCell>Fornecedor</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {produtos.length &&
                  produtos.map((produto) => (
                    <TableRow key={produto.id}>
                      <TableCell>{produto.nome}</TableCell>
                      <TableCell>{produto.codigo}</TableCell>
                      <TableCell>{produto.fabricante}</TableCell>
                      <TableCell>{produto.fornecedor}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          title="Editar"
                          component={Link}
                          to={{
                            pathname: `/produtos/${produto.id}`,
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          title="Editar"
                          onClick={() => removerProduto(produto.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Paper>
    </PageContent>
  );
};
export default Produtos;
