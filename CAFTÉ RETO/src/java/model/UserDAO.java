package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UserDAO implements DAO<User, Integer> {

    private static final String SQL_INSERT = "INSERT INTO USR(USERNAME, MAIL, PASSWORD) VALUES";
    private static final String SQL_UPDATE = "UPDATE USR SET ";
    private static final String SQL_DELETE = " DELETE FROM USR WHERE ";
    private static final String SQL_FIND_ALL = "SELECT  *  FROM USR WHERE 1=1 ";

    private MotorSQL motorSql;

    public UserDAO() {
        this.motorSql = new MotorSQL();
    }

    @Override
    public int add(User entidad) {
        this.motorSql.connect();
        String sql = SQL_INSERT
                + "('" + entidad.getEmail() + " ' , "
                + " ' " + entidad.getPassword() + " ' )";
        int resp = this.motorSql.execute(sql);
        this.motorSql.disconnect();
        return resp;

    }

    @Override
    public int delete(Integer e) {
        this.motorSql.connect();
        String sql = SQL_DELETE + e;

        int resp = this.motorSql.execute(sql);
        this.motorSql.disconnect();
        return resp;
    }

    @Override
    public int update(User bean) {
        this.motorSql.connect();
        String sql = SQL_UPDATE;
        if (bean.getEmail() != null) {
            sql += "EMAIL='" + bean.getEmail() + "',";
        }
        if (bean.getPassword() != null) {
            sql += "PASS='" + bean.getPassword() + "',";
        }
        if (sql.endsWith(",")) {
            sql = sql.substring(0, sql.length() - 1);
        }
        sql += "WHERE ID_USUARIO=" + bean.getId();
        int resp = this.motorSql.execute(sql);
        this.motorSql.disconnect();
        return resp;
    }

    @Override
    public ArrayList<User> findAll(User bean) {
        ArrayList<User> lstUsuarios = new ArrayList<>();
        try {
            this.motorSql.connect();
            String sqlCabecera = SQL_FIND_ALL;
            String sqlCuerpo = "";
            if (bean != null) {
                if (bean.getId() > 0) {
                    sqlCuerpo = " AND ID_USUARIO=" + bean.getId();
                }
                if (bean.getEmail() != null && !bean.getEmail().equals("")) {
                    sqlCuerpo = " AND EMAIL='" + bean.getEmail() + "'";
                }
                if (bean.getPassword() != null && !bean.getPassword().equals("")) {
                    sqlCuerpo += " AND PASS='" + bean.getPassword() + "'";
                }

            }

            String sqlFinal = sqlCabecera + sqlCuerpo;
            ResultSet rs = this.motorSql.executeQuery(sqlFinal);

            rs.beforeFirst();
            while (rs.next()) {
                User usuario = new User();
                usuario.setId(rs.getInt(1));
                usuario.setEmail(rs.getString(2));
                usuario.setPassword(rs.getString(3));
                lstUsuarios.add(usuario);
            }
        } catch (Exception ex) {

        } finally {
            this.motorSql.disconnect();
        }

        return lstUsuarios;
    }

    public Mensaje login(String email, String pass) {
        Mensaje mensajes = new Mensaje();
        String SQL = SQL_FIND_ALL;
        String mensaje = "";
        boolean coincidencia = false;
        try {
            motorSql.connect();
            ResultSet rs = motorSql.executeQuery(SQL);

            while (rs.next()) {
                if (rs.getString(3).equals(email) && rs.getString(4).equals(pass)) {
                    coincidencia = true;
                    mensajes.setMensaje("Correcto");
                }
            }
            if (!coincidencia) {
                mensajes.setMensaje("Incorrecto");
            }

        } catch (SQLException e) {
            System.out.println(e);
            mensajes.setMensaje("Login fallido");
        } finally {
            motorSql.disconnect();
        }
        return mensajes;
    }

    public Mensaje register(String username, String emailr, String passr) {
        Mensaje mensajes = new Mensaje();

        String sql = SQL_FIND_ALL;
        String mensaje = "";
        int cantidad = 0;
        int filasAfectadas = 0;
        boolean coincidencia = false;

        try {
            motorSql.connect();

            ResultSet rs = motorSql.executeQuery(sql);

            while (rs.next()) {
                cantidad++;
                if (rs.getString(3).equals(emailr)) {
                    coincidencia = true;
                    mensajes.setMensaje("El usuario ya existe");
                }
            }
            if (!coincidencia) {

                sql = SQL_INSERT;
                sql += "(";
                sql += "'" + username + "', ";
                sql += "'" + emailr + "', ";
                sql += "'" + passr + "') ";
           

                filasAfectadas = motorSql.execute(sql);
                mensajes.setMensaje("Sign up correcto");

            }
        } catch (SQLException e) {
            System.out.println(e);
            mensajes.setMensaje("Sign up fallido");
        } finally {
            motorSql.disconnect();
        }
        return mensajes;
    }

}
