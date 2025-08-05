import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface propsSpin {
  quantity: number;
  setquantity: React.Dispatch<React.SetStateAction<number>>;
}

export const QuantityInput: React.FC<propsSpin> = ({
  quantity,
  setquantity,
}) => {
  const handleDecrease = () => {
    setquantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setquantity((prev) => prev + 1);
  };

  return (
    <Box>
      <Typography variant="subtitle1"></Typography>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid #e0e0e0"
        borderRadius="6px"
        width="130px"
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
