import { useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import { useSelector, useDispatch } from 'react-redux';
import { booksOperations, booksSelectors } from 'redux/books';
import PageHeading from 'components/PageHeading/PageHeading';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();

  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />

      {books.length > 0 &&
        books.map(book => (
          <ul>
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                  state: {
                    from: {
                      location,
                      label: 'back to books',
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
}
