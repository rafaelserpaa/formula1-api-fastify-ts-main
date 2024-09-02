### API de Gerenciamento de Equipes e Pilotos

Este projeto é uma API desenvolvida utilizando Fastify em Node.js para gerenciar informações sobre equipes e pilotos. A API oferece endpoints para recuperar informações detalhadas sobre equipes e pilotos, bem como uma rota para listar todos os pilotos.

#### Funcionalidades

1. **Listagem de Equipes**
   - Endpoint: `/teams`
   - Método: GET
   - Descrição: Retorna uma lista de todas as equipes cadastradas.

2. **Detalhes de uma Equipe**
   - Endpoint: `/teams/:id`
   - Método: GET
   - Descrição: Retorna detalhes de uma equipe específica com base no ID fornecido.

3. **Listagem de Pilotos**
   - Endpoint: `/drivers`
   - Método: GET
   - Descrição: Retorna uma lista de todos os pilotos cadastrados.

4. **Detalhes de um Piloto**
   - Endpoint: `/drivers/:id`
   - Método: GET
   - Descrição: Retorna detalhes de um piloto específico com base no ID fornecido.


#### Requisitos

Para executar este projeto em seu ambiente local, certifique-se de ter instalado o Node.js. Clone o repositório e execute os seguintes comandos no diretório do projeto:

```bash
# Instalar as dependências
npm install

# Iniciar o servidor
npm run start
```

#### Bibliotecas Utilizadas

- **Fastify**: Framework web leve e eficiente para Node.js.
- **@fastify/cors**: Plugin para suporte a CORS (Cross-Origin Resource Sharing).

#### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorar este projeto.

