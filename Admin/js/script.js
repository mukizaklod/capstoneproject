const form = document.querySelector('#add-blog-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const body = e.target.elements.body.value;
    
    const data = {
        title,
        description,
        body,
        timestamp: Date.parse(new Date())
    }

    db.collection('Articles').doc(id).set(data).then(() => {
        alert('data saved successful!')
        location.assign(`../article.html#${id}`);
    }).catch((error) => {
        alert(error);
    })
})

