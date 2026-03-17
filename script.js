// 画像のリスト（あなたのファイル名に合わせて書き換えてください）
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let currentIndex = 0;

const imgElement = document.getElementById("mangaPage");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updatePage() {
    imgElement.src = images[currentIndex];
    pageInfo.innerText = `${currentIndex + 1} / ${images.length}`;
    
    // 最初のページなら「前へ」を隠す、最後なら「次へ」を隠すなどの調整
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updatePage();
        window.scrollTo(0, 0); // ページ上部へ戻る
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePage();
        window.scrollTo(0, 0);
    }
});

// 初期表示
updatePage();
