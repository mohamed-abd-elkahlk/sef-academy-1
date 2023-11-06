class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
  }
}

class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.quryString = queryString;
  }
  // pagination ->
  pagenate(countDocuments) {
    const page = this.quryString.page * 1 || 1;
    const limit = this.quryString.limit * 1 || 10;
    const skip = (page - 1) * limit;

    const pages = Math.ceil(countDocuments / limit); // 45/ 10 = 5

    const pagenation = { currenPage: page, limit, pages };

    // next page
    const endIndex = page * limit; //2*10 = 20
    if (endIndex < countDocuments) {
      pagenation.next = page + 1;
    }

    // prev page
    if (skip > 0) {
      pagenation.prev = page - 1;
    }
    this.pagenation = pagenation;
    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
    return this;
  }

  // sorting
  sort() {
    this.mongooseQuery = this.mongooseQuery.sort("createAt");
    return this;
  }

  limitFildes() {
    if (this.quryString.fildes) {
      const fild = this.quryString.fildes.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(fild);
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }
    return this;
  }

  // serching
  serch() {
    if (this.quryString.keyword) {
      const qury = {};
      qury.$or = [
        { title: { $regex: this.quryString.keyword, $options: "i" } },
        { content: { $regex: this.quryString.keyword, $options: "i" } },
        { status: { $regex: this.quryString.keyword, $options: "i" } },
        { name: { $regex: this.quryString.keyword, $options: "i" } },
        { status: { $regex: this.quryString.keyword, $options: "i" } },
      ];
      this.mongooseQuery = this.mongooseQuery.find(qury);
    }
    return this;
  }
}

module.exports = { ApiError, ApiFeatures };
