import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr_clone");

  try {
    const response = await axios.post(
      import.meta.env.VITE_CLOUDINARY_API,
      data
    );
    console.log(response);
    const { url } = response.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
