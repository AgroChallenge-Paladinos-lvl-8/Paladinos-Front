import React from "react";
import * as yup from "yup";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Field, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";

import PageContent, { PageBreadcrumbs } from "../../components/page-content";
import theme from "../../theme";

const validationSchema = yup.object({
  grao: yup.string().trim().required("Selecione o grão"),
  qtdTerra: yup
    .number()
    .required("Informe a quantida de terra que será plantada"),
  espacamentoLinha: yup.number().required("Informe o espaçamento de linha "),
});

type FormData = {
  grao: "milho" | "trigo" | "soja" | "";
  qtdTerra: number;
  espacamentoLinha: number;
};

const CalculoInsumo: React.FC = () => {
  const [grao, setGrao] = React.useState<string | undefined>(undefined);
  const [graoImg, setGraoImg] = React.useState<string | undefined>(undefined);
  const [qtdSacas, setQtdSacas] = React.useState<number | undefined>(undefined);
  const initialValues: FormData = {
    grao: "",
    qtdTerra: 0,
    espacamentoLinha: 0,
  };
  const onSubmit = async (
    values: FormData,
    formikHelpers: FormikHelpers<FormData>
  ) => {
    try {
      console.log(values);
      switch (values.grao) {
        case "milho":
          setGrao("Milho");
          setGraoImg("/img/milho.png");
          break;
        case "trigo":
          setGrao("Trigo");
          setGraoImg("/img/trigo.png");
          break;
        case "soja":
          setGrao("Soja");
          setGraoImg("/img/soja.png");
          break;

        default:
          setGrao("milho");
          setGraoImg("/img/milho.png");
          break;
          break;
      }
      setQtdSacas(values.qtdTerra * 100);
    } catch (error) {
      console.error(error);
    }
    formikHelpers.setSubmitting(false);
  };

  const pageBreadcrumbs: PageBreadcrumbs[] = [{ title: "Cálculo de insumo" }];
  return (
    <PageContent pageBreadcrumbs={pageBreadcrumbs}>
      <Paper sx={{ p: 2 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Typography variant="h4">Cálculo de insumo</Typography>
          <Formik<FormData>
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ values, submitForm, resetForm, isSubmitting }) => (
              <Stack spacing={2} direction="column">
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Field
                    component={TextField}
                    type="select"
                    select
                    label="Grão"
                    name="grao"
                    fullWidth
                  >
                    <MenuItem value="milho">Milho</MenuItem>
                    <MenuItem value="soja">Soja</MenuItem>
                    <MenuItem value="trigo">Trigo</MenuItem>
                  </Field>

                  <Field
                    component={TextField}
                    type="number"
                    label="Quantidade alqueire que serão plantados"
                    name="qtdTerra"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    type="number"
                    label="Espaçamento entre linhas"
                    name="espacamentoLinha"
                    fullWidth
                  />
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="flex-star"
                  justifyContent="space-between"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Calcular
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                    onClick={() => {
                      resetForm();
                    }}
                  >
                    Limpar dados
                  </Button>
                </Stack>
              </Stack>
            )}
          </Formik>
        </Stack>
      </Paper>
      {grao && graoImg && (
        <Paper sx={{ p: 2, mt: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            spacing={2}
          >
            <Paper
              sx={{ p: 2, backgroundColor: theme.palette.primary.main }}
              elevation={3}
            >
              <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
              >
                <img src={graoImg} alt={grao} height="150px" />

                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  color={theme.palette.primary.contrastText}
                >
                  {grao}
                </Typography>
              </Stack>
            </Paper>
            <Paper
              sx={{ p: 2, backgroundColor: theme.palette.primary.main }}
              elevation={3}
            >
              <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
              >
                <img src="/img/saco.png" alt="Sacos" height="150px" />
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  color={theme.palette.primary.contrastText}
                >
                  {qtdSacas}
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Paper>
      )}
    </PageContent>
  );
};
export default CalculoInsumo;
