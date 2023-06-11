// Función de validación del formulario
function validateForm(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Limpiar los mensajes de error
    document.getElementById('nameError').textContent = '';
    document.getElementById('priceError').textContent = '';
    document.getElementById('inventoryError').textContent = '';
  
    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const inventory = document.getElementById('inventory').value;

    let result = true
  
    // Validar los campos
    if (name.trim() === '') {
      document.getElementById('nameError').textContent = 'Por favor, ingresa un nombre';
      result = false;
    }
  
    if (price.trim() === '') {
      document.getElementById('priceError').textContent = 'Por favor, ingresa un precio.';
      result = false;
    }
  
    if (isNaN(price) || price <= 0) {
      document.getElementById('priceError').textContent = 'Por favor, ingresa un precio válido.';
      result = false;
    }
  
    if (inventory.trim() === '') {
      document.getElementById('inventoryError').textContent = 'Por favor, ingresa una cantidad de inventario.';
      result = false;
    }
  
    if (isNaN(inventory) || inventory < 0) {
      document.getElementById('inventoryError').textContent = 'Por favor, ingresa una cantidad de inventario válida.';
      result = false;
    }
    // Si todo es válido, se puede realizar alguna acción adicional aquí, como enviar el formulario al servidor
    
    if (result) {
      alert('¡Producto creado!');
    }
  
    return result;
  }
  
  // Agregar el evento 'submit' al formulario
  document.getElementById('productForm').addEventListener('submit', validateForm);
  
  function mostrarAlerta() {
    alert("¡Producto añadido!");
  }