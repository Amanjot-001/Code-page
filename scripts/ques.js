const ques = document.querySelectorAll('.ques');

ques.forEach(q => {
    q.addEventListener('click', (e) => {
        const value = q.getAttribute('value')
        console.log(value);
        fetch('/quesValue', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: value
            })
        })
        .then(() => {
            window.location.href = '/path'
        })
    })
})