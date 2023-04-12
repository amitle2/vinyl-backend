import xlsx from 'xlsx';

function ExcelProducts(inputArray) {

    const outputArray = [];

    inputArray.forEach(inputObject => {
        const outputObject = {
            "Name": inputObject.name,
            "Description": inputObject.description,
            "Price": inputObject.price,
            "Image": inputObject.image
        };
        outputArray.push(outputObject);
    });

    // Select the columns to include in the Excel table
    const columnsToInclude = ['Name', 'Description', 'Price', 'Image'];

    // Create a new workbook
    const workbook = xlsx.utils.book_new();

    // Select only the desired columns from the JSON data
    const filteredData = outputArray.map((row) => {
        return columnsToInclude.reduce((obj, key) => {
            obj[key] = row[key];
            return obj;
        }, {});
    });

    // Convert the filtered data to a worksheet
    const worksheet = xlsx.utils.json_to_sheet(filteredData);

    // Add the worksheet to the workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Save the workbook to a file
    const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    return buffer

}

export default ExcelProducts;