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

router.use("/category", categoryRoute);
router.use("/auth", authRoute);
router.use("/articales", articalesRoute);
router.use("/jobs", jopsRoute);
router.use("/user", userRoute);
router.use("/courses", coursesRoute);
// ! ////////////////////////////////////
router.use("/exams", examsRoute);
router.use("/certificate", certificateRoute);
router.use("/application", jopApplicationRoute);

module.exports = router;
