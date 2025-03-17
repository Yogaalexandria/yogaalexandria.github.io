// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Quiz Interaktif
  document.getElementById('quizBtn').addEventListener('click', function () {
    const jawaban = prompt("Apa warna favoritku?");
    if (jawaban && jawaban.toLowerCase() === "biru") {
      document.getElementById('quizResult').textContent = "Benar! Kamu benar-benar mengenal aku.";
    } else {
      document.getElementById('quizResult').textContent = "Coba lagi, sayang!";
    }
  });

  // Interaksi Pertanyaan Keputusan
document.getElementById('iyaBtn').addEventListener('click', function () {
    document.getElementById('keputusanResult').textContent = "Yeyyy! Ayo kita berjuang bareng-bareng, sayang! ❤️";
  });

  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("qnWRIqmLRwHnDTCkr"); // Ganti dengan User ID yang benar
  });
  
  document.getElementById('iyaBtn').addEventListener('click', function () {
    // Kirim notifikasi via EmailJS
    emailjs.send("service_jbp9i6n", "template_7pcx7lr", {
      to_email: "yogamakarya45@gmail.com", // Alamat email 
      to_name: "Mas Yoga", // Nama Anda
      from_name: "Maidy Sayang", // Nama pacar Anda
      message: "Aku mau balikan! Ayok kita berjuang bareng-bareng! ❤️", // Pesan notifikasi
    })
    .then(function (response) {
      console.log("Notifikasi terkirim!", response.status, response.text);
      document.getElementById('keputusanResult').textContent = "Yeyyy! Ayo kita berjuang bareng-bareng, sayang! ❤️";
    }, function (error) {
      console.error("Gagal mengirim notifikasi:", error);
      document.getElementById('keputusanResult').textContent = "Oops, ada masalah. Coba lagi ya!";
    });
  });

  document.getElementById('tidakBtn').addEventListener('click', function () {
    const button = this; // Tombol "Gamauu"
    const container = button.parentElement; // Container tombol (div.button-container)
  
    // Dapatkan ukuran container dan tombol
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
  
    // Hitung batas pergerakan tombol
    const maxX = containerRect.width - buttonRect.width; // Batas horizontal
    const maxY = containerRect.height - buttonRect.height; // Batas vertikal
  
    // Generate posisi acak dalam batas container
    const randomX = Math.random() * maxX; // Posisi X acak
    const randomY = Math.random() * maxY; // Posisi Y acak
  
    // Atur posisi tombol
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  
    // Tampilkan pesan
    document.getElementById('keputusanResult').textContent = "Jangan gitu dong sayang, coba lagi deh! 😢";
  });

  document.addEventListener("click", function () {
    document.getElementById('backgroundMusic').play();
  }, { once: true }); // Hanya berjalan sekali

