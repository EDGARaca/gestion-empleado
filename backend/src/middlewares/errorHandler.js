export function errorHandler(err, req, res, next) {
  console.error(" Error:", err);
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "Datos inválidos", errors: err.errors });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: "Email ya registrado" });
  }
  res.status(500).json({ message: "Error interno del servidor" });
}