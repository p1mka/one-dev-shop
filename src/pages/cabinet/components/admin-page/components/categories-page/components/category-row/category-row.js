import {
  Button,
  RowTableData,
  TableData,
} from "../../../../../../../../components";

export const CategoryRow = ({
  name,
  index,
  onProductEdit,
  onProductRemove,
}) => {
  return (
    <tr>
      <TableData>{index + 1}</TableData>
      <TableData>{name}</TableData>
      <RowTableData>
        <Button
          title="Редактировать"
          background="#fff"
          color="#000"
          iconId={"la-edit"}
          iconSize="24px"
          fontSize="12px"
          padding="0"
          // onClick={() => onProductEdit(product)}
        />
        <Button
          title="Удалить"
          background="#fff"
          color="#000"
          iconId="la-trash-alt"
          iconSize="24px"
          fontSize="12px"
          padding="0"
          // onClick={() => onProductRemove(productId, title)}
        />
      </RowTableData>
    </tr>
  );
};
