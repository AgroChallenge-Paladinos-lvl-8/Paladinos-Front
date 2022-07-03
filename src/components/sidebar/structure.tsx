import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MapIcon from "@mui/icons-material/Map";

const structure = [
  { label: "Dashboard", link: "/", icon: <LocalOfferIcon /> },
  {
    label: "Produtos",
    link: "/produtos",
    icon: <InventoryIcon />,
  },
  {
    label: "Estoque",
    link: "/estoques",
    icon: <CloudUploadIcon />,
  },
  {
    label: "Financeiro",
    link: "/financeiro",
    icon: <MapIcon />,
  },
  {
    label: "Cálculo de insumo",
    link: "/calculo-yarn insumo",
    icon: <MapIcon />,
  },
];
export default structure;
