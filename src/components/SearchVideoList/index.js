import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState } from "react";

function filterVideos(videos, searchText) {

    return videos.filter((video) => 
        video.category.toLowerCase().includes(searchText.toLowerCase()) ||
        video.title.toLowerCase().includes(searchText.toLowerCase())
    );
}

function SearchVideoList({ videos }) {
const [ searchText, setSearchText ] = useState("");
const foundVideos = filterVideos( videos, searchText);
  return (
    <section className={styles.container}>
      <input 
        type="search" 
        placeholder="Pesquisar..." 
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        />
      <VideoList 
        videos={foundVideos}
        emptyHeading={`Sem vídeos sobre "${searchText}"`} />
    </section>
  );
}

export default SearchVideoList;
