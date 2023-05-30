// Función de validación del formulario
function validateForm(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Limpiar los mensajes de error
    document.getElementById('nameError').textContent = '';
    document.getElementById('priceError').textContent = '';
    document.getElementById('inventoryError').textContent = '';
  
    // Obtener los valores de los campos
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var inventory = document.getElementById('inventory').value;
  
    // Validar los campos
    if (name.trim() === '') {
      document.getElementById('nameError').textContent = 'Por favor, ingresa un nombre';
      return false;
    }
  
    if (price.trim() === '') {
      document.getElementById('priceError').textContent = 'Por favor, ingresa un precio.';
      return false;
    }
  
    if (isNaN(price) || price <= 0) {
      document.getElementById('priceError').textContent = 'Por favor, ingresa un precio válido.';
      return false;
    }
  
    if (inventory.trim() === '') {
      document.getElementById('inventoryError').textContent = 'Por favor, ingresa una cantidad de inventario.';
      return false;
    }
  
    if (isNaN(inventory) || inventory < 0) {
      document.getElementById('inventoryError').textContent = 'Por favor, ingresa una cantidad de inventario válida.';
      return false;
    }
  
    // Si todo es válido, se puede realizar alguna acción adicional aquí, como enviar el formulario al servidor
  
    alert('¡Producto creado!');
  
    return true;
  }
  
  // Agregar el evento 'submit' al formulario
  document.getElementById('productForm').addEventListener('submit', validateForm);
  
  function mostrarAlerta() {
    alert("¡Producto Creado!");
  }