# Car Project

Bu proje, araçları listeleyen ve yöneten bir web uygulamasıdır. Proje, Fastify framework'ü kullanılarak geliştirilmiştir.

## Kurulum

Projeyi yerel ortamınıza klonlayın:
```bash
git clone https://github.com/muhammedfurkan/car-project.git
cd car-project
```

Gerekli bağımlılıkları yükleyin:
```bash
npm install
```

## Kullanım

Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:
```bash
npm start
```

Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

## Örnek API Endpoints

### Tüm Araçları Listele
- **URL:** `/`
- **Method:** `GET`
- **Açıklama:** Tüm araçları listeler.


### Araç Ekle
- **URL:** `/cars`
- **Method:** `POST`
- **Açıklama:** Yeni bir araç ekler.

### Araç Güncelle
- **URL:** `/cars/:id`
- **Method:** `PUT`
- **Açıklama:** Mevcut bir aracı günceller.

### Araç Sil
- **URL:** `/cars/:id`
- **Method:** `DELETE`
- **Açıklama:** Mevcut bir aracı siler.

### Araç Kirala
- **URL:** `/rentals`
- **Method:** `POST`
- **Açıklama:** Bir aracı kiralar.




## Proje Yapısı

```plaintext
project/
│
├── src/
│   ├── models/
│   │   ├── car.js
│   │   ├── rental.js
│   │   ├── insurance.js
│   │   └── account.js
│   ├── routes/
│   │   ├── carRoutes.js
│   │   ├── rentalRoutes.js
│   │   ├── insuranceRoutes.js
│   │   └── accountRoutes.js
│   ├── controllers/
│   │   ├── carController.js
│   │   ├── rentalController.js
│   │   ├── insuranceController.js
│   │   └── accountController.js
│   ├── db/
│   │   └── db.js
│   ├── services/
│   │   └── paymentService.js
│   ├── utils/
│   │   └── notification.js
│   ├── app.js
│   └── config.js
├── package.json
├── .env
└── README.md
```

### `src/controllers/indexController.js`
Bu dosya, araçları listelemek için gerekli olan iş mantığını içerir.

### `src/routes/indexRoutes.js`
Bu dosya, uygulamanın yönlendirme mantığını içerir. `/` endpoint'ine gelen GET isteklerini `indexController.index` fonksiyonuna yönlendirir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açın.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.
