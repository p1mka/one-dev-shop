import {
  Button,
  RowTableData,
  TableData,
} from "../../../../../../../../components";

export const ProductRow = ({
  product,
  index,
  onProductEdit,
  onProductRemove,
}) => {
  const {
    id: productId,
    title,
    img,
    price,
    rating,
    discount,
    amount,
  } = product;

  return (
    <tr>
      <TableData>{index + 1}</TableData>
      <TableData>{title}</TableData>
      <TableData>{img}</TableData>
      <TableData>{price}</TableData>
      <TableData>{discount}%</TableData>
      <TableData>{amount}</TableData>
      <TableData>{Number(rating).toFixed(2)}</TableData>
      <RowTableData>
        <Button
          title="Редактировать"
          background="#fff"
          color="#000"
          iconId={"la-edit"}
          iconSize="24px"
          fontSize="12px"
          padding="0"
          onClick={() => onProductEdit(product)}
        />
        <Button
          title="Удалить"
          background="#fff"
          color="#000"
          iconId="la-trash-alt"
          iconSize="24px"
          fontSize="12px"
          padding="0"
          onClick={() => onProductRemove(productId, title)}
        />
      </RowTableData>
    </tr>
  );
};
