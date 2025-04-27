import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.status(200).send({ message: "Olá mundo" });
});

function bootstrap() {
  const port = 3001;
  app.listen(3001, () => console.log("API rodando na porta ", port));
}

bootstrap();
