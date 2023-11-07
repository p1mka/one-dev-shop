import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsMenuVisible } from "../../store/selectors";
import { setIsLoading, setIsMenuVisible } from "../../store/actions";
import { useLayoutEffect, useState } from "react";
import { DB_MOCK } from "../../db-mock";
import styled from "styled-components";

const DropdownMenuContainer = ({ className }) => {
  const [categories, setCategories] = useState([]);
  const isMenuVisible = useSelector(selectIsMenuVisible);
  const dispatch = useDispatch();

  const onMenuClose = () => dispatch(setIsMenuVisible(!isMenuVisible));

  useLayoutEffect(() => {
    dispatch(setIsLoading());
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ json: () => DB_MOCK.categories });
      }, 500);
    })
      .then((loadedData) => loadedData.json())
      .then((loadedCategories) => setCategories(loadedCategories))
      .finally(() => dispatch(setIsLoading()));
  }, [dispatch, categories]);

  return (
    <div className={className} onMouseLeave={onMenuClose}>
      <ul className="categories">
        {categories.map(({ id, name }) => {
          return (
            <Link className="category" key={id} to="/categories/id">
              <li>{name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export const DropDownMenu = styled(DropdownMenuContainer)`
  font-family: Rubik;
  font-size: 1.2rem;
  font-weight: 700;
  position: fixed;
  z-index: 200;
  left: 5px;
  right: 5px;
  top: 4.5rem;
  display: flex;
  padding: 2rem 0;

  background: #fff;
  box-shadow: -1px 6px 7px 0px rgb(0 0 0 / 25%);
  animation-name: appear;
  animation-duration: 300ms;
  max-height: 10rem;

  & .categories {
    margin-left: 6.5%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5rem;
    list-style: none;
  }

  & .category {
    display: flex;
    padding: 0 5rem 0 0;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & a:hover {
    color: #eb4aae;
  }
`;
