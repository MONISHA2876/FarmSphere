import express from "express";
import axios from "axios";
import fs from "fs";

// const image = fs.readFileSync("YOUR_IMAGE.jpg", {
//     encoding: "base64"
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// axios({
//     method: "POST",
//     url: "https://serverless.roboflow.com/plant-disease-detection-v2-2nclk/1",
//     params: {
//         api_key: "API_KEY"
//     },
//     data: image,
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// })
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error.message);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
