document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Data extracted from index.html
    const projects = {
        'alsabah': {
            title: 'Al Sabah HVAC Solutions',
            category: 'Web Development',
            client: 'Al Sabah',
            description: 'We developed a comprehensive digital solution for Al Sabah HVAC Solutions, a licensed HVAC service provider established to meet Kuwait’s growing demand for high-quality, reliable systems. This project supports their vision for expansion into international markets and highlights their commitment to delivering excellence.',
            image: 'images/3.png',
            details: [
                'Designed a user-friendly interface for browsing services.',
                'Implemented a robust backend for managing service requests.',
                'Optimized for search engines to increase visibility.',
                'Integrated contact forms for easy customer inquiries.'
            ]
        },
        'ncamadeeasy': {
            title: 'NCAMadeEasy LMS Platform',
            category: 'Web Development',
            client: 'NCAMadeEasy',
            description: 'NCAMadeEasy is a comprehensive Learning Management System designed for NCA exam preparation, offering a seamless platform for purchasing and accessing specialized courses.',
            image: 'images/4.png',
            details: [
                'Secure payment gateway integration for course purchases.',
                'User dashboard for tracking progress and accessing materials.',
                'Admin panel for managing courses, users, and innovative features.',
                'Responsive design for learning on any device.'
            ]
        },
        'clinic-app': {
            title: 'Clinic Management Application',
            category: 'App Development',
            client: 'Healthcare Provider',
            description: 'A complete Clinic Management Application designed to streamline operations. Features include Appointment Booking Management, Doctor Management, Front Desk Management, and Electronic Medical Records.',
            image: 'images/2.jpg',
            details: [
                'Appointment scheduling and reminders to reduce no-shows.',
                'Digital patient records for easy access and updates.',
                'Role-based access control for doctors, nurses, and staff.',
                'Billing and invoicing integration.'
            ]
        },
        'hotel-app': {
            title: 'Hotel Booking and Management Application',
            category: 'App Development',
            client: 'Hospitality Group',
            description: 'This application enhances guest experience for hotels of all sizes, with features like a general feed, user information view, custom notifications, and engagement tools.',
            image: 'images/1.jpg',
            details: [
                'Real-time room availability and booking engine.',
                'Guest engagement tools including push notifications.',
                'Management dashboard for overseeing bookings and housekeeping.',
                'Feedback and review system to improve service quality.'
            ]
        }
    };

    // Get Project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projects[projectId]) {
        const project = projects[projectId];

        // Populate Data
        document.getElementById('project-name').textContent = project.title;
        document.getElementById('project-hero-image').src = project.image;
        document.getElementById('project-hero-image').alt = project.title;
        document.getElementById('project-client').textContent = project.client;
        document.getElementById('project-category').textContent = project.category;

        // Populate Description and Details
        const descContainer = document.getElementById('project-description-container');
        let detailsHtml = `<p class="wow fadeInUp" data-wow-delay="0.5s">${project.description}</p>`;

        if (project.details && project.details.length > 0) {
            detailsHtml += `<h3 class="wow fadeInUp" data-wow-delay="0.75s">Key Features:</h3><ul class="wow fadeInUp" data-wow-delay="1s">`;
            project.details.forEach(detail => {
                detailsHtml += `<li>${detail}</li>`;
            });
            detailsHtml += `</ul>`;
        }

        descContainer.innerHTML = detailsHtml;

    } else {
        // Handle Invalid ID
        document.getElementById('project-description-container').innerHTML = '<p>Project not found.</p>';
        document.getElementById('project-name').textContent = 'Error';
    }
});
