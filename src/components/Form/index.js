import { categories } from "../Category";
import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  // Função para enviar dados para o servidor
  function sendDataToServer(newVideo) {
    fetch("http://localhost:3001/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso:", data);
        // Limpar o form e atualizar a interface aqui, se necessário
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  function valideUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.lenght < 43) {
      setErrors("ERRO: URL inválida!");
      return false;
    } else {
      return url.substring(32, 43); // Apanho somente o id do video que estará nessa posição
    }
  }

  function onSave(event) {
    event.preventDefault();

    // Validar category
    if (!category || category === "-") {
      setErrors("ERRO: Escolha uma categoria");
      return;
    } else {
      setErrors("");
    }

    // Validar url
    const urlVideo = valideUrl(url);
    if (urlVideo && category) {
      //  Guardar o url e a category
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));

      // Enviar os dados para o servidor
      sendDataToServer(newVideo);

      // Limpar o form
      setUrl("");
      setCategory("");
    } else {
      setErrors("ERRO: URL inválida!");
    }
  }

  const errorClass = errors ? styles.errors : "";

  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do video"
            required={true}
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            required={true}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="-">Selecione uma categoria</option>
            {categories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
        <div className={`${errorClass}`}>{errors}</div>
      </form>
    </section>
  );
}

export default Form;
