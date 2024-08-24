function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
const csvData = [
    { "SR.": "1", "Fleet": "109062-1", "Type": "AIR COMPRESSOR", "Category": "Plant Light", "Make": "INGERSOLL-RAND", "Model": "P450SCA", "Capacity": "450 CFM", "Year": "1982", "Chass No": "129070-U82-947" },
    { "SR.": "2", "Fleet": "131343-2", "Type": "AMBULANCE", "Category": "Transport Light", "Make": "HYUNDAI", "Model": "TQ H-1 GLGSL", "Capacity": "1 STRET", "Year": "2011", "Chass No": "129070-U82-948" },
    { "SR.": "3", "Fleet": "116356-3", "Type": "ANALYTICAL INSTRUMENT", "Category": "Plant Light", "Make": "SPECTRO", "Model": "TXC01", "Capacity": "N/A", "Year": "2003", "Chass No": "129070-U82-949" },
    { "SR.": "4", "Fleet": "116515-4", "Type": "ARTICULATING BOOM LIFT", "Category": "Plant Light", "Make": "JLG", "Model": "600AJ", "Capacity": "230 KG", "Year": "2004", "Chass No": "129070-U82-950" },
    { "SR.": "5", "Fleet": "136967-5", "Type": "BUS", "Category": "Transport Light", "Make": "ASHOK LEYLAND", "Model": "FALCON", "Capacity": "56 SEATS", "Year": "2014", "Chass No": "129070-U82-951" },
    { "SR.": "6", "Fleet": "136996-6", "Type": "BUS", "Category": "Transport Light", "Make": "ASHOK LEYLAND", "Model": "FALCON", "Capacity": "56 SEATS", "Year": "2014", "Chass No": "129070-U82-952" },
    { "SR.": "7", "Fleet": "118172-7", "Type": "BUS - MINI", "Category": "Transport Light", "Make": "TOYOTA", "Model": "HIACE", "Capacity": "15 SEATS", "Year": "2006", "Chass No": "129070-U82-953" },
    { "SR.": "8", "Fleet": "116387-8", "Type": "COMPACTOR PLATE", "Category": "Plant Light", "Make": "AMMAN", "Model": "AVH7010", "Capacity": "620 KG", "Year": "2002", "Chass No": "129070-U82-954" },
    { "SR.": "9", "Fleet": "140823-9", "Type": "CRANE INDUSTRIAL TRUCK MTD", "Category": "Plant Heavy", "Make": "SANY", "Model": "STC250", "Capacity": "25 T", "Year": "2015", "Chass No": "129070-U82-955" },
    { "SR.": "10", "Fleet": "114483-10", "Type": "CRANE ROUGH TERRAIN", "Category": "Plant Heavy", "Make": "TADANO", "Model": "TR-500 EX", "Capacity": "50 T", "Year": "1998", "Chass No": "129070-U82-956" },
    { "SR.": "11", "Fleet": "123707-11", "Type": "CRANE TOWER", "Category": "Plant Heavy", "Make": "POTAIN", "Model": "E10/14C", "Capacity": "1.4 T", "Year": "1988", "Chass No": "129070-U82-957" },
    { "SR.": "12", "Fleet": "159212-12", "Type": "EXCAVATOR CRAWLER HYDRAULIC", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "320", "Capacity": "-", "Year": "2024", "Chass No": "129070-U82-958" },
    { "SR.": "13", "Fleet": "120624-13", "Type": "FLOOD LIGHT", "Category": "Plant Light", "Make": "LOMBARDINI", "Model": "LDW1003", "Capacity": "8.8 KW", "Year": "2006", "Chass No": "129070-U82-959" },
    { "SR.": "14", "Fleet": "156264-14", "Type": "FORKLIFT", "Category": "Plant Light", "Make": "DOOSAN", "Model": "D70S-5", "Capacity": "7000 KG", "Year": "2023", "Chass No": "129070-U82-960" },
    { "SR.": "15", "Fleet": "155223-15", "Type": "GENERATOR - DIESEL ENGINE", "Category": "Plant Light", "Make": "PERKINS", "Model": "KMGP-75", "Capacity": "58 KW", "Year": "2022", "Chass No": "129070-U82-961" },
    { "SR.": "16", "Fleet": "125807-16", "Type": "HAMMER - VIBRATORY", "Category": "Plant Light", "Make": "ICE", "Model": "ICE416L", "Capacity": "360 KN", "Year": "2008", "Chass No": "129070-U82-962" },
    { "SR.": "17", "Fleet": "157936-17", "Type": "INTERNAL LINE-UP CLAMP (PNEUMATIC)", "Category": "Plant Light", "Make": "OPUS", "Model": "ILC8", "Capacity": "8 IN", "Year": "2024", "Chass No": "129070-U82-963" },
    { "SR.": "18", "Fleet": "150543-18", "Type": "MANDREL - WEDGE (PNEUMATIC)", "Category": "Plant Light", "Make": "VIETZ", "Model": "VMA 46-48", "Capacity": "46-48 IN", "Year": "2020", "Chass No": "129070-U82-964" },
    { "SR.": "19", "Fleet": "158035-19", "Type": "MOTOR GRADER", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "140 GC", "Capacity": "14 FT", "Year": "2023", "Chass No": "129070-U82-965" },
    { "SR.": "20", "Fleet": "140124-20", "Type": "PICK-UP S/CABIN", "Category": "Transport Light", "Make": "TOYOTA", "Model": "HILUX", "Capacity": "3 SEATS", "Year": "2014", "Chass No": "129070-U82-966" },
    { "SR.": "21", "Fleet": "140132-21", "Type": "PICK-UP S/CABIN", "Category": "Transport Light", "Make": "TOYOTA", "Model": "HILUX", "Capacity": "3 SEATS", "Year": "2014", "Chass No": "129070-U82-967" },
    { "SR.": "22", "Fleet": "150535-22", "Type": "PIPE BENDING MACHINE", "Category": "Plant Heavy", "Make": "VIETZ", "Model": "BM 36-48", "Capacity": "36-48 IN", "Year": "2018", "Chass No": "129070-U82-968" },
    { "SR.": "23", "Fleet": "138384-23", "Type": "PIPE FACING MACHINE", "Category": "Plant Light", "Make": "SERIMAX", "Model": "PFM 32-64", "Capacity": "32-64 IN", "Year": "2014", "Chass No": "129070-U82-969" },
    { "SR.": "24", "Fleet": "132392-24", "Type": "PIPE ROLI CRADLE", "Category": "Plant Light", "Make": "VIETZ", "Model": "-", "Capacity": "12-24 IN", "Year": "2011", "Chass No": "129070-U82-970" },
    { "SR.": "25", "Fleet": "146883-25", "Type": "POWER TONG MACHINE", "Category": "Plant Light", "Make": "ECKEL", "Model": "13-3/8 STD", "Capacity": "4-13 3/8 IN", "Year": "2011", "Chass No": "129070-U82-971" },
    { "SR.": "26", "Fleet": "141264-26", "Type": "ROCK BREAKER - HYDRAULIC", "Category": "Plant Light", "Make": "FURUKAWA", "Model": "FXJ-475", "Capacity": "1630 KG", "Year": "2015", "Chass No": "129070-U82-972" },
    { "SR.": "27", "Fleet": "158403-27", "Type": "ROLLER VIBRATING - RUBBER & STEEL", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "CS11GC", "Capacity": "11235 KG", "Year": "2023", "Chass No": "129070-U82-973" },
    { "SR.": "28", "Fleet": "125596-28", "Type": "ROLLER VIBRATING - STEEL", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "CB14", "Capacity": "1840 KG", "Year": "2008", "Chass No": "129070-U82-974" },
    { "SR.": "29", "Fleet": "139135-29", "Type": "SALOON CAR", "Category": "Transport Light", "Make": "TOYOTA", "Model": "COROLLA XLI", "Capacity": "5 SEATS", "Year": "2015", "Chass No": "129070-U82-975" },
    { "SR.": "30", "Fleet": "135723-30", "Type": "SERVICING & LUBRICATING UNIT", "Category": "Plant Light", "Make": "C.A.T. CO.", "Model": "-", "Capacity": "-", "Year": "2014", "Chass No": "129070-U82-976" },
    { "SR.": "31", "Fleet": "148224-31", "Type": "SKID STEER LOADER", "Category": "Plant Light", "Make": "BOBCAT", "Model": "S510", "Capacity": "810 KG", "Year": "2019", "Chass No": "129070-U82-977" },
    { "SR.": "32", "Fleet": "148383-32", "Type": "SKIDDER", "Category": "Plant Light", "Make": "MASSEY FERGUSON", "Model": "MF440", "Capacity": "3040 KG", "Year": "2015", "Chass No": "129070-U82-978" },
    { "SR.": "33", "Fleet": "158583-33", "Type": "STATION WAGON LWB", "Category": "Transport Light", "Make": "TOYOTA", "Model": "FORTUNER VX1", "Capacity": "7 SEATS", "Year": "2024", "Chass No": "129070-U82-979" },
    { "SR.": "34", "Fleet": "158596-34", "Type": "STATION WAGON LWB", "Category": "Transport Light", "Make": "TOYOTA", "Model": "FORTUNER VX1", "Capacity": "7 SEATS", "Year": "2024", "Chass No": "129070-U82-980" },
    { "SR.": "35", "Fleet": "121847-35", "Type": "TELEHANDLER", "Category": "Plant Light", "Make": "BOBCAT", "Model": "T40170", "Capacity": "4000 KG", "Year": "2007", "Chass No": "129070-U82-981" },
    { "SR.": "36", "Fleet": "156303-36", "Type": "TRACTIVE UNIT", "Category": "Transport Heavy", "Make": "MERCEDES-BENZ", "Model": "ACTROS 3342S36", "Capacity": "33 TGVW", "Year": "2023", "Chass No": "129070-U82-982" },
    { "SR.": "39", "Fleet": "158283-39", "Type": "TRACTOR BACKHOE/LOADER", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "426", "Capacity": "1.05 CUM", "Year": "2023", "Chass No": "129070-U82-983" },
    { "SR.": "40", "Fleet": "158432-40", "Type": "TRACTOR DOZER CRAWLER", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "D8", "Capacity": "38834 KG", "Year": "2024", "Chass No": "129070-U82-984" },
    { "SR.": "41", "Fleet": "156752-41", "Type": "TRACTOR PIPE LAYER", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "72H", "Capacity": "28 T", "Year": "2013", "Chass No": "129070-U82-985" },
    { "SR.": "42", "Fleet": "154983-42", "Type": "TRACTOR PIPE WELDING", "Category": "Plant Heavy", "Make": "VIETZ", "Model": "ARCOTRAC 1100", "Capacity": "11500 KG", "Year": "2022", "Chass No": "129070-U82-986" },
    { "SR.": "43", "Fleet": "158356-43", "Type": "TRACTOR SHOVEL WHEELED", "Category": "Plant Heavy", "Make": "CATERPILLAR", "Model": "950 GC", "Capacity": "18676 KG", "Year": "2023", "Chass No": "129070-U82-987" },
    { "SR.": "44", "Fleet": "136795-44", "Type": "TRAILER - PIPE DOLLY", "Category": "Transport Heavy", "Make": "AL-RAJHI", "Model": "-", "Capacity": "50 T", "Year": "2014", "Chass No": "129070-U82-988" },
    { "SR.": "45", "Fleet": "135984-45", "Type": "TRAILER - SEWAGE TANK", "Category": "Transport Heavy", "Make": "AL-RAJHI", "Model": "-", "Capacity": "8000 GAL", "Year": "2014", "Chass No": "129070-U82-989" },
    { "SR.": "46", "Fleet": "107086-46", "Type": "TRAILER CRUDE OIL", "Category": "Transport Heavy", "Make": "BLUMHARDT", "Model": "-", "Capacity": "6000 GAL", "Year": "1978", "Chass No": "129070-U82-990" },
    { "SR.": "47", "Fleet": "154464-47", "Type": "TRAILER LOW BED", "Category": "Transport Heavy", "Make": "LOADKING", "Model": "6S", "Capacity": "150 T", "Year": "2022", "Chass No": "129070-U82-991" },
    { "SR.": "48", "Fleet": "134956-48", "Type": "TRAILER WATER TANKER", "Category": "Transport Heavy", "Make": "AL-JEATHEN", "Model": "101 D", "Capacity": "8450 GAL", "Year": "2003", "Chass No": "129070-U82-992" },
    { "SR.": "49", "Fleet": "134964-49", "Type": "TRAILER WATER TANKER", "Category": "Transport Heavy", "Make": "AL-JEATHEN", "Model": "101 D", "Capacity": "8450 GAL", "Year": "2003", "Chass No": "129070-U82-993" },
    {
        "SR.": "50", "Fleet": "156603-50", "Type": "TRUCK - LOAD CARRYING", "Category": "Transport Heavy", "Make": "MERCEDES-BENZ", "Model": "AROCS 3342/45", "Capacity": "33 TGVW", "Year": "2023",
    },
    // Add the rest of the CSV data here
];



// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function () {
    const searchValue = document.getElementById('searchFleet').value.toUpperCase();
    const fleetResults = document.getElementById('fleetResults');

    // Clear previous results
    fleetResults.innerHTML = '';

    // Check if search value is provided
    if (searchValue) {
        // Filter data based on search value
        const filteredData = csvData.filter(fleet => fleet.Fleet.toUpperCase().includes(searchValue));

        if (filteredData.length > 0) {
            let results = `
                <table>
                    <thead>
                        <tr>
                            <th>SR.</th>
                            <th>Fleet</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Capacity</th>
                            <th>Year</th>
                            <th>Chass No</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            filteredData.forEach(item => {
                results += `
                    <tr>
                        <td>${item["SR."]}</td>
                        <td>${item.Fleet}</td>
                        <td>${item.Type}</td>
                        <td>${item.Category}</td>
                        <td>${item.Make}</td>
                        <td>${item.Model}</td>
                        <td>${item.Capacity}</td>
                        <td>${item.Year}</td>
                        <td>${item["Chass No"]}</td>
                    </tr>
                `;
            });

            results += `
                    </tbody>
                </table>
            `;

            fleetResults.innerHTML = results;

            // Show table after search
            fleetResults.querySelector('table').style.display = 'table';
        } else {
            fleetResults.innerHTML = '<p>No results found.</p>';
        }
    } else {
        // If no search value, keep table hidden
        fleetResults.innerHTML = '<p>Please enter a fleet number to search.</p>';
    }
});
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const documentList = document.getElementById('documentList');

// Prevent default behavior for drag and drop events
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('dragging');
    });
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('dragging');
    });
});

dropZone.addEventListener('drop', e => {
    const files = e.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener('change', e => {
    const files = e.target.files;
    handleFiles(files);
});

uploadButton.addEventListener('click', () => {
    fileInput.click();
});

function handleFiles(files) {
    [...files].forEach(file => {
        // Create a new list item for each file
        const listItem = document.createElement('li');
        const fileName = document.createElement('a');
        fileName.href = URL.createObjectURL(file);
        fileName.download = file.name;
        fileName.textContent = file.name;
        fileName.title = 'Click to download';

        const actions = document.createElement('div');
        actions.className = 'actions';

        const viewIcon = document.createElement('i');
        viewIcon.className = 'fas fa-eye';
        viewIcon.title = 'View';
        viewIcon.addEventListener('click', () => viewDocument(file));

        const downloadIcon = document.createElement('i');
        downloadIcon.className = 'fas fa-download';
        downloadIcon.title = 'Download';
        downloadIcon.addEventListener('click', () => downloadDocument(file));

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash-alt';
        deleteIcon.title = 'Delete';
        deleteIcon.addEventListener('click', () => deleteDocument(listItem));

        actions.appendChild(viewIcon);
        actions.appendChild(downloadIcon);
        actions.appendChild(deleteIcon);

        listItem.appendChild(fileName);
        listItem.appendChild(actions);
        documentList.appendChild(listItem);
    });
}

function viewDocument(file) {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
}

function downloadDocument(file) {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function deleteDocument(listItem) {
    if (confirm('Are you sure you want to delete this document?')) {
        listItem.remove();
    }
}
// Sample Data (replace with actual data as needed)
const fleetData = {
    totalFleets: 50,
    upcomingMaintenance: 5,
    maintenanceCosts: 12000 // in SAR
};

// Update Dashboard
document.getElementById("totalFleets").textContent = fleetData.totalFleets;
document.getElementById("upcomingMaintenance").textContent =
    fleetData.upcomingMaintenance;
document.getElementById("maintenanceCosts").textContent = `SAR ${fleetData.maintenanceCosts
    }`;

// Generate Random Data for Charts
const fleetLabels = Array.from({ length: 50 }, (_, i) => `Fleet ${i + 1}`);
const fleetUsageData = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 500) + 100
);
const maintenanceCostData = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 10000) + 3000
);
const downtimeData = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 50) + 10
);

// Fleet Usage Chart (Bar Chart)
// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: fleetLabels,
        datasets: [{
            label: 'Fleet Usage (hours)',
            data: fleetUsageData,
            backgroundColor: '#4CAF50',
            borderColor: '#388E3C',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Fleet Usage: ${tooltipItem.raw} hours`;
                    }
                }
            }
        }
    }
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: fleetLabels,
        datasets: [{
            label: 'Maintenance Costs (SAR)',
            data: maintenanceCostData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Maintenance Cost: SAR ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: fleetLabels.slice(0, 10),
        datasets: [{
            label: 'Downtime (hours)',
            data: downtimeData.slice(0, 10),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#FFCD56',
                '#4D5360',
                '#B4CD56',
                '#CD4D56'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Downtime: ${tooltipItem.raw} hours`;
                    }
                }
            }
        }
    }
});


