exports.queryText = async (text) => {
  const payload = {
    text,
    top: 5,
    exact_weight: 1,
    near_weight: 1,
    exact_law_weight: 0.5,
    near_law_weight: 0.5,
  };

  const response = await fetch('http://python-ai/text/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`API request failed: ${response.status} ${message}`);
  }

  return response.json();
};
