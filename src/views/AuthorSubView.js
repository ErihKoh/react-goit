import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });
export default function AuthorSubView({ authors }) {
  const { slug } = useParams();
  const authorId = slug.match(/[a-z0-9]+$/)[0];
  const author = authors.find(author => author.id === Number(authorId));
  const location = useLocation();

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {author.books.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `/books/${makeSlug(`${book.title} ${book.id}`)}`,
                state: {
                  from: { location, label: 'back to authors' },
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
