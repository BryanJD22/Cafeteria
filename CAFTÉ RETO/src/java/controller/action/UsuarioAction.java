package controller.action;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Mensaje;
import model.UserDAO;
import model.User;

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
            case "REGISTER":
                pagDestino = register(request, response);
                break;
            case "LOGIN":
                pagDestino = login(request, response);
                break;
        }
        return pagDestino;
    }

    private String findAll(HttpServletRequest request, HttpServletResponse response) {

        UserDAO usuarioDAO = new UserDAO();
        ArrayList<User> lstUsuarios = usuarioDAO.findAll(null);

        request.setAttribute("LISTA_USUARIOS", lstUsuarios);

        return "/index.jsp";
    }

    private String login(HttpServletRequest request,
            HttpServletResponse response) {

        UserDAO usuarioDAO = new UserDAO();
        Mensaje mensaje = usuarioDAO.login(request.getParameter("EMAIL"),request.getParameter("PASS"));
        
        return Mensaje.toArrayJson(mensaje);
    }
       private String register(HttpServletRequest request,
            HttpServletResponse response) {

        UserDAO usuarioDAO = new UserDAO();
        Mensaje mensaje = usuarioDAO.register(request.getParameter("USERNAME"),request.getParameter("EMAILR"),request.getParameter("PASSR"));
        
        return Mensaje.toArrayJson(mensaje);
    }

}
