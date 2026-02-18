import axios from "axios";

const API_BASE = "https://hiring-assignment.wobot.ai/api/v1";
const TOKEN = "4ApVMIn5sTxeW7GQ5VWeWiy";

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

// FETCH CAMERAS
export const fetchCameras = () => api.get("/fetch/cameras");

// UPDATE CAMERA STATUS
export const updateCameraStatus = (payload) => api.post("/update/camera/status", payload);
