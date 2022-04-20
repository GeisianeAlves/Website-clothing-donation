const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <h1 id="logo-title-banner" style="padding-top: 50px;">Clothing<br> <span id="logo-subtitle-banner">donation </span></h1>
            
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casual</a></li>
            <li><a href="#" class="footer-link">formal</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women/kids</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casual</a></li>
            <li><a href="#" class="footer-link">formal</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
</div>

        <p class="footer-title">Who We Are</p>
        <p class="info">
                An international organization that works across African and Asian communities to coordinate
                and integrate efforts for countries’ development, assisting with clothing donation for men, 
                women and kids who are in extremelly need,
            i   in collaboration with a network of donors, international and regional organizations 
                and local institutions, in accordance with the needs and commitments 
                of donors and development partners.</p>
        <p class="info"><b>Support Emails:</b> help@clothing.com, customersupport@clothing.com</p>
        <p class="info"><b>Telephone:</b> 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & Services</a>
                <a href="#" class="social-link">Privacy Page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Chothing, donation. Giving Hope for All</p>
        `;
        }

createFooter();