var prettyDate = {
    format: function (now, time) {
        var date = new Date(time || "");
        var diff = ((new Date(now)).getTime() - date.getTime()) / 1000;
        var dayDiff = Math.floor(diff / 86400);
        if (isNaN(dayDiff) || dayDiff < 0 || dayDiff > 31)
            return;
        return dayDiff == 0 && (
            diff < 60 && "just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
            dayDiff == 1 && "yesterday" ||
            dayDiff < 7 && dayDiff + " days ago" ||
            dayDiff < 31 && Math.ceil(dayDiff / 7) + " weeks ago";
    },
    update: function(now) {
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            if (links[i].title) {
                var date = prettyDate.format(now, links[i].title);
                if (date)
                    links[i].innerHTML = date;
            }
        }
    }
};