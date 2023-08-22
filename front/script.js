  // Select your input type file and store it in a variable
  const input = document.getElementById('fileinput');

  // This will upload the file after having read it
  const upload = (formData) => {
    fetch('http://localhost:3333', { // Your POST endpoint
      method: 'POST',
      // headers: {
      //   // Content-Type may need to be completely **omitted**
      //   // or you may need something
      //   //"Content-Type": "You will perhaps need to define a content-type here"
      // },
      body: formData // This is your file object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => console.log(success) // Handle the success response object
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  };
  
  // Event handler executed when a file is selected
  const onSelectFile = () => {
    const formData = new FormData
    formData.append('description','asdsadsad')
    formData.append('images',input.files[0])
  
    upload(formData);
  }
  
  // Add a listener on your input
  // It will be triggered when a file will be selected
  input.addEventListener('change', onSelectFile, false);
  