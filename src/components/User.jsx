import './User.css';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  return (
    <div className="user-card">
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Username:</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>{user.website}</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
          </tr>
          <tr>
            <th>Company:</th>
            <td>{`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;