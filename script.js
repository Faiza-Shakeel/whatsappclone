function chatbar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
}
function updatebar() {
    let sidebar = document.getElementById("update-sidebar");
    sidebar.classList.toggle("hidden");
}
function updates(){
    let update= document.getElementById("updates-btn")
    update.classList.remove("hidden")
    let menu_page = document.getElementById("main-menue")
    menu_page.classList.add("hidden")
}
function chats(){
    let update= document.getElementById("updates-btn")
    update.classList.add("hidden")
    let menu_page = document.getElementById("main-menue")
    menu_page.classList.remove("hidden")
}