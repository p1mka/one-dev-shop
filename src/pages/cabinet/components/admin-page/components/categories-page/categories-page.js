import { useEffect, useState } from "react";
import { request } from "../../../../../../utils";
import { Button, Loader, Table, TableHead } from "../../../../../../components";
import { CategoryRow } from "./components";

export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request("/products/categories")
      .then(({ error, data }) => setCategories(data))
      .finally(() => setIsLoading(false));
  }, [shouldUpdate]);

  const onCategoryRemove = async (categoryId) => {
    setIsLoading(true);
    await request(`/products/categories/${categoryId}`, "DELETE");
    setShouldUpdate(!shouldUpdate);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h2>Категории товаров</h2>
      <Table>
        <thead>
          <tr>
            <TableHead></TableHead>
            <TableHead>Название</TableHead>
            <TableHead>
              <Button iconId="la-plus" background="#fff" color="#000" />
            </TableHead>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ id: categoryId, name }, index) => (
            <CategoryRow
              key={categoryId}
              name={name}
              onCategoryRemove={() => onCategoryRemove(categoryId)}
              index={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
