# 在h5开发中使用alert方法

在H5开发中，使用alert方法时会出现显示域名方法的问题

解决方法，重写alert方法

    window.alert = function(name){
            var iframe = document.createElement("IFRAME");
            iframe.style.display="none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            window.frames[0].window.alert(name);
            iframe.parentNode.removeChild(iframe);
        };