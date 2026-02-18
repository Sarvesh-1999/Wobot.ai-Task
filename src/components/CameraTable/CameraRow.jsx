import styles from "./CameraRow.module.css";
const CameraRow = ({ camera, toggleStatus, deleteCamera }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{camera.name}</td>
      <td className={styles.cell}>{camera.location}</td>
      <td className={styles.cell}>
        <button
          onClick={() => toggleStatus(camera.id, camera.status)}
          className={
            camera.status === "active" ? styles.active : styles.inactive
          }
        >
          {camera.status}
        </button>
      </td>
      <td className={styles.cell}>
        <button onClick={() => deleteCamera(camera.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CameraRow;
