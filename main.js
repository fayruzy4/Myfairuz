const quotes = [
    "Masa depan tidak ditemukan, tetapi dibangun.",
    "Setiap langkah memiliki arah, meskipun tujuannya belum terlihat.",
    "Apa yang kamu lakukan hari ini akan menentukan siapa dirimu esok hari.",
    "Ilmu adalah cahaya, dan usaha adalah jalannya.",
    "Barang siapa menempuh jalan untuk mencari ilmu, Allah akan mudahkan baginya jalan menuju surga.",
    "Tidak semua yang tertunda adalah penolakan, terkadang itu adalah persiapan.",
    "Mimpi tanpa tindakan hanyalah angan, tindakan tanpa arah hanyalah kesibukan.",
    "Versi dirimu di masa depan sedang menunggu keputusan yang kamu ambil hari ini.",
    "Kesabaran dan konsistensi adalah investasi jangka panjang.",
    "Apa yang ditakdirkan untukmu tidak akan tertukar dengan orang lain.",
    "Hidup bukan tentang siapa yang paling cepat, tetapi siapa yang tetap berjalan.",
    "Tidak semua perjalanan membutuhkan kecepatan, beberapa hanya membutuhkan ketekunan.",
    "Tujuan memberi arah, disiplin memberi kemajuan.",
    "Apa yang kamu tanam hari ini akan kamu panen di masa depan.",
    "Kehidupan yang baik dibangun oleh keputusan-keputusan kecil yang konsisten.",
    "Allah tidak membebani seseorang melainkan sesuai kemampuannya.",
    "Masa depan dibangun dua kali: pertama dalam pikiran, kemudian dalam kenyataan.",
    "Setiap hari adalah kesempatan untuk menjadi lebih baik dari kemarin.",
    "Kita tidak bisa mengulang waktu, tetapi kita bisa mengubah arah.",
    "Sering kali pertumbuhan terjadi saat tidak ada yang melihat.",
    "Jangan takut berjalan lambat, takutlah jika berhenti.",
    "Ilmu tanpa amal adalah kesia-siaan, dan amal tanpa ilmu adalah kesesatan.",
    "Tujuan besar dicapai melalui kebiasaan-kebiasaan kecil.",
    "Apa yang sedang dibangun hari ini akan menentukan cerita yang diceritakan esok hari.",
    "Manusia hidup di antara harapan, usaha, dan ketidakpastian.",
    "Kesalahan adalah guru yang sering kali lebih jujur daripada keberhasilan.",
    "Setiap halaman menyimpan tujuan, setiap tujuan menuntut langkah.",
    "Perjalanan panjang selalu dimulai dari satu langkah pertama.",
    "Rumah terbaik bagi mimpi adalah tindakan.",
    "Ilmu adalah bekal, karakter adalah kendaraan."
];

const quoteElement = document.getElementById("quote");

function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

randomQuote();
