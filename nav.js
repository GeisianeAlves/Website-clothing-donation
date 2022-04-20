const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
       <h1 id="logo-title">Clothing <br> <span id="logo-subtitle">donation </span></h1>
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search item">
                <button class="search-btn">Search</button>                
            </div>
            <a href="#"><img src="img/user-vetor.png" alt="user"></a>
            <a href="#"><img src="img/heart.png" alt="cart"></a>
        </div>
    </div>

    <ul class="links-container display-mobile">
        <li class="link-items"><a href="#" class="link">home</a></li>
        <li class="link-items"><a href="#" class="link">women</a></li>
        <li class="link-items"><a href="#" class="link">men</a></li>
        <li class="link-items"><a href="#" class="link">kids</a></li>
        <li class="link-items"><a href="#" class="link">acessories</a></li>
    </ul>
`;
}
createNav();