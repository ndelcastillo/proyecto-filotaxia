document.querySelectorAll('.vertical-row > div').forEach(item => {
    const content1 = item.querySelector('.content1');
    const content2 = item.querySelector('.content2');
    let showingFirst = true;

    item.addEventListener('click', () => {
        if (showingFirst) {
            content1.style.opacity = '0';
            content2.style.opacity = '1';
        } else {
            content1.style.opacity = '1';
            content2.style.opacity = '0';
        }
        showingFirst = !showingFirst;
    });
});
