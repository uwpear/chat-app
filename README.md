# 📢 ChatApp - Gerçek Zamanlı Sohbet Uygulaması 💬

ChatApp, gerçek zamanlı sohbet özellikleri sunan basit ve etkili bir web uygulamasıdır. Socket.IO kullanarak çift yönlü iletişim sağlar ve kullanıcıların anlık mesajlaşmasına imkan tanır. 🖥️

## 🚀 Özellikler

- **Gerçek Zamanlı Mesajlaşma:** Kullanıcılar arasında anlık mesajlaşma imkanı.
- **Kanal Desteği:** Farklı sohbet odaları (kanallar) oluşturabilirsiniz.
- **Kolay Kurulum:** Hızlıca kurulum yaparak sohbet uygulamanızı çalıştırabilirsiniz.

## 💻 Kurulum

1. **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/uwpear/chat-app.git
    ```

2. **Proje Dizini İçine Girin:**
    ```bash
    cd chatapp
    ```
    
2. **Node.js indirin:**
    ```bash
    https://nodejs.org/en/download/package-manager
    ```

3. **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

4. **Sunucuyu Başlatın:**
    ```bash
    npm start
    ```

    Sunucu 3000 portunda çalışacaktır. Tarayıcınızı açarak `http://localhost:3000` adresine gidin. 🌐

## 📡 Ngrok ile Erişim

Ngrok, yerel sunucunuzu internet üzerinden erişilebilir hale getirmenizi sağlar. Ngrok kullanarak uygulamanızı paylaşabilir veya test edebilirsiniz.

1. **Ngrok'u İndirin ve Kurun:**
   Ngrok'un en son sürümünü [Ngrok İndirme Sayfası](https://ngrok.com/download) üzerinden indirin ve kurun.

2. **Ngrok'u Başlatın:**
   Aşağıdaki komutu kullanarak yerel sunucunuzu internet üzerinden erişilebilir hale getirin. `3000` portu, `npm start` komutuyla çalıştırdığınız sunucunun portudur.

   ```bash
   ngrok http 3000
   
Ngrok URL'sini Kullanın: Ngrok çalıştırıldığında, terminalde verilen Forwarding URL'sini kullanarak uygulamanıza erişebilirsiniz. Örnek bir URL şöyle görünebilir: https://abcd1234.ngrok.io Bu URL'yi tarayıcınıza yapıştırarak gidin ve orada çıkan mavi butonun içinde "Visit Site" yazısı bulunacaktır. Ona tıklayın ve App'in tadını çıkarın. 🔗

🔧 Kullanım
Kanal Oluşturma: Uygulama arayüzünden yeni bir kanal oluşturabilirsiniz. 🆕
Kanalına Katılma: Mevcut bir kanala katılarak sohbet edebilirsiniz. 🔗
Mesaj Gönderme: Kanaldaki diğer kullanıcılarla gerçek zamanlı mesajlaşabilirsiniz. 📬
📷 Ekran Görüntüleri

🛠️ Teknolojiler
Node.js: Sunucu tarafı uygulama çalıştırma.
Express: Web sunucusu çerçevesi.
Socket.IO: Gerçek zamanlı iletişim için.
Bellek İçi Oturum Depolaması: Oturum verilerini geçici olarak saklamak için.

📜 Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. 📑

💬 Katkıda Bulunun
Katkıda bulunmak isterseniz, lütfen bir çekme isteği (pull request) gönderin veya bir sorun bildiriniz. Tüm katkılarınız için teşekkür ederiz! 🙏

🌐 İletişim
Geliştirici: Uwpear
E-posta: byates_41@protonmail.com

🎉 Teşekkürler
ChatApp'i kullanmayı seçtiğiniz için teşekkür ederiz! Başka projelerimiz için bizi takip etmeyi unutmayın. 🚀
