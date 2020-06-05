<template>
    <div>
        <header class="header">
            <b-navbar id="topbar" type="dark" variant="faded" class="garisBawah">
                <div class="container">
                    <b-collapse is-nav>
                        <b-navbar-nav class="ml-auto textKecil">
                            <b-nav-item href="#"><b-icon icon="three-dots"></b-icon><span>0274-2885822</span></b-nav-item>
                            <b-nav-item href="#"><b-icon icon="chat-dots"></b-icon><span>Live Chat</span></b-nav-item>
                            <b-nav-item href="#"><b-icon icon="person-circle"></b-icon><span>Member Area</span></b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
            </b-navbar>
            <b-navbar type="dark" variant="faded" class="garisBawah">
                <div class="container textBold">
                    <b-navbar-brand href="#"><img src="https://www.niagahoster.co.id/assets/images/2019/navbar/nh-logo.svg"></b-navbar-brand>
                    <a href="#" class="icon" v-on:click="show">&#9776;</a>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item href="#">Hosting</b-nav-item>
                            <b-nav-item href="#">Domain</b-nav-item>
                            <b-nav-item href="#">Server</b-nav-item>
                            <b-nav-item href="#">Website</b-nav-item>
                            <b-nav-item href="#">Afiliasi</b-nav-item>
                            <b-nav-item href="#">Promo</b-nav-item>
                            <b-nav-item href="#">Pembayaran</b-nav-item>
                            <b-nav-item href="#">Review</b-nav-item>
                            <b-nav-item href="#">Kontak</b-nav-item>
                            <b-nav-item href="#">Blog</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
            </b-navbar>
            <div class="container">
                <b-container class="paddingAB">
                    <b-row>
                    <b-col>
                        <h2>PHP Hosting</h2>
                        <h3>Cepat, Handal, Penuh dengan modul PHP yang Anda butuhkan</h3>
                        <ul class="checkBullet">
                            <li>Solusi PHP untuk performa query yang lebih cepat</li>
                            <li>Konsumsi memory yang lebih rendah</li>
                            <li>Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7</li>
                            <li>Fitur enkripsi IonCube dan Zen Guard Loaders</li>
                        </ul>  
                    </b-col>
                    <b-col><img src="assets/svg/illustration banner PHP hosting-01.svg"></b-col>
                    </b-row>
                </b-container>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    methods: {
        show(){
            let x = document.getElementById("nav-collapse");
            console.log(x.className);
            if (x.className === "topnav" || x.className === "navbar-collapse collapse") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    }
}
</script>