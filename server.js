const { json, send } = require("micro");

const token = "this_is_a_test_token";

module.exports = async (req, res) => {
  // Eliminamos el /api
  const url = req.url.replace("/api", "");

  // Controlamos las rutas
  switch (url) {
    case "":
    case "/":
      return { hello: "world" };
    case "/todos":
      if (req.headers["api-token"] === token) {
        return [
          {
            title: "Ir a la compra",
            completed: false,
          },
          {
            title: "Sacar al perro",
            completed: true,
          },
        ];
      } else {
        return send(res, 401, {
          error: "No está autorizado. Inicie sesión primero",
        });
      }
    case "/login":
      let data;

      try {
        data = await json(req);
      } catch {
        data = {};
      }

      if (data.username != null && data.username == data.password) {
        return { id: 1, username: data.username, token };
      } else {
        return send(res, 401, {
          error: "El usuario y la contraseña no coinciden",
        });
      }
    default:
      return send(res, 404, { error: "No encontrado" });
  }
};
