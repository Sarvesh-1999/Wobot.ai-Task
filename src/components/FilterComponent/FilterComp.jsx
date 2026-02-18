import styles from "./FilterComp.module.css";
import locationIcon from "../../assets/Location_icon.png";
import arrowDownIcon from "../../assets/arrow_Down.png";
import rss_feed_icon from "../../assets/rss_feed.png";

const FilterComp = ({ setLocationFilter, setStatusFilter, locations }) => {
  return (
    <div className={styles.filter_container}>
      {/* FILTER BY LOCATION */}
      <div className={styles.filter}>
        <img src={locationIcon} alt="Location Icon" />

        <select onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <img src={arrowDownIcon} alt="Arrow down Icon" />
      </div>

      {/* FILTER BY STATUS */}
      <div className={styles.filter}>
        <img src={rss_feed_icon} alt="Location Icon" />

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <img src={arrowDownIcon} alt="Arrow down Icon" />
      </div>
    </div>
  );
};

export default FilterComp;
