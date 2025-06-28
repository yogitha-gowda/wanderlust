const mongoose = require("mongoose");
const Listing = require("./models/listing");
const User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/airbnb_project")
.then(async () => {
    const user = await User.findOne();
    if (!user) {
        console.log("No user found. Please register a user first by signing up in the app.");
        return mongoose.connection.close();
    }

    await Listing.updateMany({}, { owner: user._id });
    console.log("All listings updated with owner:", user.username);
    mongoose.connection.close();
});
