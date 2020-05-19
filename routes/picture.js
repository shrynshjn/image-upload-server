const router = require('express').Router();
const multer = require('multer');
const validExtensions = ['.png', '.jpg', '.jpeg']
const path = require('path');
const upload = multer({
    dest: 'public/images', 
    fileFilter: (req, file, callback) => {
        console.log(file);
        var ext = path.extname(file.originalname);
        if (!validExtensions.includes(ext.toLowerCase())) {
           return callback(new Error('Only Images are allowed'));
        } else {
            callback(null, true);
        }
    },
    limits: {
        fileSize: 1024*1024 * 2 // 2 MB file size is given in bytes
    }
}) 
// profilepic is the name of the field that has the file
router.route('/profile')
.post(upload.single('profilepic'),  (req, res) => {
    console.log(req.body);
    if (!req.file) {
        res.status(400)
            .json({
                success: false,
                message: 'Could not save profile picture'
            })
    } else {
        res.status(200)
            .json({
                success: true,
                message: 'Uploaded profile picture',
                data: {filename: req.file.filename}
            })
    }
});


module.exports = router;


