import axios from "axios";

const emailStaff = async (formData) => {
  try {
    const response = await axios.post(url, formData);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

const emailClient = async (formData) => {
  try {
    const response = await axios.post(url, formData);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};


