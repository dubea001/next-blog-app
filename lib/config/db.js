import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://dubeastudio:Dubeastudio58257626@cluster0.fuh8dtx.mongodb.net/blog-app')
  console.log('DB Connected')
}