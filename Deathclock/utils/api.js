const API_URL = 'http://10.0.2.2:5000/api';

export const addUser = async user => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const getUser = async id => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};
