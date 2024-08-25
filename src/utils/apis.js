import axios from "axios";

const getlogin = async (endPoint, payload) => {
  console.log(endPoint);

  try {
    const result = await axios.post(
      `https://my-backend-3-u35t.onrender.com/api/v1${endPoint}`,
      payload
    );

    return result;
  } catch (error) {
    console.log("API ERROR:", error);
    throw error;
  }
};

export { getlogin };
