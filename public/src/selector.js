const a = document.querySelectorAll('.sidebar a');

for (let i = 0 ; i < a.length ; i++) {
    if (a[i].className == "active") {
        document.title = a[i].innerHTML;
        i = a.length;
    }
}