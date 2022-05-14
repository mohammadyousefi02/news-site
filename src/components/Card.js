const Card = (imgSrc, title, desc, date) => {
    return (
        `<div class="col-lg-4 col-12">
        <div class="card pt-3" dir="auto">
        <img src="${imgSrc}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <hr class="my-1">
            <p class="card-text m-">${desc}</p>
            <hr class="m-0 mt-2">
            <div class="py-2"><h6 class="badge bg-primary font-Anjoman">${date}</h6></div>
            
        </div>
    </div>
    </div>`
    )
}

export default Card;