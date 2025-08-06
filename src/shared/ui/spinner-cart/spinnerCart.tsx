import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import type { Cart } from "@entities/cart/type/cartType";
interface propsSpin {
  id: string;
  cartState: Cart;
  updateCountProduct: (id: string, operator: "+" | "-") => void;
}

export const SpinnerCart: React.FC<propsSpin> = ({
  id,
  cartState,
  updateCountProduct,
}) => {
  const handleDecrease = () => {
    updateCountProduct(id, "-");
  };

  const handleIncrease = () => {
    updateCountProduct(id, "+");
  };

  const quantity = cartState.purchase.find((item) => item.id === id)?.quantity;
  return (
    <Box>
      <Typography variant="subtitle1"></Typography>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid #e0e0e0"
        borderRadius="6px"
        max-width="130px"
        width="100%"
        justifyContent="space-between"
        px={1}
        mt={1}
      >
        <IconButton size="small" onClick={handleDecrease}>
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton size="small" onClick={handleIncrease}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};
