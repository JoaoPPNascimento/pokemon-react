import { useState } from 'react'
import './App.css'

function App() {
  const [mensagem, setMensagem] = useState("");

  const [pokemons, setPokemons] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const nome = data.get("nome");
    const tipo = data.get("tipo");
    const descricao = data.get("descricao");
    const poder = data.get("poder");

    if (!nome || !tipo || !descricao || !poder) {
      setMensagem("⚠️ Preencha todos os campos!");
      return;
    }

    const pokemon = {"nome": nome, "tipo": tipo, "descricao": descricao, "poder": poder};
    setPokemons([...pokemons, pokemon]);

    setMensagem("🎉 Pokémon cadastrado com sucesso!");

    form.reset();
  };

  return (
    <div className="container">
      <form className="pokemon-form" onSubmit={handleSubmit}>
        <h1>Cadastro de Pokémon</h1>

        <label htmlFor="nome">Nome do Pokémon:</label>
        <input type="text" id="nome" name="nome" placeholder="Ex: Pikachu" required />

        <label htmlFor="tipo">Tipo do Pokémon:</label>
        <select id="tipo" name="tipo" required>
          <option value="">Selecione um tipo</option>
          <option value="fogo">Fogo</option>
          <option value="agua">Água</option>
          <option value="grama">Grama</option>
          <option value="eletrico">Elétrico</option>
          <option value="psiquico">Psíquico</option>
          <option value="pedra">Pedra</option>
        </select>

        <label htmlFor="descricao">Descrição:</label>
        <input id="descricao" name="descricao" placeholder="Descreva o Pokémon..." required />

        <label htmlFor="poder">Poder (0 a 100):</label>
        <input type="number" id="poder" name="poder" min={0} max={100} required />

        <button type="submit">Cadastrar</button>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <strong>{pokemon.nome}</strong> - Tipo: {pokemon.tipo} - Descrição: {pokemon.descricao} - Poder: {pokemon.poder}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;