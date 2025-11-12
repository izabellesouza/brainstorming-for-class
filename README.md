# Projeto Brainstorming-for-Class

## 1. Descrição Geral

O **Brainstorming-for-Class** é um projeto desenvolvido por **Izabelle Souza** e **Kayo Brenno**, com o objetivo de criar uma plataforma digital voltada para **estudantes e grupos de estudo**.  

Nesta etapa foi criado um **MVP (versão inicial)** do front-end, apenas como uma **casquinha do projeto**, para demonstrar a estrutura visual e o conceito principal.  

Também foi iniciado o **back-end**, com a configuração base da API e planejamento do banco de dados.

---

## 2. Funcionalidades

- Estrutura inicial do front-end com React  
- Interface responsiva e moderna  
- Início da configuração do back-end  
- Endpoint de teste no servidor  
- Planejamento da integração com banco de dados  

---

## 3. Tecnologias Utilizadas

### Front-End
- React  
- Tailwind CSS  
- JavaScript  

### Back-End
- **Node.js + Express** 
- MySQL (planejado)  

---

## 4. Estrutura do Projeto

Este repositório foi desenvolvido inicialmente como um **MVP** (versão base ou “casquinha”) do front-end, e em seguida foi iniciado o desenvolvimento do **back-end** em Node.js para servir de base à integração com o sistema completo.

### Branches Atuais/Futuras

- `main` – Versão final e estável do projeto.
- `developer-testes` – Branch de integração e testes antes de ir para a `main`.
- Branches individuais:
  - `izabelle-v1`
  - `kayo-v1`

---

## 5. Exemplo de Endpoint do Back-End  

Um endpoint simples foi criado para teste inicial do servidor com **Node.js e Express**:

```javascript
// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de teste
app.get("/api/hello", (req, res) => {
  res.send("API do Brainstorming-for-Class funcionando!");
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
```

### 🧠 Como executar o back-end

```bash
npm init -y
npm install express cors
node server.js
```

Depois de rodar o servidor, acesse no navegador:  
👉 [http://localhost:3001/api/hello](http://localhost:3001/api/hello)

Se aparecer a mensagem **“API do Brainstorming-for-Class funcionando!”**, o back-end está ativo e pronto para integração com o front-end.

---

## 6. Comandos Úteis

```bash
# Clonar o repositório
git clone https://github.com/izabellesouza/brainstorming-for-class-.git
cd brainstorming-for-class-

# Mudar para sua branch
git checkout sua-branch

# Atualizar com developer-testes
git pull origin developer-testes

# Subir mudanças
git add .
git commit -m "Mensagem clara"
git push origin sua-branch
```

---

Desenvolvido por **Izabelle Souza** e **Kayo Brenno.** 💡
