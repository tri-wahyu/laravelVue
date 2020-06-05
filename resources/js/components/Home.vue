<template>
    <div class="container paddingAB">
        <b-card-group deck>
            <b-card class="centerCard">
                <embed src="assets/svg/icon PHP Hosting_zendguard.svg" type="">                   
                <template v-slot:footer>
                    PHP Zend Guard Loader
                </template>
            </b-card>
            <b-card class="centerCard">
                <embed src="assets/svg/icon PHP Hosting_composer.svg" type="">            
                <template v-slot:footer>
                    PHP Composer
                </template>
            </b-card>
            <b-card class="centerCard">        
                <embed src="assets/svg/icon PHP Hosting_ioncube.svg" type="">
                <template v-slot:footer>
                    PHP Ion Cube Loader
                </template>
            </b-card>
        </b-card-group>
        <b-container class="paddingAB">
            <b-row>
            <b-col class="teksTengah">
                <h2>Paket Hosting Singapura yang Tepat</h2>
                Diskon 40% + Domain dan SSL Gratis untuk Anda
            </b-col>
            </b-row>
        </b-container>
        <b-card-group deck>
            <b-card class="listProduk" v-for="product in products" :key="product.id" v-bind:class="[product.is_best ? 'best' : '']">
                <div class="theBest" v-if='product.is_best'>Best Seller</div>
                <div class="card-header" v-bind:class="[product.is_best ? 'active' : '']">
                    <h4>{{product.name}}</h4>
                </div>
                <b-list-group flush>
                    <b-list-group-item v-bind:class="[product.is_best ? 'active' : '']">
                        <h6 v-if='product.disc>0' class="strikethroughText">Rp. {{curencyFormat(product.price)}}</h6>
                        <h6 v-else>&nbsp;</h6>
                        <h4>Rp. {{totalPrice(product)}}<span style="font-size:x-small">/Bln</span></h4>
                    </b-list-group-item>
                    <b-list-group-item>
                        <ul class="checkBullet" style="text-align:left">
                            <li v-for="ben in splitBen(product.benefit)" :key="ben" >{{ben}}</li>
                        </ul>
                    </b-list-group-item>
                </b-list-group>
                <template v-slot:footer>
                    <b-button pill :variant="[product.is_best ? 'primary' : 'outline-primary']">Pilih Sekarang</b-button>
                </template>
            </b-card>
        </b-card-group>
        <b-container class="paddingAB">
            <b-row>
                <b-col class="teksTengah">
                    <h4>Powerfull dengan Limit PHP yang Lebih Besar</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="teksTengah">
                    <b-list-group>
                        <b-list-group-item><span class="listCheck">max execution time 300s</span></b-list-group-item>
                        <b-list-group-item><span class="listCheck">max execution time 300s</span></b-list-group-item>
                        <b-list-group-item><span class="listCheck">php memory limit 1024MB</span></b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col class="teksTengah">
                    <b-list-group>
                        <b-list-group-item><span class="listCheck">post Max size 128 MB</span></b-list-group-item>
                        <b-list-group-item><span class="listCheck">upload max filesize 128 MB</span></b-list-group-item>
                        <b-list-group-item><span class="listCheck">max input vars 2500</span></b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="paddingAB garis">
            <b-row>
                <b-col class="teksTengah">
                    <h4>Semua Paket Hosting Sudah Termasuk</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4" class="benefit">
                    <embed width="70px" height="70px" src="assets/svg/icon PHP Hosting_PHP Semua Versi.svg">
                    <br>
                    <span class="benefitJudul" s>PHP Semua Versi</span>
                    <br>
                    Pilih mulai versi PHP 5.3 s/d PHP7. Ubah sesuka Anda!
                </b-col>
                <b-col cols="4" class="benefit">
                    <embed width="70px" height="70px" src="assets/svg/icon PHP Hosting_garansi uptime.svg">
                    <br>
                    <span class="benefitJudul" s>MySQL Versi 5.6</span>
                    <br>
                    Nikmati MySQL versi terbaru, tercepat, dan kaya akan fitur.
                </b-col>
                <b-col cols="4" class="benefit">
                    <embed width="70px" height="70px" src="assets/svg/icon PHP Hosting_InnoDB.svg">
                    <br>
                    <span class="benefitJudul" s>Panel Hosting cPanel</span>
                    <br>
                    Kelola website dengan panel cangging yang familiar di hati anda.
                </b-col>
                <b-col cols="4" class="benefit">
                    <embed width="70px" height="70px" src="assets/svg/icon PHP Hosting_My SQL remote.svg">
                    <br>
                    <span class="benefitJudul" s>Garansi Uptime 99.9%</span>
                    <br>
                    Data Center yang mendukung kelangsungan website anda 24/7.
                </b-col>
                <b-col cols="4" class="benefit">
                    <embed width="70px" height="70px" src="assets/svg/icon PHP Hosting_My SQL.svg">
                    <br>
                    <span class="benefitJudul" s>Database InnoDB Unlimited</span>
                    <br>
                    Jumlah dan ukuran database yang tumbuh sesuai kebutuhan anda
                </b-col>
                <b-col cols="4" class="benefit">
                    <embed width="70px" height="70px" src="assets/svg/icon PHP Hosting_CPanel.svg">
                    <br>
                    <span class="benefitJudul" s>Wildcard Remote MySQL</span>
                    <br>
                    Mendukung s/d 25 max_user-connections dan 100 max_connections
                </b-col>
            </b-row>
        </b-container>
        <b-container class="paddingAB">
            <b-row>
                <b-col class="teksTengah">
                    <h4 style="padding:20px 0">Mendukung Penuh Framework Laravel</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda.
                    <ul class="checkBullet">
                        <li>Install Laravel <strong>1 klik</strong> dengan Softaculous Installer</li>
                        <li>Mendukung ekstensi <strong>PHP MCrypt, phar, mbstring, json,</strong> dan <strong>fileinfo</strong>.</li>
                        <li>Tersedia <strong>Composer</strong> dan <strong>SSH</strong> untuk menginstal packages pillihan anda</li>
                    </ul>
                    <br>
                    <span style="font-size:0.7rem;">Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</span>
                    <br>
                    <b-button pill variant="info" style="margin-top:1rem;">Pilih Hosting Anda</b-button>
                </b-col>
                <b-col><img src="assets/svg/illustration banner support laravel hosting.svg"></b-col>
            </b-row>
        </b-container>
        <b-container class="paddingAB">
            <b-row>
                <b-col  class="teksTengah">
                    <h4>Modul Lengkap untuk Menjalankan Aplikasi Anda.</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <ul class="listBiasa">
                        <li>IcePHP</li>
                        <li>apc</li>
                        <li>apcu</li>
                        <li>apm</li>
                        <li>ares</li>
                        <li>bcmath</li>
                        <li>bcompiler</li>
                        <li>big_int</li>
                        <li>bitset</li>
                        <li>bloomy</li>
                        <li>bz2_filter</li>
                        <li>clamav</li>
                        <li>coin_acceptor</li>
                        <li>crack</li>
                        <li>dba</li>
                    </ul>
                </b-col>
                <b-col>
                    <ul class="listBiasa">
                        <li>http</li>
                        <li>huffman</li>
                        <li>idn</li>
                        <li>igbinary</li>
                        <li>imagick</li>
                        <li>imap</li>
                        <li>inclued</li>
                        <li>inotify</li>
                        <li>interbase</li>
                        <li>intl</li>
                        <li>ioncube_loader</li>
                        <li>ioncube_loader_4</li>
                        <li>jsmin</li>
                        <li>json</li>
                        <li>ldap</li>
                    </ul>
                </b-col>
                <b-col>
                    <ul class="listBiasa">
                        <li>nd_pdo_mysql</li>
                        <li>oauth</li>
                        <li>oci8</li>
                        <li>odbc</li>
                        <li>opcache</li>
                        <li>pdf</li>
                        <li>pdo</li>
                        <li>pdo_dblib</li>
                        <li>pdo_firebird</li>
                        <li>pdo_mysql</li>
                        <li>pdo_odbc</li>
                        <li>pdo_pgsql</li>
                        <li>pdo_sqlite</li>
                        <li>pgsql</li>
                        <li>phalcon</li>
                    </ul>
                </b-col>
                <b-col>
                    <ul class="listBiasa">
                        <li>stats</li>
                        <li>stem</li>
                        <li>stomp</li>
                        <li>suhosin</li>
                        <li>sybase_ct</li>
                        <li>sysvmsg</li>
                        <li>sysvsem</li>
                        <li>sysvshm</li>
                        <li>tidy</li>
                        <li>timezonedb</li>
                        <li>trader</li>
                        <li>translit</li>
                        <li>uploadprogress</li>
                        <li>uri_template</li>
                        <li>uuid</li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="paddingAB">
            <b-row>
                <b-col>
                    <h3>Linux Hosting yang Stabil dengan Teknologi LVE</h3>
                    <p>
                        SuperMicro <strong>Intel Xeon 24-Cores</strong> server dengan RAM <strong>128 GB </strong>dan teknologi <strong>LVE CloudLinux</strong> untuk stabilitas server Anda. Dilengkapi dengan <strong>SSD</strong> untuk kecepatan <strong>MySQL</strong> dan caching, Apache load balancer berbasis LiteSpeed Technologies, <strong>CageFS</strong> security, <strong>Raid-19</strong> protection dan auto backup untuk keamanan website PHP Anda.
                    </p>
                    <b-button pill variant="info" style="margin-top:1rem;">Pilih Hosting Anda</b-button>
                </b-col>
                <b-col><img src="assets/images/Image support.png"></b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Niagahoster',
        // all titles will be injected into this template
        titleTemplate: '%s | My Awesome Webapp'
    },
  data() {
    return {
      // variable array yang akan menampung hasil fetch dari api
      products: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      // fetch data dari api menggunakan axios
      axios.get("http://localhost:8000/api/product").then(response => {
        // mengirim data hasil fetch ke varibale array persons
        this.products = response.data;
      });
    },
    curencyFormat(num, thousandsSeparator = ',', decimalSeparator = '.'){
        let parts = num.toFixed(2).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        return parts.join(decimalSeparator) + (parts.length === 1 ? decimalSeparator + '00' : (parts[1].length === 1 ? '0' : ''));
    },
    totalPrice(data, thousandsSeparator = ',', decimalSeparator = '.'){
        let total=data.price*(1-data.disc);
        return this.curencyFormat(total);
    },
    splitBen(data){
        return data.split(';');
    }
  }
};
</script>