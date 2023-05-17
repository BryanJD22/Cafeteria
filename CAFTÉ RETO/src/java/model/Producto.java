package model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;

public class Producto {

    private int id;
    private String nombre;
    private String descripcion;
    private String tipo;
    private float precio;
    private String imagen;
    private int qty;

    public Producto() {
    }

    public Producto(int id, String nombre, String descripcion, String tipo, float precio, String imagen, int qty) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.precio = precio;
        this.imagen = imagen;
        this.qty = qty;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    
    public static String toArrayJSon(ArrayList<Producto> productos) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();
        String resp = gson.toJson(productos);

        return resp;
    }
}

/*
CREATE TABLE PRODUCTOS(
    id_producto INT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200),
    tipo VARCHAR(10) NOT NULL,
    precio FLOAT NOT NULL,
    imagen VARCHAR(100),
    qty INT,
    PRIMARY KEY (id_producto)
);

INSERT INTO PRODUCTOS (id_producto, nombre, descripcion, tipo, precio, imagen, qty) 
VALUES 
(1, 'American Coffee', 'Black coffee with hot water', 'Coffee', 0.25, 'img/imagenCafe1.png', 1),
(2, 'Espresso', 'Strong and concentrated black coffee', 'Coffee', 0.35, 'img/imagenCafe2.png', 1),
(3, 'Latte', 'Coffee with hot milk and foam', 'Coffee', 0.45, 'img/imagenCafe3.png', 1),
(4, 'Mocha', 'Coffee with milk, chocolate, and cream', 'Coffee', 0.55, 'img/imagenCafe4.png', 1),
(5, 'Cappuccino', 'Coffee with hot milk and foam', 'Coffee', 0.45, 'img/imagenCafe5.png', 1),
(6, 'Frappé', 'Coffee with ice, milk, and sugar', 'Coffee', 0.40, 'img/imagenCafe6.png', 1),
(7, 'Iced Coffee', 'Coffee with ice and milk', 'Coffee', 0.35, 'img/imagenCafe7.png', 1),
(8, 'Café au Lait', 'Coffee with hot milk', 'Coffee', 0.30, 'img/imagenCafe8.png', 1),
(9, 'Viennese Coffee', 'Coffee with cream and chocolate', 'Coffee', 0.60, 'img/imagenCafe9.png', 1),
(10, 'Irish Coffee', 'Coffee with whiskey and cream', 'Coffee', 0.70, 'img/imagenCafe10.png', 1),
(11, 'Green Tea', 'Delicate and refreshing tea made from unoxidized leaves', 'Tea', 0.25, 'img/imagenTe1.jpg', 1),
(12, 'Earl Grey', 'Black tea flavored with bergamot oil, known for its citrusy aroma', 'Tea', 0.35, 'img/imagenTe2.jpg', 1),
(13, 'Chamomile', 'Herbal tea made from dried chamomile flowers, known for its calming properties', 'Tea', 0.45, 'img/imagenTe3.jpg', 1),
(14, 'Oolong', 'Partially oxidized tea with a rich and complex flavor profile', 'Tea', 0.55, 'img/imagenTe4.jpg', 1),
(15, 'Peppermint', 'Herbal tea with a minty and refreshing taste', 'Tea', 0.45, 'img/imagenTe5.jpg', 1),
(16, 'Rooibos', 'Caffeine-free herbal tea from South Africa, known for its sweet and nutty flavor', 'Tea', 0.40, 'img/imagenTe6.jpg', 1),
(17, 'Hibiscus', 'Herbal tea made from the dried petals of hibiscus flowers, known for its tart and fruity taste', 'Tea', 0.35, 'img/imagenTe7.jpg', 1),
(18, 'Matcha', 'Vibrant green tea powder made from finely ground tea leaves, traditionally used in Japanese tea ceremonies', 'Tea', 0.30, 'img/imagenTe8.jpg', 1),
(19, 'White Tea', 'Subtle and delicate tea made from young tea leaves and buds', 'Tea', 0.60, 'img/imagenTe9.jpg', 1),
(20, 'Masala Chai', 'Spiced tea blend with a combination of black tea, milk, and aromatic spices like cinnamon, cardamom, and ginger', 'Tea', 0.70, 'img/imagenTe10.jpg', 1);
*/
