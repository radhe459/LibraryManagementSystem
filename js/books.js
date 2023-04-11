let btn_list = document.getElementsByClassName("gtbut")
for (i = 0; i < btn_list.length; i++) {
    btn_list[i].setAttribute("id", "c" + i);
}

function getIt(click_id) {
    const click_btn = document.getElementById(click_id)
    const click_span = click_btn.parentElement.previousElementSibling.firstElementChild
    let count = click_span.innerHTML;
    click_span.innerHTML = Number.parseInt(count) - 1;
}
