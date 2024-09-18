//Import services
import AuthService from "@/services/AuthService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    //Get response service
    const user = { name: "usuario" }; //await AuthService.authenticate(email, password);

    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Credenciales inválidas" });
    }
  } else {
    res.status(405).json({ success: false, message: "Método no permitido" });
  }
}
