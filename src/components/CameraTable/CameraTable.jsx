import { useEffect, useState } from "react";
import CameraRow from "./CameraRow";
import Pagination from "../Pagination/Pagination";
import styles from "./CameraTable.module.css";
import Loader from "../Loader/Loader";

const ITEMS_PER_PAGE = 10;

const CameraTable = (props) => {
  let {
    cameras,
    search,
    loading,
    toggleStatus,
    deleteCamera,
    locationFilter,
    statusFilter,
  } = props;

  const [page, setPage] = useState(1);

  let filteredCameras = cameras;

  // Search
  if (search) {
    filteredCameras = filteredCameras.filter((cam) =>
      cam.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Location
  if (locationFilter) {
    filteredCameras = filteredCameras.filter(
      (cam) => cam.location === locationFilter,
    );
  }

  // Status
  if (statusFilter) {
    filteredCameras = filteredCameras.filter(
      (cam) => cam.status === statusFilter,
    );
  }

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filteredCameras.slice(start, start + ITEMS_PER_PAGE);

  if (loading) return <Loader />;

  return (
    <section className={styles.camera_table_container}>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="checkbox" id="checkbox" />
              NAME
            </th>
            <th>LOCATION</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((cam) => (
            <CameraRow
              key={cam.id}
              camera={cam}
              toggleStatus={toggleStatus}
              deleteCamera={deleteCamera}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        total={filteredCameras.length}
        perPage={ITEMS_PER_PAGE}
        page={page}
        setPage={setPage}
      />
    </section>
  );
};

export default CameraTable;
