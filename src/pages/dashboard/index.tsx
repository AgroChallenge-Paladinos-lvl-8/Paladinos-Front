import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PageContent from "../../components/page-content";

const Dashboard: React.FC = () => {
  return (
    <PageContent>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained">Button</Button>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="contained" color="secondary">
          Button
        </Button>
        <Button variant="contained" color="success">
          Button
        </Button>
      </Stack>
    </PageContent>
  );
};
export default Dashboard;
