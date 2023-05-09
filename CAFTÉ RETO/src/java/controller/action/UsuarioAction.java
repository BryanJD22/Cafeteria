package controller.action;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.UserDAO;
import model.Usuario;

public class UsuarioAction implements IAction {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) {
        String pagDestino = "";
        String action = request.getParameter("ACTION");

        String[] arrayAction = action.split("\\.");
        switch (arrayAction[1]) {
            case "FIND_ALL":
                pagDestino = findAll(request, response);
                break;
            case "ADD":
                break;
            case "LOGIN":
                pagDestino = login(request, response);
                break;
        }
        return pagDestino;
    }

    private String findAll(HttpServletRequest request, HttpServletResponse response) {

        UserDAO usuarioDAO = new UserDAO();
        ArrayList<Usuario> lstUsuarios = usuarioDAO.findAll(null);

        request.setAttribute("LISTA_USUARIOS", lstUsuarios);

        return "/index.jsp";
    }

    private String login(HttpServletRequest request,
            HttpServletResponse response) {
        String email = request.getParameter("EMAIL");
        String pass = request.getParameter("PASS");

        Usuario usuario = new Usuario();
        usuario.setEmail(email);
        usuario.setPassword(pass);
        UserDAO usuarioDAO = new UserDAO();
        ArrayList<Usuario> loginUsuario = usuarioDAO.
                findAll(usuario);
        if (loginUsuario.size() > 0) {
            request.setAttribute("USUARIO", loginUsuario.get(0));
            request.setAttribute("MENSAJE_USUARIO", "Login Correcto");
        } else {
            request.setAttribute("USUARIO", null);
            request.setAttribute("MENSAJE_USUARIO", "Login Incorrecto");

        }
        return "/index.jsp";
    }

}
