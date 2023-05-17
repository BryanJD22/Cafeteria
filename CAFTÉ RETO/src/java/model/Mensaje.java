package model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Mensaje {

    String mensaje;

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public static String toArrayJson(Mensaje mensaje) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();
        String resp = gson.toJson(mensaje);

        return resp;
    }

}
