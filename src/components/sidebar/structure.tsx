import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PaidIcon from "@mui/icons-material/Paid";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";

const structure = [
  { label: "Dashboard", link: "/", icon: <HomeIcon /> },
  {
    label: "Produtos",
    link: "/produtos",
    icon: <LocalOfferIcon />,
  },
  {
    label: "Estoque",
    link: "/estoques",
    icon: <InventoryIcon />,
  },
  {
    label: "Financeiro",
    link: "/financeiro",
    icon: <PaidIcon />,
  },
  {
    label: "Cálculo de insumo",
    link: "/calculo-insumo",
    icon: <CalculateIcon />,
  },
];
export default structure;
