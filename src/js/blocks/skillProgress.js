const skillProgress = () => {
    const progressBar = document.querySelectorAll('.ratio__progressbar.ratio__progressbar-progress');
    const progressText = document.querySelectorAll('.ratio__head-progress');

    progressBar.forEach((item, i) => {
        const progress = item.getAttribute('data-progress');

        item.style.width = progress + '%';

        progressText[i].textContent = progress + '%';
    });
};

export default skillProgress;
