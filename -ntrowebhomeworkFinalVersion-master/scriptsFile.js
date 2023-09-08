$(document).ready(function() {

    $("#HomePage").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/index.html";
            }
        });
        
        return false;
    });    

    
    // Türk yemeklerle alakalı javascriptler başlangıç
    $("#turkish").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/turkishcousine.html";
            }
        });
        
        // Sayfa yeniden yönlendirildiğinde sınıflar tekrar eklenmiş olacak
        // Bu nedenle gerekirse bu kısmı kaldırabilirsiniz
        return false;
    });
    $("#turkishButton").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/turkishcousine.html";
            }
        });
        
        // Sayfa yeniden yönlendirildiğinde sınıflar tekrar eklenmiş olacak
        // Bu nedenle gerekirse bu kısmı kaldırabilirsiniz
        return false;
    });
    

    $(".recipeOne").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/turkishcousine/recipe1.html";
            }
        });
        
        return false;
    });

    $(".recipeOneId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".recipeTwo").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/turkishcousine/recipe2.html";
            }
        });
        
        return false;
    });

    $(".recipeTwoId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".recipeThree").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/turkishcousine/recipe3.html";
            }
        });
        
        return false;
    });

    $(".recipeThreeId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".recipeFour").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/turkishcousine/recipe4.html";
            }
        });
        
        return false;
    });

    $(".recipeFourId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".recipeFive").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/turkishcousine/recipe5.html";
            }
        });
        
        return false;
    });

    $(".recipeFiveId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });


    // Türk yemeklerle alakalı javascriptler Bitişi


    
    $("#france").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/frenchcousine.html";
            }
        });
        
        // Sayfa yeniden yönlendirildiğinde sınıflar tekrar eklenmiş olacak
        // Bu nedenle gerekirse bu kısmı kaldırabilirsiniz
        return false;
    });
    $("#franceButton").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/frenchcousine.html";
            }
        });
        
        // Sayfa yeniden yönlendirildiğinde sınıflar tekrar eklenmiş olacak
        // Bu nedenle gerekirse bu kısmı kaldırabilirsiniz
        return false;
    });


    //meksika mutfagı yemekleri baslangıc 
    $(".mxrecipeOne").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/mexicancousine/blackbeansoup.html";
            }
        });
        
        return false;
    });

    $(".mxrecipeOneId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".mxrecipeTwo").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/mexicancousine/chipotle.html";
            }
        });
        
        return false;
    });

    $(".mxrecipeTwoId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".mxrecipeThree").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/mexicancousine/blackbeansoup.html";
            }
        });
        
        return false;
    });

    $(".mxrecipeThreeId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".mxrecipeFour").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/mexicancousine/fishcaketacos.html";
            }
        });
        
        return false;
    });

    $(".mxrecipeFourId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".mxrecipeFive").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/mexicancousine/quesedilla.html";
            }
        });
        
        return false;
    });

    $(".mxrecipeFiveId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });
    //meksika tarifleri bitiş



    $("#italy").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/italiancousine.html";
            }
        });
        
        // Sayfa yeniden yönlendirildiğinde sınıflar tekrar eklenmiş olacak
        // Bu nedenle gerekirse bu kısmı kaldırabilirsiniz
        return false;
    });
    $("#italyButton").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/italiancousine.html";
            }
        });
        
        // Sayfa yeniden yönlendirildiğinde sınıflar tekrar eklenmiş olacak
        // Bu nedenle gerekirse bu kısmı kaldırabilirsiniz
        return false;
    });
    // italyan yemekleri baslangıc 
    $(".tlyrecipeOne").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/italiancousine/Italiannectarine.html";
            }
        });
        
        return false;
    });

    $(".tlyrecipeOneId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".itrecipeTwo").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/italiancousine/crabpasta.html";
            }
        });
        
        return false;
    });

    $(".itrecipeTwoId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".itrecipeThree").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/italiancousine/Puttanescafocaccia.html";
            }
        });
        
        return false;
    });

    $(".itrecipeThreeId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".itrecipeFour").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/italiancousine/pastawithsalmon.html";
            }
        });
        
        return false;
    });

    $(".itrecipeFourId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });

    $(".itrecipeFive").click(function() {
        var element = $(this);
        
        // Eğer "fadeInDown" sınıfı mevcutsa, kaldır
        if (element.hasClass("fadeInDown")) {
            element.removeClass("fadeInDown");
        } else {
            // Mevcut değilse, ekleyin
            element.addClass("fadeInDown");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/recipefiles/italiancousine/soffiatini.html";
            }
        });
        
        return false;
    });

    $(".itrecipeFiveId").hover(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
        
        // Her iki sınıfı ekleyin
        element.addClass("animated flip");
    }, function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        }
    });


    $("#mexico").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/mexicancousine.html";
            }
        });
        
        return false;
    });
    $("#mexicoButton").click(function() {
        var element = $(this);
        
        // Eğer "animate" veya "flap" sınıfı mevcutsa, her ikisini de kaldır
        if (element.hasClass("animated") || element.hasClass("flip")) {
            element.removeClass("animated flip");
        } else {
            // Eğer her ikisi yoksa, her iki sınıfı ekleyin
            element.addClass("animated flip");
        }
        
        // Belirtilen özelliklere animasyon ekleyin
        element.animate({
            opacity: 0.9
        }, {
            duration: 1000,
            easing: 'swing',
            complete: function() {
                // Animasyon tamamlandığında çalışacak işlev
                window.location.href = "/-ntrowebhomeworkFinalVersion-master/pages/mexicancousine.html";
            }
        });
        
        return false;
    });






   


   
});


