const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    cityname: { type: String },
    temp: { type: Number },
    humidity:{ type: Number },
    temp_min:{ type: Number },
    temp_max:{ type: Number }, 
    sea_level:{ type: Number },
    ground_level:{ type: Number }
});
module.exports = mongoose.model("whether", productSchema);
