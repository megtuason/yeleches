import { useStyles } from '../styles';
import { ProductPrices } from '../types';
import { Select, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

interface PropTypes {
  prices: ProductPrices;
}

const OrderItemInput: React.FC<PropTypes> = ({ prices }) => {
  const classes = useStyles();
  if (!prices) return null;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Size</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(prices)?.map((priceKey) => (
          <TableRow key={'row-'+priceKey}>
            <TableCell>{priceKey}</TableCell>
            <TableCell></TableCell>
            <TableCell>{prices[priceKey]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderItemInput;
