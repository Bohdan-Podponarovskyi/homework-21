import styles from './Main.module.scss';
import List from "./List.jsx";
import Form from "./Form.jsx";

function Main() {

    return (
        <div className={styles.main}>
            <List />
            <Form />
        </div>
    );
}

export default Main;