import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink } from "react-router-dom";

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{[match.params.userId]}</span>
);

const routes = [{ path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb }];
console.log(routes);
const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (

  <nav className="mx-4" aria-label="breadcrumb">
    <ol className="breadcrumb">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <li className="breadcrumb-item" key={match.url}>
          <NavLink to={match.url}>{breadcrumb}</NavLink>
        </li>
      ))}
    </ol>
  </nav>
));
export default Breadcrumbs;