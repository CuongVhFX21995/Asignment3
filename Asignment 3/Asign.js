"use strict";

function handeSubmit() {
  // lấy gtri của input
  const error = document.getElementById("error-email");
  // nơi hiển thị lỗi
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // điều kiện của mail
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //dùng math kiểm tra emails
  const check = emailValue.match(checkMail);
  // lấy phần chứa thông tin user
  const sectionContent = document.querySelector(".section-info");
  console.log("email", check);
  // lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    error.innerHTML = "";
  } else {
    erorrEmail.innerHTML = "Email không hợp lệ!";
  }
}
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const sectionInfo = parentElement.querySelectorAll(".section-info");
  const viewMore = parentElement.querySelector(".view");
  if (viewMore.classList.value.includes("view-more")) {
    sectionInfo.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less More";
  } else {
    sectionInfo.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View More";
  }
}
