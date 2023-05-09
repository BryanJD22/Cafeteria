package controller.action;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Pelicula;
import model.PeliculaDAO;

public class PeliculaAction implements IAction {

    @Override
    public String execute(HttpServletRequest request, HttpServletResponse response) {
        String cadDestino = "";
        String action = (String) request.getParameter("ACTION");
        String[] arrayAction = action.split("\\.");
        switch (arrayAction[1]) {
            case "FIND_ALL":
                cadDestino = findAll(request, response);
                break;
            case "FILTER":
                cadDestino = filter(request, response, arrayAction[2]);
        }
        return cadDestino;
    }

    private String findAll(HttpServletRequest request, HttpServletResponse response) {
        PeliculaDAO peliculaDao = new PeliculaDAO();
        ArrayList<Pelicula> peliculas = peliculaDao.findAll(null);
        return Pelicula.toArrayJSon(peliculas);
    }

    private String filter(HttpServletRequest request, HttpServletResponse response, String tipo) {
        PeliculaDAO peliculaDao = new PeliculaDAO();
        ArrayList<Pelicula> peliculas = peliculaDao.filterType(null, tipo);
        return Pelicula.toArrayJSon(peliculas);
    }
}
