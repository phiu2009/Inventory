package com.monbebe.inventory.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.monbebe.inventory.web.model.ProductCategory;

@RestController
public class ProductCategoryController {

	private List<ProductCategory> categoryList;
	
	@RequestMapping("/category/list")
	public Map<String,Object> listCategory() {
		if (categoryList == null){
			categoryList = new ArrayList<ProductCategory>();
			categoryList.add(new ProductCategory(1, "Vitamin"));
			categoryList.add(new ProductCategory(2, "Chia Seeds"));
		}
	    Map<String,Object> model = new HashMap<String,Object>();
	    model.put("categoryList", categoryList);
	    return model;
	}
	
	@RequestMapping(value="/category/add", method = RequestMethod.POST)
	public String addCategory(@RequestBody ProductCategory category) {
		categoryList.add(category);
		
	    return "success";
	}
	
	@RequestMapping(value="/category/save", method = RequestMethod.POST)
	public String saveCategory(@RequestBody ProductCategory category) {
		for (ProductCategory cat : categoryList){
			if (cat.getId() == category.getId()){
				cat.setName(category.getName());
			}
		}
		
	    return "success";
	}
	
	@RequestMapping(value="/category/delete/{id}", method = RequestMethod.DELETE)
	public String deleteCategory(@PathVariable("id") long id) {
		Iterator<ProductCategory> iter = categoryList.iterator();
		while(iter.hasNext()){
			ProductCategory cat = iter.next();
			if (cat.getId() == id){
				iter.remove();
			}
		}
		
	    return "success";
	}
}
