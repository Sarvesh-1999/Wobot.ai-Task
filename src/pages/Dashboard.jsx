import { useState } from "react";
import { useCameras } from "../hooks/useCameras";
import CameraTable from "../components/CameraTable/CameraTable";
import SearchBar from "../components/SearchBar/SearchBar";
import style from "./Dashboard.module.css";
import Header from "../components/Header/Header";
import FilterComp from "../components/FilterComponent/FilterComp";

const Dashboard = () => {
  const { cameras, loading, toggleStatus, deleteCamera } = useCameras();
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Find unique location
  const locations = [...new Set(cameras.map((cam) => cam.location))];
  // console.log(locations);

  return (
    <>
      {/* LOGO */}
      <div className={style.logo_container}>
        <img src="/Vector.png" alt="Wobot.ai" />
      </div>

      {/* HEADER */}
      <header className={style.header}>
        <Header />
        <SearchBar value={search} onChange={setSearch} />
      </header>

      {/* FILTER */}
      <FilterComp
        locations={locations}
        setLocationFilter={setLocationFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* TABLE */}
      <CameraTable
        cameras={cameras}
        search={search}
        locationFilter={locationFilter}
        statusFilter={statusFilter}
        loading={loading}
        toggleStatus={toggleStatus}
        deleteCamera={deleteCamera}
      />
    </>
  );
};

export default Dashboard;
