// site/loader.js

const components = {
    'header-container': 'components/header.html',
    'services-container': 'components/services.html',
    'details-container': 'components/details.html',
    'footer-container': 'components/footer.html'
};

async function loadComponent(id, path) {
    const container = document.getElementById(id);
    if (!container) return;

    try {
        const response = await fetch(path);
        if (response.ok) {
            container.innerHTML = await response.text();
        } else {
            console.error(`Ошибка загрузки: ${path}`);
        }
    } catch (err) {
        console.error(`Ошибка сети: ${err}`);
    }
}

function initLoader() {
    Object.entries(components).forEach(([id, path]) => {
        loadComponent(id, path);
    });
}