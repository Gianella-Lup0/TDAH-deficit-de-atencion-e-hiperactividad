document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment').value;
    const authorText = document.getElementById('author').value;

    if (commentText.trim() !== '' && authorText.trim() !== '') {
        const commentSection = document.querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        
        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = authorText + ':';

        const comment = document.createElement('p');
        comment.textContent = commentText;

        newComment.appendChild(author);
        newComment.appendChild(comment);
        commentSection.appendChild(newComment);

        document.getElementById('comment').value = '';
        document.getElementById('author').value = '';
    }
});
