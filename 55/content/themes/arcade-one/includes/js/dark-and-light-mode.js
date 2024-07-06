$(document).ready(function() {
    // استخدم localStorage لتخزين حالة الوضع (الداكن أو المفتوح)
    var currentTheme = localStorage.getItem("theme");

    // إذا لم يتم العثور على حالة محفوظة أو كانت تساوي "light"، استخدم الوضع الافتراضي (مثلاً الوضع الفاتح)
    if (!currentTheme || currentTheme === "light") {
        currentTheme = "light";
    } else {
        currentTheme = "dark";
    }

    // تعيين الستايل المناسب بناءً على الوضع
    var themeIcon = document.getElementById("theme-icon");
    var darkStyleLink = document.getElementById("dark-style");
    var lightStyleLink = document.getElementById("light-style");

    if (currentTheme === "dark") {
        darkStyleLink.disabled = false;
        lightStyleLink.disabled = true;
        $("body").addClass("dark-mode");
        themeIcon.src = "https://friv.cool/content/themes/arcade-one/images/light-style.webp";
    } else {
        darkStyleLink.disabled = true;
        lightStyleLink.disabled = false;
        $("body").removeClass("dark-mode");
        themeIcon.src = "https://friv.cool/content/themes/arcade-one/images/dark-style.webp";
    }

    // التبديل بين الوضع الداكن والوضوح المفتوح عند الضغط على الزر
    $("#toggle-style-2").click(function() {
        if ($("body").hasClass("dark-mode")) {
            darkStyleLink.disabled = true;
            lightStyleLink.disabled = false;
            $("body").removeClass("dark-mode");
            themeIcon.src = "https://friv.cool/content/themes/arcade-one/images/dark-style.webp";
            localStorage.setItem("theme", "light");
        } else {
            darkStyleLink.disabled = false;
            lightStyleLink.disabled = true;
            $("body").addClass("dark-mode");
            themeIcon.src = "https://friv.cool/content/themes/arcade-one/images/light-style.webp";
            localStorage.setItem("theme", "dark");
        }
    });
});


