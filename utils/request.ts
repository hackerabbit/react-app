/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 16:18:01
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-06 18:20:32
 * @Description: 
 */
export async function post(url: string, data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function get(url: string, data = {}) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return await response.json();
}
