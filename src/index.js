"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
var User_1 = require("./User");
var map = new CustomMap_1.CustomMap('#map');
var user = new User_1.User();
var comany = new Company_1.Company();
map.addMarker(user);
map.addMarker(comany);
