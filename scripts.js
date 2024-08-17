document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');

    textInput.addEventListener('input', () => {
        const count = textInput.value.length;
        charCount.textContent = count;
    });
});
