const Card = (imgSrc, title, desc) => {
    return (
        `<div class="card pt-3" style="width: 18rem;">
        <img src="${imgSrc}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <hr>
            <p class="card-text">${desc}</p>
            <hr>
            <h6 class="badge bg-primary">${date}</h6>
        </div>
    </div>`
    )
}