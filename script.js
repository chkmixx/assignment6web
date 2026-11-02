$(document).ready(function() {
    console.log("jQuery is ready!");
    $("h1").css("letter-spacing", "1px");
    $("#headline").text("Hi, my name is Tomiris.");
    $(".intro").css("color", "#80616d");

    $("#changeGreeting").click(function() {
        $("#headline").text("Hello! Welcome to my portfolio.");
    });

    $("#lightTheme").click(function() {
        $("body").removeClass("darkTheme");
    });

    $("#darkTheme").click(function() {
        $("body").addClass("darkTheme");
    });
    $("#hideButton").click(function() {
        $("#status, #funFacts").hide();
    });

    $("#showButton").click(function() {
        $("#status, #funFacts").show();
    });

    $("#toggleButton").click(function() {
        $("#status, #funFacts").toggle();
    });
    $("#fadeInButton").click(function() {
        $(".galleryItem").fadeIn();
    });

    $("#fadeOutButton").click(function() {
        $(".galleryItem").fadeOut();
    });

    $("#fadeToggleButton").click(function() {
        $(".galleryItem").fadeToggle();
    });
    $(".favoriteTitle").click(function() {
        $(this).next(".favoritePanel").slideToggle();
    });

    $("#openPanels").click(function() {
        $(".favoritePanel").slideDown();
    });

    $("#closePanels").click(function() {
        $(".favoritePanel").slideUp();
    });
    $("#addSkill").click(function() {
        var skillText = $("#skillInput").val().trim();

        if (skillText !== "") {
            var newSkill = $("<li></li>").text(skillText);
            newSkill.addClass("skill");
            $("#skillList").append(newSkill);
            $("#skillInput").val("");
        }
    });

    $("#prependSkill").click(function() {
        var skillText = $("#skillInput").val().trim();

        if (skillText !== "") {
            var newSkill = $("<li></li>").text(skillText);
            newSkill.addClass("skill");
            $("#skillList").prepend(newSkill);
            $("#skillInput").val("");
        }
    });

    $("#removeSkill").click(function() {
        $("#skillList li").last().remove();
    });
    var linkIsGitHub = true;
    $("#changeLink").click(function() {
        if (linkIsGitHub) {
            $("#socialLink").attr("href", "https://mangalib.me/ru?section=home-updates-3185547");
            $("#socialLink").text("My Mangalib");
            $(this).text("Change link to GitHub");
        } else {
            $("#socialLink").attr("href", "https://github.com/");
            $("#socialLink").text("My GitHub");
            $(this).text("Change link to Mangalib");
        }

        linkIsGitHub = !linkIsGitHub;
    })
    $("#nameInput").on("input", function() {
        $("#nameOutput").text($(this).val() || "—");
    });

    $("#emailInput").on("input", function() {
        $("#emailOutput").text($(this).val() || "—");
    });
    var barsAreOpen = false;

    $("#animateButton").click(function() {
        if (barsAreOpen) {
            $(".skillBar").animate({ width: "0%" }, 700);
            $(this).text("Animate My Skills");
        } else {
            $(".skillBar").each(function() {
                var barWidth = $(this).attr("data-width");
                $(this).animate({ width: barWidth + "%" }, 700);
            });

            $(this).text("Reset Skills");
        }

        barsAreOpen = !barsAreOpen;
    });
});