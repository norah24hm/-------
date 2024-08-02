// Add an event listener to the button to wait for clicks
document.getElementById("ask-btn").addEventListener("click", function () {
    sendToConverseAI(); // Call the sendToConverseAI function when the button is clicked
  });

  // Function to handle the user's input and the API response
  function sendToConverseAI() {
    let value = document.getElementById("query-input").value;

    // Create a JSON object to send to the API
    let body = {
      // Specify the model to use
      "model": "gpt-4o-mini",
      // Specify the user's input as a message
      "messages": [{ "role": "user", "content": value}],
      "temperature": 0.7
    };
    // Set the API endpoint and authentication token (key)
    let headers = {
      Authorization: "Bearer YOUR openai API key "
  };
  // Use Axios to make a POST request to the API
  axios.post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {
      // Extract the generated response from the API response
      let reply = response.data.choices[0].message.content;
      // Update the response div with the generated response to be displayed
      document.getElementById("response-content").textContent = reply;
    });
  }