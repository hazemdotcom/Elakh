document.querySelectorAll('.vote').forEach(vote => {
    const upVote = vote.querySelector('.fa-up-long');
    const downVote = vote.querySelector('.fa-down-long');
    const countSpan = vote.querySelector('span');

    upVote.addEventListener('click', () => {
        let count = parseInt(countSpan.textContent);
        count++;
        countSpan.textContent = count;
    });

    downVote.addEventListener('click', () => {
        let count = parseInt(countSpan.textContent);
        if (count > 0) {
            count--;
            countSpan.textContent = count;
        }
    });
});
