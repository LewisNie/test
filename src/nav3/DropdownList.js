import React, { Component } from 'react';
import products from '../data.json';
import './DropdownList.css'

class DropdownList extends Component {
    constructor() {
        super();

        this.categories = {
            "dog": [{ "name": " ", "value": null }, { "name": "Flea & Tick Supplies", "value": "0" }, { "name": "Joint Supplments", "value": "1" }, { "name": "Dental Products", "value": "2" }],
            "cat": [{ "name": " ", "value": null }, { "name": "Cat Toys", "value": "0" }, { "name": "Cat Food", "value": "1" }, { "name": "Cat Treats & Chews", "value": "2" }]
        }

        this.subCategories = {
            "dog_303": [{ "name": " ", "value": null }, { "name": "Topical", "value": "0" }, { "name": "Oral Treatment & Supplement", "value": "1" }, { "name": "Collars", "value": "2" }],
            "dog_304": [{ "name": " ", "value": null }, { "name": "Hip & Joint Maintenance", "value": "0" }, { "name": "Extra Strength Joint Support", "value": "1" }, { "name": "Senior Joint Supplements", "value": "2" }],
            "dog_305": [{ "name": " ", "value": null }, { "name": "Dental Water Additives", "value": "2" }, { "name": "Other Dental Products", "value": "1" }, { "name": "Dental Supplements", "value": "0" }],
            "cat_332": [{ "name": " ", "value": null }, { "name": "Cat Balls", "value": "0" }, { "name": "Catnip Toys", "value": "1" }, { "name": "Cat Scratchers", "value": "2" }],
            "cat_333": [{ "name": " ", "value": null }, { "name": "Dry Cat Food", "value": "0" }, { "name": "Freeze Dried Cat Food", "value": "1" }, { "name": "Kitten Milk Replacer", "value": "2" }],
            "cat_334": [{ "name": " ", "value": null }, { "name": "Catnip Treats", "value": "0" }, { "name": "Dental Cat Treats", "value": "1" }, { "name": "Freeze Dried Cat Treats", "value": "2" }]
        }
    }

    onTypeChangeHandler(type) {
        let { filter = {} } = this.props;
        filter.category = "";
        filter.type = type;
        filter.subCategory="";
        filter.sortedBy = "";

        if (this.props.onChange) {
            this.props.onChange(filter);
        }
    }

    onCategoryChangeHandler = event => {
        let { filter = {} } = this.props;
        filter.category = event.target.value;

        if (this.props.onChange) {
            this.props.onChange(filter);
        }
    }

    onSubCategoryChangeHandler = event => {
        let { filter = {} } = this.props;
        filter.subCategory = event.target.value;

        if (this.props.onChange) {
            this.props.onChange(filter);
        }
    }

    onSortByChangeHandler = event => {
        let { filter = {} } = this.props;
        filter.sortedBy = event.target.value;
        if(this.props.onChange){
            this.props.onChange(filter);
        }
    }

    resetForm = () => {
        let { filter = {} } = this.props;
        filter.category = "";
        filter.subCategory = "";
        filter.sortedBy = "";

        if (this.props.onChange) {
            this.props.onChange(filter);
        }
    }

    renderCategory() {
        let { filter = { type: 'dog' } } = this.props;
        return (
            <select style={{ marginRight: "15px", height: "30px", width: "150px", fontSize: "12px", color: "gray" }} value={filter.category} onChange={this.onCategoryChangeHandler} >
                {filter.type === 'dog' ?
                    this.categories["dog"].map(c => <option value={c.value}> {c.name}</option>)
                    :
                    this.categories["cat"].map(c => <option value={c.value}> {c.name}</option>)
                }
            </select>
        )
    }

    renderSubCategory() {
        let { filter = { type: 'dog', category: '' } } = this.props;
        return (
            <select style={{ marginRight: "15px", height: "30px", width: "150px", fontSize: "12px", color: "gray" }}>
                {
                    !filter.category
                        ?
                        null :
                        (this.subCategories[filter.type + "_" + filter.category] || []).map(s => <option value={s.value}> {s.name}</option>)
                }

            </select>
        )

    }

    renderSortBy() {
        let { filter = { sortedBy: "" } } = this.props;
        return (
            <select style={{ marginRight: "15px", height: "30px", width: "150px", fontSize: "12px", color: "gray" }} value={filter.sortedBy} onChange={this.onSortByChangeHandler} >
                <option value=""> </option>
                <option value="name"> name </option>
                <option value="price"> price </option>
            </select>
        )
    }


    render() {
        return (
            <div style={{ display: "inline-block", marginTop: "20px", marginBottom: "20px" }}>
                <button style={{ marginRight: "15px", border: "none" }} value="" onClick={this.onTypeChangeHandler.bind(this, 'dog')}>Dog</button>
                <button style={{ marginRight: "15px", border: "none" }} value="" onClick={this.onTypeChangeHandler.bind(this, 'cat')}>Cat</button>

                {this.renderCategory()}
                {this.renderSubCategory()}
                {this.renderSortBy()}

                <input type="reset" value="Reset" style={{ backgroundColor: "#D41728", height: "30px", fontSize: "12px", marginRight: "80px" }} onClick={this.resetForm.bind(this)}></input>
                <span><strong>{products.length} </strong>products</span>
            </div>
        );
    }


}

export default DropdownList;