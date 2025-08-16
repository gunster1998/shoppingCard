import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { QuantityOperator } from "@shared/index";
interface PropsSpin {
  id: string;
  quantity: number;
  onChange: (
    id: string,
    operator: QuantityOperator.Increase | QuantityOperator.Decrease
  ) => void;
}

export const Spinner: React.FC<PropsSpin> = ({ id, quantity, onChange }) => {
  const handleDecrease = () => {
    onChange(id, QuantityOperator.Decrease);
  };

  const handleIncrease = () => {
    onChange(id, QuantityOperator.Increase);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid #e0e0e0"
        borderRadius="6px"
        height="42px"
        width="100%"
        justifyContent="space-between"
      >
        <IconButton size="small" onClick={handleDecrease}>
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton size="small" onClick={handleIncrease}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
};
