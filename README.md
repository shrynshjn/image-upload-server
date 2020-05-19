# Express - Server for uploading pictures

## POST pictures/profile

Post route to upload image  
the image is sent as 'profilepic' field of the form data  
the file extension should be either .png, .jpg, .jpeg  
the file is saved in public/images folder  
the images folder is publicly available and thus can be accessed from anywhere  
on successful upload returns the filename on the server as response  
the image can be accessed on {baseurl}/images/{filename}  
