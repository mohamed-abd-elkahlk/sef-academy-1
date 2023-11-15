const router = require("express").Router();

const categoryRoute = require("./category.routes");
const authRoute = require("./auth.routes");
const articalesRoute = require("./articales.routes");
const jopsRoute = require("./jops.routes");
const userRoute = require("./user.routes");
const coursesRoute = require("./courses.routes");
const examsRoute = require("./exam.routes");
const certificateRoute = require("./certificate.routes");
const jopApplicationRoute = require("./applayedJobs.routes");

router.use("/category", categoryRoute); //? cheked
router.use("/auth", authRoute); //? cheked
router.use("/articles", articalesRoute); //? cheked
router.use("/jobs", jopsRoute); //? cheked
router.use("/user", userRoute); //? cheked
router.use("/courses", coursesRoute); //? cheked
// ! ////////////////////////////////////
router.use("/exams", examsRoute); //? cheked
router.use("/certificate", certificateRoute);
router.use("/application", jopApplicationRoute); //? cheked

module.exports = router;
