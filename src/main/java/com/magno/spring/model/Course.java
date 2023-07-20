package com.magno.spring.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//O plugin Lombok permite abreviar os métods getters, setters, toString e método construtor
//A anotação @Entity diz que esta classe pertence a uma tabela do banco de dados
@Getter
@Setter
@Data
@Entity

public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 200, nullable = false)
    private String category;

}
