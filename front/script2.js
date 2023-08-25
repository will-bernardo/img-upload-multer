  // Select your input type file and store it in a variable
  const input = document.getElementById('fileinput');

  // This will upload the file after having read it
  async function upload (formData){
    const response = await fetch('http://localhost:3333', { // Your POST endpoint
      method: 'POST',
      body: formData // This is your file object
    })

    const data = await response.json()

    console.log(data)
    //console.log(`http://localhost:3333/images/${data.Image[0].path}`)
    
    const image = document.querySelector('#image')
    image.setAttribute('src',`http://localhost:3333/images/${data}`)
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
  