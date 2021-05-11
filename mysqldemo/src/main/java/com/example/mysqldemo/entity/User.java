package com.example.mysqldemo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private Integer id;
	@NotNull
	@NotBlank
	private String name;
	private Integer age;
	@Email(message="Valid Email")
	private String email;
	private long mobile;
	private Date dob;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		if(dob.compareTo(new Date()) > 0) {
			throw new IllegalArgumentException("DOB is invalid");
		}
		this.dob = dob;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}

}