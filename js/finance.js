
//line chart
let lineCtx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
                datasets: [
                    {
                        label: 'REVENUE',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        data: []
                    },
                    {
                        label: 'REPAYMENT',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        data: []
                    },
                    {
                        label: 'COGS',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        data: []
                    },
                    {
                        label: 'EXPNSES',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        data: []
                    },
                    {
                        label: 'INFLOW',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        data: []
                    },
                    {
                        label: 'OUTFLOW',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        data: []
                    },
                    {
                        label: 'NET CASH FLOW',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        data: []
                    }
					
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        function refreshChart() {
            myChart.data.datasets[0].data = [
                parseFloat(document.getElementById('salesRevenue1').value) || 0,
                parseFloat(document.getElementById('salesRevenue2').value) || 0,
                parseFloat(document.getElementById('salesRevenue3').value) || 0,
                parseFloat(document.getElementById('salesRevenue4').value) || 0,
                parseFloat(document.getElementById('salesRevenue5').value) || 0
            ];
			myChart.data.datasets[1].data = [
                parseFloat(document.getElementById('loanRepayment1').value) || 0,
                parseFloat(document.getElementById('loanRepayment2').value) || 0,
                parseFloat(document.getElementById('loanRepayment3').value) || 0,
                parseFloat(document.getElementById('loanRepayment4').value) || 0,
                parseFloat(document.getElementById('loanRepayment5').value) || 0
            ];
            myChart.data.datasets[2].data = [
                parseFloat(document.getElementById('cogs1').value) || 0,
                parseFloat(document.getElementById('cogs2').value) || 0,
                parseFloat(document.getElementById('cogs3').value) || 0,
                parseFloat(document.getElementById('cogs4').value) || 0,
                parseFloat(document.getElementById('cogs5').value) || 0
            ];
			myChart.data.datasets[3].data = [
                parseFloat(document.getElementById('expenses1').value) || 0,
                parseFloat(document.getElementById('expenses2').value) || 0,
                parseFloat(document.getElementById('expenses3').value) || 0,
                parseFloat(document.getElementById('expenses4').value) || 0,
                parseFloat(document.getElementById('expenses5').value) || 0
            ];
            myChart.data.datasets[4].data = [
                parseFloat(document.getElementById('inflow1').value) || 0,
                parseFloat(document.getElementById('inflow2').value) || 0,
                parseFloat(document.getElementById('inflow3').value) || 0,
                parseFloat(document.getElementById('inflow4').value) || 0,
                parseFloat(document.getElementById('inflow5').value) || 0
            ];
            myChart.data.datasets[5].data = [
                parseFloat(document.getElementById('outflow1').value) || 0,
                parseFloat(document.getElementById('outflow2').value) || 0,
                parseFloat(document.getElementById('outflow3').value) || 0,
                parseFloat(document.getElementById('outflow4').value) || 0,
                parseFloat(document.getElementById('outflow5').value) || 0
            ];
            myChart.data.datasets[6].data = [
                parseFloat(document.getElementById('net1').value) || 0,
                parseFloat(document.getElementById('net2').value) || 0,
                parseFloat(document.getElementById('net3').value) || 0,
                parseFloat(document.getElementById('net4').value) || 0,
                parseFloat(document.getElementById('net5').value) || 0
            ];
            myChart.update();
        }
		
// pie chart		
    let pieChartInstance; // Declare a variable to store the chart instance

    function updatePieChart(option) {
        // Get the capital amount from the input
        const capital = parseFloat(document.getElementById('capital').value);

        if (!isNaN(capital)) {
            // Define the percentage distributions for each option
            let percentages;
            switch (option) {
                case 1:
                    percentages = [0.40, 0.25, 0.20, 0.10, 0.03, 0.02];
                    break;
                case 2:
                    percentages = [0.30, 0.15, 0.30, 0.05, 0.05, 0.20];
                    break;
                case 3:
                    percentages = [0.20, 0.05, 0.15, 0.05, 0.30, 0.25];
                    break;
                case 4:
                    percentages = [0.25, 0.20, 0.10, 0.05, 0.05, 0.35];
                    break;
                case 5:
                    percentages = [0.25, 0.15, 0.20, 0.05, 0.05, 0.30];
                    break;
                default:
                    percentages = [0, 0, 0, 0, 0, 0];
            }

            // Calculate the distribution based on the selected percentages
            const operational = capital * percentages[0];
            const financial = capital * percentages[1];
            const marketing = capital * percentages[2];
            const management = capital * percentages[3];
            const legal = capital * percentages[4];
            const research = capital * percentages[5];

            // Check if the pie chart instance exists and destroy it before creating a new one
            if (pieChartInstance) {
                pieChartInstance.destroy();
            }

            // Create or update the pie chart with new data
            const ctxPie = document.getElementById('pieChartCanvas').getContext('2d');
            pieChartInstance = new Chart(ctxPie, {
                type: 'pie',
                data: {
                    labels: ['Operational Department', 'Financial Department', 'Marketing Department', 'Management Department', 'Legal Department', 'Research and Innovation'],
                    datasets: [{
                        label: 'Capital Distribution',
                        data: [operational, financial, marketing, management, legal, research],
                        backgroundColor: [
                            'rgba(0, 51, 102, 1)',    // Dark Blue for Operational
                            'rgba(0, 76, 153, 1)',    // Medium Dark Blue for Financial
                            'rgba(0, 102, 204, 1)',   // Medium Blue for Marketing
                            'rgba(51, 153, 255, 1)',  // Light Blue for Management
                            'rgba(102, 178, 255, 1)', // Lighter Blue for Legal
                            'rgba(153, 204, 255, 1)'  // Lightest Blue for Research

                        ]
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false // Show the legend
                        }
                    }
                }
            });
        } else {
            alert("Please enter a valid capital amount.");
        }
    }