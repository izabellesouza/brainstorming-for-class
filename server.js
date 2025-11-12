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
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
