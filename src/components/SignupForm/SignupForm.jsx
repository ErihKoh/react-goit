import UseLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

export default function SignupForm() {
  // lazy state initilisation, ананимка в  useState

  const [email, setEmail] = UseLocalStorage('email', '');
  const [password, setPassword] = UseLocalStorage('password', '');

  //  можно использовать эту функцию вместо анонимных в onChange
  // ==================================================
  //   const handleChange = event => {
  //     const { name, value } = event.target;

  //     switch (name) {
  //       case 'email':
  //         setEmail(value);
  //         break;

  //       case 'password':
  //         setPassword(value);
  //         break;

  //       default:
  //         return;
  //     }
  //   };
  // ==============================================

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />{' '}
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };
//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//   <form className={styles.form} autoComplete="off">
//     <label className={styles.label}>
//       <span>Почта</span>
//       <input
//         type="email"
//         name="email"
//         onChange={this.handleChange}
//         value={this.state.email}
//       />{' '}
//     </label>

//     <label className={styles.label}>
//       <span>Пароль</span>
//       <input
//         type="password"
//         name="password"
//         onChange={this.handleChange}
//         value={this.state.password}
//       />
//     </label>

//     <button type="submit">Зарегистрироваться</button>
//   </form>
//     );
//   }
// }
