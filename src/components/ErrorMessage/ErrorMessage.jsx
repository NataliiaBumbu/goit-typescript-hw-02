import styles from './ErrorMessage.module.css';
import { BiSolidErrorAlt } from 'react-icons/bi'

const ErrorMessage = () => {
  return (
	<div><div className={styles.errorContainer}>
  <BiSolidErrorAlt className={styles.errorIcon} />
  <p className={styles.errorText}>
    Something went wrong, please reload you page!
  </p>
</div></div>
  )
}

export default ErrorMessage