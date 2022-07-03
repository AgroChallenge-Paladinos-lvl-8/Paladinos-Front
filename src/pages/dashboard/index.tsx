import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaidIcon from "@mui/icons-material/Paid";

import PageContent from "../../components/page-content";

const DashCard: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <div>
        <span>
          <PaidIcon fontSize="small" />
        </span>{" "}
        Seu saldo disponível
      </div>
      <Typography variant="h5">R$ 134.000,00</Typography>
      <Button
        variant="contained"
        size="small"
        fullWidth
        component={Link}
        to="/financeiro"
        sx={{ mt: 2 }}
      >
        Saiba mais
      </Button>
    </Paper>
  );
};
const Dashboard: React.FC = () => {
  return (
    <PageContent>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
      >
        <Typography variant="h2">Bem vindo, Usuário</Typography>
        <Typography variant="h5" sx={{ mt: 4 }} color="primary">
          Resumo
        </Typography>
        <Stack
          // direction="row"
          // justifyContent="space-between"
          // alignItems="flex-start"
          // spacing={2}

          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
        >
          <DashCard />
          <DashCard />
          <DashCard />
          <DashCard />
        </Stack>
      </Stack>
    </PageContent>
  );
};
export default Dashboard;
