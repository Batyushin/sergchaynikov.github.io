document.addEventListener('DOMContentLoaded', () => {
    // Список компонентов: id контейнера -> путь к файлу
    const components = {
        'header-container': 'components/header.html',
        'footer-container': 'components/footer.html'
    };

    // Функция для загрузки и вставки HTML
    async function loadComponent(id, path) {
        const container = document.getElementById(id);
        if (!container) return;

        try {
            const response = await fetch(path);
            if (response.ok) {
                container.innerHTML = await response.text();
            } else {
                console.error(`Ошибка загрузки ${path}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Сетевая ошибка при загрузке ${path}:`, error);
        }
    }

    // Запускаем загрузку всех компонентов
    Object.entries(components).forEach(([id, path]) => {
        loadComponent(id, path);
    });
});