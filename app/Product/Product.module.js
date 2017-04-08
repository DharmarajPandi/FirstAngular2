"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Product_component_1 = require("./Product.component");
var Product_Filter_Pipe_1 = require("./Product-Filter-Pipe");
var Product_Detail_component_1 = require("./Product_Detail.component");
var router_1 = require("@angular/router");
var Product_Gaurd_service_1 = require("./Product-Gaurd.service");
var Product_service_1 = require("./Product.service");
var Shared_module_1 = require("../shared/Shared.module");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [Shared_module_1.SharedModule,
            router_1.RouterModule.forChild([{ path: 'Products', component: Product_component_1.ProductComponent },
                { path: 'Product/:id', canActivate: [Product_Gaurd_service_1.ProductGaurdService], component: Product_Detail_component_1.ProductDetailComponent },
            ])],
        declarations: [Product_component_1.ProductComponent, Product_Filter_Pipe_1.ProductFilterPipe, Product_Detail_component_1.ProductDetailComponent],
        providers: [Product_Gaurd_service_1.ProductGaurdService, Product_service_1.ProductService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=Product.module.js.map