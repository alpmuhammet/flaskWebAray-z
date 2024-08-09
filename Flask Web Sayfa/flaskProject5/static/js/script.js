// Function to preview image
$(document).ready(function () {
    // Smooth scrolling for sidebar links
    $('.nav-item').on('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Store the target link's href attribute
        var target = $(this).attr('href');

        // Animate the scroll to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

    // Add active class to the current link
    $('.nav-item').on('click', function () {
        // Remove active class from all links
        $('.nav-item').removeClass('active');

        // Add active class to the clicked link
        $(this).addClass('active');
    });

    // Trigger file input click on button click
    $('.upload-button').on('click', function() {
        var step = $(this).data('step');
        $('#file-input-' + step).click();
    });

    // Handle file input change and preview image
    $('.file-input').on('change', function() {
        var step = $(this).attr('id').split('-')[2];
        var input = this;
        var imgPreview = $('#preview' + step);

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                imgPreview.attr('src', e.target.result);
                imgPreview.removeClass('d-none');
            }

            reader.readAsDataURL(input.files[0]);
        }
    });
});


// Document ready function
$(document).ready(function () {
    // Smooth scrolling for sidebar links
    $('.nav-link').on('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Store the target link's href attribute
        var target = $(this).attr('href');

        // Animate the scroll to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

    // Add active class to the current link
    $('.nav-link').on('click', function () {
        // Remove active class from all links
        $('.nav-link').removeClass('active');

        // Add active class to the clicked link
        $(this).addClass('active');
    });

    // Trigger file input click on button click
    $('.upload-button').on('click', function() {
        var step = $(this).data('step');
        $('#file-input-' + step).click();
    });

    // Handle file input change and preview image
    $('.file-input').on('change', function() {
        var step = $(this).attr('id').split('-')[2];
        previewImage(event, 'preview' + step);
    });

    // Navigation buttons
    $('#home-button').on('click', function() {
        window.location.href = '/';
    });

    $('#data-management-button').on('click', function() {
        window.location.href = '/data_management';
    });

    $('#reports-button').on('click', function() {
        window.location.href = '/reports';
    });

    // Total Analysis Chart
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

    // Completed Analysis Chart
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

    // Ongoing Analysis Chart
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

    // Report Charts
    // Bar Chart
    var ctx1 = document.getElementById('reportChart1').getContext('2d');
    var reportChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Aylık Veri Analizleri',
                data: [10000, 12000, 14000, 15000, 16000, 17000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
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

    // Line Chart
    var ctx2 = document.getElementById('reportChart2').getContext('2d');
    var reportChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Analiz Süreçleri',
                data: [5000, 7000, 8000, 9000, 10000, 11000],
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
});
