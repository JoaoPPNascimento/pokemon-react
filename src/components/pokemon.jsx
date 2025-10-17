import styles from "./Pokemon.module.css";

function Pokemon({ pokemon }) {
  const tipoClasse = styles[pokemon.tipo] || styles.padrao;

  return (
    <div className={`${styles.card} ${tipoClasse}`}>
      <div className={styles.header}>
        <h2>{pokemon.nome}</h2>
        <span className={styles.tipo}>{pokemon.tipo.toUpperCase()}</span>
      </div>
      <p className={styles.descricao}>{pokemon.descricao}</p>
      <div className={styles.poderContainer}>
        <label>Poder:</label>
        <div className={styles.barraPoder}>
          <div
            className={styles.poder}
            style={{ width: `${pokemon.poder}%` }}
          ></div>
        </div>
        <span className={styles.valorPoder}>{pokemon.poder}</span>
      </div>
    </div>
  );
}

export default Pokemon;
