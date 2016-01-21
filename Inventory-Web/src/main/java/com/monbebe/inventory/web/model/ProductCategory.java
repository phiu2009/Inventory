package com.monbebe.inventory.web.model;

public class ProductCategory {

	private long id;
	private String name;
	
	public ProductCategory() {
		// TODO Auto-generated constructor stub
	}
	
	public ProductCategory(long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
