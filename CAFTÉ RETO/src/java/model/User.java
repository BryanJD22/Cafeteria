package model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class User {

    private int id;
    private String username;
    private String email;
    private String password;
    private String first_name;
    private String last_name;
    private int telephone;
    private String address;
    private String city;

    public User() {
    }

    public User(int id, String username, String email, String password, String first_name, String last_name, int telephone, String address, String city) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.telephone = telephone;
        this.address = address;
        this.city = city;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getTelephone() {
        return telephone;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + ", first_name=" + first_name + ", last_name=" + last_name + ", telephone=" + telephone + ", address=" + address + ", city=" + city + '}';
    }

    public static String toArrayJson(User user){
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        
        Gson gson = builder.create();
        String resp = gson.toJson(user);
        
        return resp;
    }
}
