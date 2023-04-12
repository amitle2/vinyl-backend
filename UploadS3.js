import AWS from 'aws-sdk';

const UploadS3 = (file, fileName) => {
    return new Promise((resolve, reject) => {
        const s3 = new AWS.S3({
        region: 'eu-north-1',
        accessKeyId: 'AKIA5ZMHP2AY6SUTDCJN',
        secretAccessKey: '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'
      });
      
      const bucketName = 'vinyl-store';
      const body = new FileReader();
      body.readAsArrayBuffer(file);

      
    body.onload = () => {
        const params = {
          Bucket: bucketName,
          Key: fileName,
          Body: body.result,
          ContentType: file.type
        };
  
        s3.upload(params, (err, data) => {
          if (err) {
            console.error(`Error uploading image: ${err.message}`);
            reject(err);
          } else {
            console.log('Image uploaded successfully');
            const fileURL = data.Location;
            resolve(fileURL);
          }
        });
      };
  
      body.onerror = (err) => {
        console.error(`Error reading file: ${err.message}`);
        reject(err);
      };
    });
  };
  
  export default UploadS3;