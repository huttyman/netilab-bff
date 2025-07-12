exports.queryText = async (text) => {
  const payload = {
    text,
    top: 5,
    exact_weight: 1,
    near_weight: 1,
    exact_law_weight: 0.5,
    near_law_weight: 0.5,
  };
  console.log("payload",payload)
  console.log("payload string",JSON.stringify(payload))

  const response = await fetch('http://python-ai.com/text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
  console.log("response",response)

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`API request failed: ${response.status} ${message}`);
  }

  return response.json();
};

exports.getDocs = async () => {
  const response = await fetch('http://python-ai.com/docs');

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`API request failed: ${response.status} ${message}`);
  }

  return response.json();
};
