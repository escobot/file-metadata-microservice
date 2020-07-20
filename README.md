# File Metadata Microservice

## Objective

Build a full stack app that is functionally similar to this: https://aryanj-file-size.herokuapp.com/.

## Requirements

* User Story: I can submit a FormData object that includes a file upload.

* User Story: When I submit something, I will receive the file size in bytes within the JSON response

**Hint:** You may want to use this package: https://www.npmjs.com/package/multer

## Notes

Requirements:
- NodeJS
- NPM
- Docker (optional)

Run using NPM:
```bash
# install dependencies
npm install

# run app at localhost:3000
npm start
```

Run using Docker:
```bash
# build image
docker build -t pbgnz/file-metadata-microservice .

# run image
docker run -p 49160:3000 -d pbgnz/file-metadata-microservice
```

Usage
```bash
# submit webform image
http://localhost:3000

# post image via dataupload to
http://localhost:3000/upload
```