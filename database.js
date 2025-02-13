async function loadDatabase(file) {
    try {
        const response = await fetch(`BASES/${file}`);
        if (!response.ok) throw new Error(`Error al cargar datos: ${response.status}`);
        
        const textData = await response.text();
        const data = JSON.parse(textData);
        
        console.log("Datos cargados:", data);
        displayData(data);
    } catch (error) {
        console.error("No se pudieron cargar los datos:", error);
    }
}

function displayData(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    
    data.forEach((item, index) => {
        const row = `<tr>
            <td>${item.Model || "N/A"}</td>
            <td>${item["Customer Name"] || "N/A"}</td>
            <td>${item.Territory || "N/A"}</td>
            <td>${item.Address1 || "N/A"}</td>
            <td>${item.City || "N/A"}</td>
            <td>${item["Date Sold"] || "N/A"}</td>
            <td>${item["Date Installed"] || "N/A"}</td>
            <td><button onclick="deleteRow(${index})">Eliminar</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function deleteRow(index) {
    const tableBody = document.getElementById("table-body");
    tableBody.deleteRow(index);
}
