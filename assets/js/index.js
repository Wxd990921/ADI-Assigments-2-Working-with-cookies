'use strict';

function search() {
    if (document.querySelector(".search").value != "") {
        window.location.href = "https://cn.bing.com/search?q=" + document.querySelector(".search").value;
        document.querySelector(".search").value = "";
    }
    return false;
}

function confi() {
    let result = confirm("Active cookies?");
    if (result = true) {
        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));

            return matches ? decodeURIComponent(matches[1]) : undefined;
            alert("Cookies are actived"); 
        }
    } else {
        alert("Cookies are Inactived"); 
    }
};
