
let completeBtn = document.getElementById("aui-menu-item-views");

completeBtn.addEventListener("click", function(){
    if (completeBtn.innerText !== "Complete") {
        return
    }
    let reviewId = document.getElementById("review-perm-id").innerText
    let rawReviewTitle = document.querySelector(".title-content").innerText
    let reviewTitle = rawReviewTitle.replace(/\b[A-Z]+-\d+\b/g, '')

    alert(reviewId + ": " + reviewTitle);
});