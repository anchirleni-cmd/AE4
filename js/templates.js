export const Templates={
  home(){return `<section class='hero'><picture><source srcset='imagens/banner-principal.webp' type='image/webp'><img src='imagens/banner-principal.jpg' alt='Voluntários com as mãos unidas'></picture><h1>Juntos por um futuro melhor</h1></section>`},
  projetos(){return `<h1>Projetos</h1><div class='grid'>
    <div class='card'><img src='imagens/projetos/projeto-educacao.jpg' alt='Turma em sala'><h3>Educação</h3></div>
    <div class='card'><img src='imagens/projetos/projeto-cultura.jpg' alt='Desenhos coloridos'><h3>Cultura</h3></div>
    <div class='card'><img src='imagens/projetos/projeto-esporte.jpg' alt='Atleta na pista'><h3>Esporte</h3></div>
    <div class='card'><img src='imagens/projeto-profissionalizante.jpg' alt='Máquina de costura'><h3>Profissionalizante</h3></div>
  </div>`},
  cadastro(){return `<h1>Cadastro de Voluntários</h1>
    <form id='form-cadastro'>
      <label>Nome <input id='nome' name='nome' required></label>
      <label>E-mail <input id='email' name='email' type='email' required></label>
      <label>CPF <input id='cpf' name='cpf' required></label>
      <label>Telefone <input id='telefone' name='telefone' required></label>
      <label>Nascimento <input id='nascimento' name='nascimento' type='date' required></label>
      <label>CEP <input id='cep' name='cep' required></label>
      <label>Cidade <input id='cidade' name='cidade' required></label>
      <label>Estado <input id='estado' name='estado' required></label>
      <label><input type='checkbox' id='consent' required> Concordo</label>
      <button class='botao' type='submit'>Enviar</button>
    </form>`}
};