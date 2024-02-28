window.onload = () => {
    const inputFile = document.querySelector('#inputFile');
    
    inputFile.addEventListener('change', (event) => {
        fileUploaded(event)
    })
}

function fileUploaded(event) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file);

    reader.onload = () => {
        console.log(reader.result)
	}
}