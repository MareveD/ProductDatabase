/*-------------------*/
const express = require("express");
const router = express.Router();
const homeController = require("./homeController");
const userController = require("./userController");
const flashController = require("./flashController");

/*-------------------*/



/*-------------------*/
router.get("/product/new", homeController.getIndex);
router.post("/product/new", homeController.saveProduct);
router.get("/product/search", homeController.getSearch);
router.get("/product/search/find", homeController.findOneProduct);

router.get("/", homeController.allProducts);
router.get("/", homeController.getIndexSlash);
router.get("/index", homeController.redirectIndex);
router.get("/home", homeController.getUnAuthenticated);

router.get("/edit/:id", homeController.editProduct);
router.put("/edit/:id", homeController.update);

router.delete("/delete/:id", homeController.delete);
/*-------------------*/



/*-------------------*/
// Signup
router.get("/signup", userController.new); 
router.post("/signup/create", userController.saveUser, userController.redirectView, userController.authenticate1);  

// Signin
router.get("/login", userController.login); 
router.post("/login", flashController.flashMessageWithAuthenticate);

// Logout
router.get("/logout", (req, res) =>{
    req.logout();
    res.redirect("/login");
});
/*-------------------*/



/*-------------------*/
module.exports = router;
/*-------------------*/