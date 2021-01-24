import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import slugify from 'slugify';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import AuthorSubView from './AuthorSubView';

const makeSlug = string => slugify(string, { lower: true });

export default function AuthorsView() {
  const { url, path } = useRouteMatch();
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Авторы" />

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${makeSlug(`${author.name} ${author.id}`)}`}>
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Route path={`${path}/:slug`}>
        {authors && <AuthorSubView authors={authors} />}
      </Route>
    </>
  );
}
