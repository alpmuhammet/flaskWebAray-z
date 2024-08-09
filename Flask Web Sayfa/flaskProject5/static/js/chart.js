$(document).ready(function() {
    $('#home-button').on('click', function() {
        window.location.href = '/';
    });

    $('#data-management-button').on('click', function() {
        window.location.href = '/data_management';
    });

    $('#reports-button').on('click', function() {
        window.location.href = '/reports';
    });

    // Chart.js initialization for each chart
    var ctxTotal = document.getElementById('totalAnalysisChart').getContext('2d');
    var totalAnalysisChart = new Chart(ctxTotal, {
        type: 'bar',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Toplam Analiz Sayısı',
                data: [12000, 19000, 3000, 5000, 2000, 3000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxCompleted = document.getElementById('completedAnalysisChart').getContext('2d');
    var completedAnalysisChart = new Chart(ctxCompleted, {
        type: 'line',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Tamamlanan Analiz Sayısı',
                data: [15000, 18000, 25000, 22000, 20000, 25000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctxOngoing = document.getElementById('ongoingAnalysisChart').getContext('2d');
    var ongoingAnalysisChart = new Chart(ctxOngoing, {
        type: 'pie',
        data: {
            labels: ['Devam Eden', 'Tamamlanan'],
            datasets: [{
                label: 'Devam Eden Analiz Sayısı',
                data: [68934, 31066],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });
});