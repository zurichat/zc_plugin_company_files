
import App from "./App";
import root from 'react-shadow';
import styles from  "./index.css"


export default function Root(props) {
  return (
    <root.div>
      <style type="text/css">{styles.toString()}</style>
        <App />
    </root.div>
  );
}
