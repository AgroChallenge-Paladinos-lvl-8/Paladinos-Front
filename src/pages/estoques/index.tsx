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
import Estoque from "../../models/estoque";

const Estoques: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [Estoques, setEstoques] = React.useState<Estoque[]>([]);
  const debouncedSearchTerm: string = useDebounce<string>(searchValue, 500);

  React.useEffect((): void => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    setEstoques(
      arr.map((num) => {
        return {
          id: 1 + num,
          idProduto: num,
          produto: "Produto",
          local: "Fazendo Cascavel",
          dataValidade: new Date("2022-10-11"),
          quantidade: num % 2 === 0 ? 20 : 0,
        };
      })
    );
  }, [debouncedSearchTerm]);

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
  };

  const removerEstoque = (id: number) => {};

  const pageBreadcrumbs: PageBreadcrumbs[] = [{ title: "Estoques" }];
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
            <Typography variant="h4">Estoques</Typography>

            <Button
              component={Link}
              to="/estoques/novo"
              color="primary"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Novo Estoque
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
              label="Pesquisar Estoques"
            />
          </Stack>

          <TableContainer
            sx={{ minHeight: "250px", maxHeight: "calc(100vh - 380px)" }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Local</TableCell>
                  <TableCell>Produto</TableCell>
                  <TableCell>Data Validade</TableCell>
                  <TableCell>Estoque</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {Estoques.length &&
                  Estoques.map((Estoque) => (
                    <TableRow key={Estoque.id}>
                      <TableCell>{Estoque.local}</TableCell>
                      <TableCell>{Estoque.produto}</TableCell>
                      <TableCell>
                        {Estoque.dataValidade?.toLocaleDateString()}
                      </TableCell>
                      <TableCell>{Estoque.quantidade}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          title="Editar"
                          component={Link}
                          to={{
                            pathname: `/Estoques/${Estoque.id}`,
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          title="Editar"
                          onClick={() => removerEstoque(Estoque.id)}
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
export default Estoques;
