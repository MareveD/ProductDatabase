const express = require("express");
const router = express.Router();

const productControl= require("./productController");
const homeController = require("./homeController");


router.get("/product/new", productControl.getIndex);
router.post("/product/new", productControl.saveProduct);

router.get("/product/search", productControl.getSearch);
router.get("/product/search/find", productControl.findOneProduct);

router.get("/", productControl.allProducts);
router.get("/", productControl.getIndexSlash);
router.get("/index", productControl.redirectIndex);

router.get("/edit/:id", productControl.editProduct);
router.put("/edit/:id", productControl.update);

router.delete("/delete/:id", productControl.delete);

////////////////////////////////////////////////////////

router.get("/newuser/signup", homeController.getSignup);
router.post("/newuser/signup", homeController.addSignup);

router.get("/newuser/login", homeController.getLogin);
router.get("/newuser/login", homeController.postLogin);

////////////////////////////////////////////////////////

module.exports = router;