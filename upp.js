import UploadS3 from "./UploadS3.js";



const dbProducts = [
    {
        "name": "dsadas",
        "description": "sssdas",
        "price": "24.99",
        "image": "C:/Users/User/Downloads/IMG_5483.jpg"
    }
];

console.log(dbProducts);

UploadS3(dbProducts);
