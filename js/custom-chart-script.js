const xValues = ['1D', '5D', '1M', '3M', '6M', '1Y'];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            data: [45, 60, 40, 200, 250, 100],
            borderColor: "#cf1818",
            backgroundColor: "#cf1818", // Set the background color of the dataset
            fill: false,
            tension: 0.4, // Adjust tension for smoother lines
            pointRadius: function(context) {
                // Set point radius based on the index
                return context.dataIndex === xValues.length - 2 ? 13.5 : 0; // Show a ball only for "1Y", and no others
            },
            pointHoverRadius: 13.5, // Set point hover radius to the same value
            pointStyle: 'circle' // Set point style to circle
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false, // Disable aspect ratio
        aspectRatio: null, // Set aspect ratio to null
        scales: {
            x: {
                ticks: {
                    color: '#18b5cf', // Change x-axis label color
                    font: {
                        size: 14 // Set font size of x-axis labels
                    }
                },
                grid: {
                    display: false // Hide the x-axis grid lines
                },
                categorySpacing: 3 // Adjust the spacing between categories
            },
            y: {
                max: 500, // Set maximum y-axis value to 500
                min: 0, // Set minimum y-axis value to 0
                ticks: {
                    color: '#18b5cf', // Change y-axis label color
                    font: {
                        size: 14 // Set font size of y-axis labels
                    },
                    stepSize: 100 // Set step size to 100
                },
                grid: {
                    color: '#f3fbfd', // Set the color of y-axis grid
                    display: true // Show the y-axis grid lines
                }
            }
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            backgroundColor: function(context) {
                // Check if the hovered point is the last one ("1Y")
                if (context.dataIndex === xValues.length - 1) {
                    return 'purple'; // Set background color to purple for "1Y"
                } else {
                    return 'rgba(255, 255, 255, 0.8)'; // Default background color for other points
                }
            },
            displayColors: false,
            bodyFontSize: 14,
            titleFontSize: 14,
            bodyAlign: 'center',
            titleAlign: 'center',
            xPadding: 5,
            yPadding: 5,
            caretSize: 20 // Set caret size to 20px
        }
    }
});

// chart 2 here
new Chart("myChart2", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            data: [100, 400, 100, 300, 100, 100],
            borderColor: "#cf1818",
            backgroundColor: "#cf1818", // Set the background color of the dataset
            fill: false,
            tension: 0.4, // Adjust tension for smoother lines
            pointRadius: function(context) {
                // Set point radius based on the index
                return context.dataIndex === xValues.length - 3 ? 13.5 : 0; // Show a ball only for "1Y", and no others
            },
            pointHoverRadius: 13.5, // Set point hover radius to the same value
            pointStyle: 'circle' // Set point style to circle
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false, // Disable aspect ratio
        aspectRatio: null, // Set aspect ratio to null
        scales: {
            x: {
                ticks: {
                    color: '#18b5cf', // Change x-axis label color
                    font: {
                        size: 14 // Set font size of x-axis labels
                    }
                },
                grid: {
                    display: false // Hide the x-axis grid lines
                },
                categorySpacing: 3 // Adjust the spacing between categories
            },
            y: {
                max: 500, // Set maximum y-axis value to 500
                min: 0, // Set minimum y-axis value to 0
                ticks: {
                    color: '#18b5cf', // Change y-axis label color
                    font: {
                        size: 14 // Set font size of y-axis labels
                    },
                    stepSize: 100 // Set step size to 100
                },
                grid: {
                    color: '#f3fbfd', // Set the color of y-axis grid
                    display: true // Show the y-axis grid lines
                }
            }
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            backgroundColor: function(context) {
                // Check if the hovered point is the last one ("1Y")
                if (context.dataIndex === xValues.length - 1) {
                    return 'purple'; // Set background color to purple for "1Y"
                } else {
                    return 'rgba(255, 255, 255, 0.8)'; // Default background color for other points
                }
            },
            displayColors: false,
            bodyFontSize: 14,
            titleFontSize: 14,
            bodyAlign: 'center',
            titleAlign: 'center',
            xPadding: 5,
            yPadding: 5,
            caretSize: 20 // Set caret size to 20px
        }
    }
});

