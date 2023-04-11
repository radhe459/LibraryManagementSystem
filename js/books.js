let get_list = document.getElementsByClassName("gtbut")
for (i = 0; i < get_list.length; i++) {
    get_list[i].setAttribute("id", "c" + i);
}
let return_list = document.getElementsByClassName("rtbut")
for (i = 0; i < return_list.length; i++) {
    return_list[i].setAttribute("id", "cr" + i);
}

function getIt(click_id) {
    const click_btn = document.getElementById(click_id)
    const click_span = click_btn.parentElement.previousElementSibling.firstElementChild
    let count = click_span.innerHTML;
    if (click_span.innerHTML > 0)
        click_span.innerHTML = Number.parseInt(count) - 1;
}

function returnIt(click_id) {
    const click_btn = document.getElementById(click_id)
    const click_span = click_btn.parentElement.previousElementSibling.firstElementChild
    let count = click_span.innerHTML;
    if (click_span.innerHTML < 100)
        click_span.innerHTML = Number.parseInt(count) + 1;
}
