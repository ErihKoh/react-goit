import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from 'services/bookshelf-api';

export default function BookDetailsView() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/books');
  };

  return (
    <>
      <button type="button" onClick={onGoBack}>
        {location?.state?.from?.label ?? 'back'}
      </button>
      <hr />
      <PageHeading text={`Книга ${bookId}`} />
      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
