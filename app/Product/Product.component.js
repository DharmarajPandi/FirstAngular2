"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Product_service_1 = require("./Product.service");
var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        this.pageTitle = "Product List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        console.log('inside');
    }
    ProductComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (resp) { return _this.products = resp; }, function (error) { return _this.errorMsg = error; });
    };
    ProductComponent.prototype.ParentFunc = function (data) {
        alert(data);
        console.log(data);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'My-Product',
        moduleId: module.id,
        templateUrl: 'Product.component.html',
        styleUrls: ['Product.component.css']
    }),
    __metadata("design:paramtypes", [Product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=Product.component.js.map