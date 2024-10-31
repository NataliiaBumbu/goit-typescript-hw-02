import { Hearts } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles.loader}>
		<Hearts
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
		</div>
	);
};

export default Loader;