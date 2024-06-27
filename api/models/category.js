import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        trim:true
    },
    // parentCategory:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categories',
    // },
    // level: {
    //     type: Number,
    //     required: true,
    // },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    parentId:{
        true:String
    }
},{timestamps:true});

const Category = mongoose.model("Category", categorySchema);

export default Category;
