import { useEffect, useState } from "react";
import { fetchCameras, updateCameraStatus } from "../api/cameraApi";

export const useCameras = () => {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCameras();
  }, []);

  const loadCameras = async () => {
    setLoading(true);
    try {
      const res = await fetchCameras();
      console.log(res);
      setCameras(res.data.data.cameras);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    const payload = {
      id,
      status: newStatus === "active" ? "Active" : "Inactive",
    };

    let res = await updateCameraStatus(payload);
    console.log(res);

    setCameras((prev) => {
      return prev.map((cam) =>
        cam.id === id ? { ...cam, status: newStatus } : cam,
      );
    });
  };

  const deleteCamera = (id) => {
    setCameras((prev) => prev.filter((cam) => cam.id !== id));
  };

  return {
    cameras,
    loading,
    toggleStatus,
    deleteCamera,
  };
};
