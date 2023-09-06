const addLocalStorage = () =>{
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const ValueInput = document.getElementById('storage-value')
    const value = ValueInput.value;

    if (id && value) {
        localStorage.setItem(id, value)   
    }
    idInput.value = ''
    ValueInput.value = ''
}