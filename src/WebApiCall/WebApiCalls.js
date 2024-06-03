const SMART_TOURISM_API_URL = `https://msc-project-backend-code.vercel.app/`;

// Create Header for api request
const createHeaders = (token) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  if (token) {
    headers.append("Authorization", `${token}`);
  }
  headers.append( 
    "Cookie",
    "__cfduid=d5b74235daa6f013fde0aba762ec288811620640208"
  );
  return headers;
};

// Make Api Request
const makeRequest = async (url, method, headers, body = null, textData = null) => {
  const requestOptions = {
    method,
    headers,
    body,
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await textData ? response.text() : response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
//Login
export const LoginUser = async (email, password) => {
  const headers = createHeaders();
  const body = new URLSearchParams();
  body.append("email", email);
  body.append("password", password);
  return makeRequest(`${SMART_TOURISM_API_URL}/api/auth/signin`, "POST", headers, body);
};

//SignUp
export const SignUpUser = async (firstname, lastname, email, password) => {
  const headers = createHeaders();
  const body = new URLSearchParams();
  body.append("firstname", firstname);
  body.append("lastname", lastname);
  body.append("language", "english");
  body.append("email", email);
  body.append("password", password);
  return makeRequest(`${SMART_TOURISM_API_URL}/api/auth/signup`, "POST", headers, body);
};

// CallOpenAi
export const CallOpenAi = async (prompt, token) => {
  const headers = createHeaders(token);
  const body = JSON.stringify({
    "prompt": prompt
  });
  console.log("here is the body after append--->",body)
  return makeRequest(`${SMART_TOURISM_API_URL}/api/ai/open-ai/es`, "POST", headers, body);
};