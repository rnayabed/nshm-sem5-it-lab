

function onLoad() {
    const items = [
        {
            'name': 'Revenant',
            'price': '₹6,499',
            'rating': 3,
            'img': './assets/rev.jpg'
        },
        {
            'name': 'Cacodemon',
            'price': '₹7,999',
            'rating': 4,
            'img': './assets/cac.jpg'
        },
        {
            'name': 'Slayer',
            'price': '₹3,499',
            'rating': 5,
            'img': './assets/slayer.jpg'
        },
        {
            'name': 'Pinky',
            'price': '₹8,499',
            'rating': 2,
            'img': './assets/pinky.jpg'
        },
        {
            'name': 'Imp',
            'price': '₹6,999',
            'rating': 4,
            'img': './assets/imp.jpg'
        },
        {
            'name': 'Spider',
            'price': '₹4,999',
            'rating': 4,
            'img': './assets/spider.jpg'
        }
    ];

    let newDomContent = '';
    items.forEach(item => {

        let starContent = Array.from({ length: item['rating'] }, () => `<img src="./assets/star.svg">`).join('');

        newDomContent += `
            <div class="item">
                <img src="${item['img']}">
                <div>
                    <div>
                        <p>${item['name']}</p>
                        <p>${item['price']}</p>
                    </div>
                    <div>
                        <div>
                            ${starContent}
                        </div>
                        <span class='add-btn'><img src="./assets/buy.svg"></span>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector('#shop-grid').innerHTML = newDomContent;

    document.querySelectorAll('.add-btn').forEach(btn => btn.addEventListener('click', () => {
        cartCount++;
        document.querySelector('#cart').innerHTML=`Cart (${cartCount})`;
    }));
}

document.addEventListener('DOMContentLoaded', onLoad);


let cartCount = 0;