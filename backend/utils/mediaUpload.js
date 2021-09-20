const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;


class MediaUpload {
  static config() {
    return cloudinary.config({
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET
    });
  }

  /**
   * Uploads a file to Cloudinary
   * @param {PathLike} file Absolute path of file to upload
   * @returns 
   */

  static async uploadFile(file) {
    this.config();

    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        file,
        { timeout: 120000, resource_type: 'auto' },
        (error, result) => {
          console.log(result);
          if (error) {
            console.error('Cloudinary error:', error);
            reject(error);
          } else {
            resolve({ url: result.secure_url, cloudinaryId: result.public_id, size: result.bytes });
          }
        }
      );
    });
  }

  /**
   * Deletes a file from Cloudinary
   * @param {String} publicId The public id of image to delete
   * @returns 
   */
  static async deleteFromCloudinary(publicId) {

    this.config();
    const result = await cloudinary.uploader.destroy(publicId);
    return result;

  }

  /**
   * Generates a zip file from files on Cloudinary
   * @param {String[]} publicIds An array of Cloudinary public ids
   */
  static async generateZip(publicIds) {

  }
}

module.exports = MediaUpload;
